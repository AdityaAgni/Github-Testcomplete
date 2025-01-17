﻿var prjRowIdx, caseRowIdx, detailRowIdx;
var prjSheet, caseSheet, detailSheet;
function exportLogToExcel() { 
    var fileName = "D:\\testcompleteexport.xlsx";
    var excelFile;

    if (Project.Logs.LogItemsCount > 0) {
        // Initializing variables
        if (!aqFile.Exists(fileName)) excelFile = Excel.Create(fileName);
        else excelFile = Excel.Open(fileName);

        // creating sheets
        prjSheet = excelFile.AddSheet("Project Log");
        caseSheet = excelFile.AddSheet("Case Log");
        detailSheet = excelFile.AddSheet("Log Detail");
        prjRowIdx = 1;
        caseRowIdx = 1;
        detailRowIdx = 1;
        // create project header
        prjSheet.Cell("A", prjRowIdx).Value = "Project ID";
        prjSheet.Cell("B", prjRowIdx).Value = "Plan / Case Name";
        prjSheet.Cell("C", prjRowIdx).Value = "Start Time";
        prjSheet.Cell("D", prjRowIdx).Value = "End Time";
        prjSheet.Cell("E", prjRowIdx).Value = "Total Test";
        prjSheet.Cell("F", prjRowIdx).Value = "Failed";
        prjSheet.Cell("G", prjRowIdx).Value = "Warning";
        prjSheet.Cell("H", prjRowIdx).Value = "Passed";
        prjSheet.Cell("I", prjRowIdx).Value = "Host Name";
        prjSheet.Cell("J", prjRowIdx).Value = "User Name";
        prjSheet.Cell("K", prjRowIdx).Value = "Run Time";
        prjRowIdx++;
        // create case header
        caseSheet.Cell("A", caseRowIdx).Value = "Project ID";
        caseSheet.Cell("B", caseRowIdx).Value = "Case ID";
        caseSheet.Cell("C", caseRowIdx).Value = "Plan Name";
        caseSheet.Cell("D", caseRowIdx).Value = "Case Name";
        caseSheet.Cell("E", caseRowIdx).Value = "Start Time";
        caseSheet.Cell("F", caseRowIdx).Value = "End Time";
        caseSheet.Cell("G", caseRowIdx).Value = "Run Time";
        caseSheet.Cell("H", caseRowIdx).Value = "Message";
        caseSheet.Cell("I", caseRowIdx).Value = "Status";
        caseRowIdx++;
        // create log detail
        detailSheet.Cell("A", detailRowIdx).Value = "Project ID";
        detailSheet.Cell("B", detailRowIdx).Value = "Case ID";
        detailSheet.Cell("C", detailRowIdx).Value = "Plan Name";
        detailSheet.Cell("D", detailRowIdx).Value = "Case Name";
        detailSheet.Cell("E", detailRowIdx).Value = "Status";
        detailSheet.Cell("F", detailRowIdx).Value = "Message";
        detailSheet.Cell("G", detailRowIdx).Value = "Time";
        detailSheet.Cell("H", detailRowIdx).Value = "Priority";
        detailSheet.Cell("I", detailRowIdx).Value = "Link";
        detailSheet.Cell("J", detailRowIdx).Value = "Has Picture";
        detailSheet.Cell("K", detailRowIdx).Value = "Type Description";
        detailSheet.Cell("L", detailRowIdx).Value = "Time Diff (sec)";
        detailSheet.Cell("M", detailRowIdx).Value = "Time With Children (sec)";
        detailRowIdx++;
        // Exporting the test log contents
        var maxCount = Project.Logs.LogItemsCount;
        // sets number of item to be exported, for testing purpose
        if (maxCount > 19) maxCount = 19;
        try {
            for (i = 9; i < maxCount; i++) { 
                var li = Project.Logs.LogItem(i);
                exportSummary(li);
                prjRowIdx++;
            }
            excelFile.Save();
        } finally {
        }
    } else Log.Message("No logs for export.");
}

