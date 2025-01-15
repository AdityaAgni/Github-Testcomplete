var prjRowIdx, caseRowIdx, detailRowIdx;
var prjSheet, caseSheet, detailSheet;
function exportLogToExcel() { 
    var folderName = "D:\\Github\\Excel Report\\";
    var baseExportFilename = "TestLog" + aqConvert.DateTimeToFormatStr(aqDateTime.Now(), "%Y%m%d_%H%M%S");
    var excelFile;
    var logRootFolder = "";
    var pathParts = Log.Path.split("\\");
    var partIdx = 0;
    while (partIdx < pathParts.length - 2) { 
        if (logRootFolder != "") logRootFolder += "\\";
        logRootFolder += pathParts[partIdx];
        partIdx++;
    }
    var logHeaderInfos = [];
    var logMainInfoFilename = "";
    var lrfInfo = aqFileSystem.GetFolderInfo(logRootFolder);
    var lrfFiles = lrfInfo.Files;
    if (!strictEqual(lrfFiles, null)) { 
        while (lrfFiles.HasNext()) { 
            let fi = lrfFiles.Next();
            let fExt = aqFileSystem.GetFileExtension(fi.Path);
            if (equal(fExt, "tcLogs")) { 
                logMainInfoFilename = fi.Path;
                break;
            }
        }
    }
    // get log folders
    if (aqFileSystem.Exists(logMainInfoFilename)) { 
        var xmlDoc = null;
        try { 
            xmlDoc = Sys.OleObject("MSXML2.DOMDocument.4.0");
        } catch (ex) { 
            try { 
                xmlDoc = Sys.OleObject("MSXML2.DOMDocument.6.0");
            } catch (exx) { 
                Log.Message(exx.message);
            }
        }
        if (xmlDoc != null) { 
            try { 
                //xmlDoc.async = false;
                xmlDoc.setProperty("ProhibitDTD", false);
                xmlDoc.load(logMainInfoFilename);
                if (xmlDoc.parseError.errorCode != 0) Log.Error(xmlDoc.parseError.reason);
                let logsNode = xmlDoc.selectSingleNode('Nodes/Node[@name="root"]/Node[@name="logs"]');
                let cNodes = logsNode.childNodes;
                for (let cnIdx = 0; cnIdx < cNodes.length; cnIdx++) { 
                    let infoItem = { 
                        "LogName" : "", 
                        "LogDescription" : ""
                    };
                    infoItem["LogName"] = cNodes.item(cnIdx).selectSingleNode('Prp[@name="nameofroot"]/@value').text + " " + 
                        DateTimeToStr(ConvertStrDate(cNodes.item(cnIdx).selectSingleNode('Prp[@name="datetime"]/@value').text, ".", ""));
                    infoItem["LogDescription"] = cNodes.item(cnIdx).selectSingleNode('Prp[@name="relpath"]/@value').text;
                    // logHeaderInfos.push(cNodes.item(cnIdx).selectSingleNode('Prp[@name="relpath"]/@value').text);
                    logHeaderInfos.push(infoItem);
                }
            } catch (ex) { 
                Log.Error(ex.message);
            }
        }
    }
    if (Project.Logs.LogItemsCount > 0) {
        // Initializing variables
        // Exporting the test log contents
        var maxCount = Project.Logs.LogItemsCount;
        // sets the starting index of log to be exported
        var minIdx = 0;
        // sets the maximum index of log to be exported
        var maxIdx = 2;
        if (maxCount > maxIdx) maxCount = maxIdx;
        var fileName = folderName + baseExportFilename + "-" + aqString.Format("%0*i", 4, minIdx) + "-" + aqString.Format("%0*i", 4, maxCount) + ".xlsx";
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
        prjSheet.Cell("L", prjRowIdx).Value = "Message";
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
        for (i = minIdx; i < maxCount; i++) { 
            var li = Project.Logs.LogItem(i);
            var descFilename = "";
            var logName = "";
            if (i < logHeaderInfos.length) { 
                descFilename = logRootFolder + "\\" + logHeaderInfos[i]["LogDescription"];
                logName = logHeaderInfos[i]["LogName"];
            }
            try { 
                exportSummary(li, descFilename, logName);
            } catch (ex) { 
                // saving plan summary
                prjSheet.Cell("A", prjRowIdx).Value = (prjRowIdx - 1);
                prjSheet.Cell("B", prjRowIdx).Value = logName;
                prjSheet.Cell("L", prjRowIdx).Value = ex.message;
            }
            excelFile.Save();
            prjRowIdx++;
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

function exportSummary(logItem, descFilename, logName) { 
    var prjName, stTime, edTime, runTime;
    var sch, i;
    var hostName, userName;
    var totalCase, passedCase, warnCase, failedCase;
    var getInfoFromDesc = false;
    totalCase = 0;
    passedCase = 0;
    warnCase = 0;
    failedCase = 0;
    hostName = "";
    userName = "";
    stTime = "";
    edTime = "";
    runTime = "";
    if (aqFileSystem.Exists(descFilename)) { 
        // get summary information from log's description file
        var xmlDoc = null;
        try { 
            xmlDoc = Sys.OleObject("MSXML2.DOMDocument.4.0");
        } catch (ex) { 
            try { 
                xmlDoc = Sys.OleObject("MSXML2.DOMDocument.6.0");
            } catch (exx) { }
        }
        if (xmlDoc != null) { 
            try { 
                xmlDoc.setProperty("ProhibitDTD", false);
                xmlDoc.load(descFilename);
                stTime = DateTimeToStr(ConvertStrDate(xmlDoc.selectSingleNode('Nodes/Node[@name="root"]/Prp[@name="start time"]/@value').text, ".", ""));
                edTime = DateTimeToStr(ConvertStrDate(xmlDoc.selectSingleNode('Nodes/Node[@name="root"]/Prp[@name="stop time"]/@value').text, ".", ""));
                hostName = xmlDoc.selectSingleNode('Nodes/Node[@name="root"]/Prp[@name="computer name"]/@value').text;
                userName = xmlDoc.selectSingleNode('Nodes/Node[@name="root"]/Prp[@name="user name"]/@value').text;
                getInfoFromDesc = true;
            } catch (ex) { }
        }
    }
    if (logItem.ChildCount == 0) { 
        // case
        if (logName != "") prjName = logName + " (Case)";
        else prjName = logItem.Name + " (Case)";
        for (i = 0; i < logItem.DataCount; i++) { 
            var data = logItem.Data(i);
            var sch = data.Scheme;
            if (sch.DataType == ldtTable && sch.Name == "Test Log") { 
                if (!getInfoFromDesc) { 
                    if (data.RowCount > 0) { 
                        stTime = aqConvert.VarToStr(data.Rows(0).ValueByIndex(2));
                        edTime = aqConvert.VarToStr(data.Rows(data.RowCount - 1).ValueByIndex(2)); 
                    }
                }
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
                if (stTime != "") runTime = aqConvert.TimeIntervalToStr(aqDateTime.TimeInterval(aqConvert.StrToDateTime(edTime), aqConvert.StrToDateTime(stTime)));
                // add to case sheet
                caseSheet.Cell("A", caseRowIdx).Value = (prjRowIdx - 1);
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
        if (logName != "") prjName = logName + " (Plan)";
        else prjName = logItem.Name + " (Plan)";
        if (!getInfoFromDesc) {
            for (i = 0; i < logItem.DataCount; i++) { 
                var data = logItem.Data(i);
                var sch = data.Scheme;
                if (sch.DataType == ldtTable && sch.Name == "Project Log") { 
                    stTime = aqConvert.VarToStr(data.Rows(0).ValueByIndex(3));
                    edTime = aqConvert.VarToStr(data.Rows(data.RowCount - 1).ValueByIndex(4));
                    break;
                }
            }
        }
        if (stTime != "") runTime = aqConvert.TimeIntervalToStr(aqDateTime.TimeInterval(aqConvert.StrToDateTime(edTime), aqConvert.StrToDateTime(stTime)));
        totalCase = logItem.ChildCount;
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
            caseSheet.Cell("A", caseRowIdx).Value = (prjRowIdx - 1);
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
function ConvertStrDate(strDate, decSymbol, thSymbol) { 
    var dateVal = 0;
    var strs = strDate.split(decSymbol);
    try { 
        dateVal = VarToFloat(strs[0].replace(thSymbol, ""));
        if (strs.length == 2) { 
            var div = (10 ** strs[1].length);
            dateVal += VarToFloat(strs[1]) / div;
        }
    } catch (ex) { }
    return dateVal;
}