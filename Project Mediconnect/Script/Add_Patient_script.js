﻿function Add_Patient()
{
  //Runs the "MediConnect2" tested application.
//  TestedApps.MediConnect2.Run();
//  //Clicks the 'TextBoxMaskBox' object.
//  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.Click(51, 5);
//  //Enters text in the 'TextBoxMaskBox' text editor.
//  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.SetText(Project.Variables.Password1);
//  //Enters '[Enter]' in the 'TextBoxMaskBox' object.
//  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.Keys("[Enter]");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.


  var i = 0;
  var time = new Date()
  while (i < 5) { 
    //Moves the mouse cursor to the menu item specified and then simulates a single click.
    time = new Date()
    Aliases.MediConnect2.fmMain.XtraMainMenu.Click("Add");
   
    //Clicks the 'TextBoxMaskBox' object.
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.Click(35, 13);
    //Enters the text 'Add' in the 'TextBoxMaskBox' text editor.
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.SetText("Add " + time.getMilliseconds());
    //Clicks the 'TextBoxMaskBox' object.
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtLastName.TextBoxMaskBox.Click(35, 9);
    //Enters the text 'Patient' in the 'TextBoxMaskBox' text editor.
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtLastName.TextBoxMaskBox.SetText("Patient" + time.getMilliseconds());
    //Clicks the 'TextBoxMaskBox' object.
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.Click(8, 2);
    //Enters the text '01/01/1990' in the 'TextBoxMaskBox' text editor.
   // Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.SetText("01/01/1990");
   Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.Keys("01/01/1990");
    //Enters '[Tab]' in the 'TextBoxMaskBox' object.
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.Keys("[Tab]");
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtCity.TextBoxMaskBox.SetText("12345");
    //Clicks the 'btnSave' object.
    Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.btnSave.Click();
    Delay(2000);
    i++;
  }
}