function exportDetail(logItem, caseIdx, planName) { 
    for (var idx = 0; idx < logItem.DataCount; idx++) { 
        var data = logItem.Data(idx);
        var sch = data.Scheme;
        if (sch.DataType == ldtTable) { 
            var colCount = sch.ColumnCount;
            detailSheet.Cell("A", detailRowIdx).Value = (prjRowIdx - 1);
            detailSheet.Cell("B", detailRowIdx).Value = caseIdx;
            detailSheet.Cell("C", detailRowIdx).Value = planName;
            detailSheet.Cell("D", detailRowIdx).Value = logItem.Name;
            switch (logItem.Status) { 
                case 0:
                    detailSheet.Cell("E", detailRowIdx).Value = "Passed";
                    break;
                case 1:
                    detailSheet.Cell("E", detailRowIdx).Value = "Warning";
                    break;
                case 2:
                    detailSheet.Cell("E", detailRowIdx).Value = "Failed";
                    break;
            }
            for (var i = 0; i < data.RowCount; i++) { 
                var row = data.Rows(i);
                exportRow(colCount, row, "");
            }
        }
    }
}

function exportRow(colCount, row, prefix) { 
    // Exporting the row
    var i;
    for (i = 1; i < colCount; i++) { 
        var s = aqConvert.VarToStr(row.ValueByIndex(i));
        var col = Chr(69 + i);
        detailSheet.Cell(col, detailRowIdx).Value = prefix + s;
    }
    detailRowIdx++;
    for (i = 0; i < row.ChildRowCount; i++) {
        var cr = row.ChildRow(i);
        exportRow(colCount, cr, prefix + "→");
    }
}

