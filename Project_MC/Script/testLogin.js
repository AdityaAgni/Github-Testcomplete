﻿function testLogin(uname) { 
  var aConn = ADO.CreateConnection();
  aConn.ConnectionString = Project.Variables.connString;
  aConn.Open();
  var aCmd = ADO.CreateCommand();
  aCmd.ActiveConnection = aConn;
  aCmd.CommandType = adCmdText;
  aCmd.CommandText = "select * from dbo.sys_user where user_login = ?";
  aCmd.Parameters.Append(aCmd.CreateParameter("uname", adChar, adParamInput, uname.length, uname));
  var result = aCmd.Execute();
  Delay(1000);
  if (result.RecordCount == 0) { 
    // username is not found, form message should be shown
    if (!Aliases.MediConnect2.fmErrorBox.Exists) { 
      Log.Error("No message box shown!");
    } else { 
      Log.Message("Passed");
    }
  } else { 
    result.MoveFirst();
    Project.Variables.logUserID = result.Fields.Item("table_id").Value;
  }
  result.Close();
  aConn.Close();
}

function testPopulateTable(tableName, orderBy) { 
    var aConn = ADO.CreateConnection();
    aConn.ConnectionString = "Provider=MSOLEDBSQL;Trusted_Connection=yes;Server=localhost\\mcmm;Database=mediconnect2;User Id=mcclient;Password=outlander;";
    aConn.Open();
    var aCmd = ADO.CreateCommand();
    var strCmd = "select * from " + tableName;
    if (orderBy != null) { 
        if (orderBy != "") strCmd += " order by " + orderBy;
    }
    aCmd.ActiveConnection = aConn;
    aCmd.CommandType = adCmdText;
    aCmd.CommandText = strCmd;
    var result = aCmd.Execute();
    // preparing file
    var FS = getActiveXObject("Scripting.FileSystemObject")
    var fPop = FS.CreateTextFile("D:\\populate\\" + tableName + ".txt", true);
    var i = 0;
    var sLine = "";
    while (i < result.Fields.Count) { 
        if (sLine != "") sLine += "|";
        sLine += result.Fields.Item(i).Name;
        i++;
    }
    fPop.WriteLine(sLine);
    if (result.RecordCount > 0) { 
        result.MoveFirst();
        while (!result.EOF) { 
            sLine = "";
            i = 0;
            while (i < result.Fields.Count) { 
                if (sLine != "") sLine += "|";
                sLine += result.Fields.Item(i).Value;
                i++;
            }
            fPop.WriteLine(sLine);
            result.MoveNext();
        }
    }
    result.Close();
    aConn.Close();
}