function exportSummary(logItem) { 
    var prjName, stTime, edTime, runTime;
    var sch, i;
    var hostName, userName;
    var totalCase, passedCase, warnCase, failedCase;
    totalCase = 0;
    passedCase = 0;
    warnCase = 0;
    failedCase = 0;
    if (logItem.ChildCount == 0) { 
        // case
        prjName = "Case:" + logItem.Name;
        for (i = 0; i < logItem.DataCount; i++) { 
            var data = logItem.Data(i);
            var sch = data.Scheme;
            if (sch.DataType == ldtTable && sch.Name == "Test Log") { 
                stTime = aqConvert.VarToStr(data.Rows(0).ValueByIndex(2));
                edTime = aqConvert.VarToStr(data.Rows(data.RowCount - 1).ValueByIndex(2));
                hostName = "";
                userName = "";
                for (var j = 0; j < data.RowCount; j++) { 
                    var msg = aqConvert.VarToStr(data.Rows(j).ValueByIndex(1));
                    if (aqString.Find(msg, "Host Name =>", 0, true) > -1) { 
                        var msgs = msg.split(";");
                        hostName = msgs[0];
                        userName = msgs[1];
                        hostName = aqString.Trim(aqString.Replace(hostName, "Host Name =>", "", true));
                        userName = aqString.Trim(aqString.Replace(userName, "User Name =>", "", true));
                        break;
                    }
                }
                runTime = aqConvert.TimeIntervalToStr(aqDateTime.TimeInterval(aqConvert.StrToDateTime(edTime), aqConvert.StrToDateTime(stTime)));
                // add to case sheet
                caseSheet.Cell("A", caseRowIdx).Value = prjRowIdx;
                caseSheet.Cell("B", caseRowIdx).Value = 1;
                caseSheet.Cell("C", caseRowIdx).Value = "";
                caseSheet.Cell("D", caseRowIdx).Value = logItem.Name;
                caseSheet.Cell("E", caseRowIdx).Value = stTime;
                caseSheet.Cell("F", caseRowIdx).Value = edTime;
                caseSheet.Cell("G", caseRowIdx).Value = runTime;
                caseSheet.Cell("H", caseRowIdx).Value = "";
                switch (logItem.Status) { 
                    case 0:
                        caseSheet.Cell("I", caseRowIdx).Value = "Passed";
                        break;
                    case 1:
                        caseSheet.Cell("I", caseRowIdx).Value = "Warning";
                        break;
                    case 2:
                        caseSheet.Cell("I", caseRowIdx).Value = "Failed";
                        break;
                }
                caseRowIdx++;
                break;
            }
        }
        totalCase = 1;
        switch (logItem.Status) { 
            case 0:
                passedCase = 1;
                break;
            case 1:
                warnCase = 1;
                break;
            case 2:
                failedCase = 1;
                break;
        }
        exportDetail(logItem, 1, "");
    } else { 
        // plan
        prjName = "Plan:" + logItem.Name;
        for (i = 0; i < logItem.DataCount; i++) { 
            var data = logItem.Data(i);
            var sch = data.Scheme;
            if (sch.DataType == ldtTable && sch.Name == "Project Log") { 
                stTime = aqConvert.VarToStr(data.Rows(0).ValueByIndex(3));
                edTime = aqConvert.VarToStr(data.Rows(data.RowCount - 1).ValueByIndex(4));
                runTime = aqConvert.TimeIntervalToStr(aqDateTime.TimeInterval(aqConvert.StrToDateTime(edTime), aqConvert.StrToDateTime(stTime)));
                break;
            }
        }
        totalCase = logItem.ChildCount;
        hostName = "";
        userName = "";
        for (i = 0; i < logItem.ChildCount; i++) { 
            var child = logItem.Child(i);
            var chStTime, chEdTime, chRunTime;
            for (var j = 0; j < child.DataCount; j++) { 
                var data = child.Data(j);
                var sch = data.Scheme;
                if (sch.DataType == ldtTable && sch.Name == "Test Log") { 
                    chStTime = aqConvert.VarToStr(data.Rows(0).ValueByIndex(2));
                    chEdTime = aqConvert.VarToStr(data.Rows(data.RowCount - 1).ValueByIndex(2));
                    chRunTime = aqConvert.TimeIntervalToStr(aqDateTime.TimeInterval(aqConvert.StrToDateTime(chEdTime), aqConvert.StrToDateTime(chStTime)));
                    if (hostName == "" && userName == "") { 
                        for (var k = 0; k < data.RowCount; k++) { 
                            var msg = aqConvert.VarToStr(data.Rows(k).ValueByIndex(1));
                            if (aqString.Find(msg, "Host Name =>", 0, true) > -1) { 
                                var msgs = msg.split(";");
                                hostName = msgs[0];
                                userName = msgs[1];
                                hostName = aqString.Trim(aqString.Replace(hostName, "Host Name =>", "", true));
                                userName = aqString.Trim(aqString.Replace(userName, "User Name =>", "", true));
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            switch (child.Status) { 
                case 0:
                    caseSheet.Cell("I", caseRowIdx).Value = "Passed";
                    passedCase++;
                    break;
                case 1:
                    caseSheet.Cell("I", caseRowIdx).Value = "Warning";
                    warnCase++;
                    break;
                case 2:
                    caseSheet.Cell("I", caseRowIdx).Value = "Failed";
                    failedCase++;
                    break;
            }
            // add to case sheet
            caseSheet.Cell("A", caseRowIdx).Value = prjRowIdx;
            caseSheet.Cell("B", caseRowIdx).Value = (i + 1);
            caseSheet.Cell("C", caseRowIdx).Value = logItem.Name;
            caseSheet.Cell("D", caseRowIdx).Value = child.Name;
            caseSheet.Cell("E", caseRowIdx).Value = chStTime;
            caseSheet.Cell("F", caseRowIdx).Value = chEdTime;
            caseSheet.Cell("G", caseRowIdx).Value = chRunTime;
            caseSheet.Cell("H", caseRowIdx).Value = "";
            caseRowIdx++;
            exportDetail(child, (i + 1), logItem.Name);
        }
    }
    if (hostName == "") hostName = Sys.HostName;
    if (userName == "") userName = Sys.UserName;
    // saving plan summary
    prjSheet.Cell("A", prjRowIdx).Value = (prjRowIdx - 1);
    prjSheet.Cell("B", prjRowIdx).Value = prjName;
    prjSheet.Cell("C", prjRowIdx).Value = stTime;
    prjSheet.Cell("D", prjRowIdx).Value = edTime;
    prjSheet.Cell("E", prjRowIdx).Value = totalCase;
    prjSheet.Cell("F", prjRowIdx).Value = failedCase;
    prjSheet.Cell("G", prjRowIdx).Value = warnCase;
    prjSheet.Cell("H", prjRowIdx).Value = passedCase;
    prjSheet.Cell("I", prjRowIdx).Value = hostName;
    prjSheet.Cell("J", prjRowIdx).Value = userName;
    prjSheet.Cell("K", prjRowIdx).Value = runTime;
}