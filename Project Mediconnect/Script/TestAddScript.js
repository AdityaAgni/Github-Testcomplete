function Add_Patient()
{
  //Runs the "MediConnect2" tested application.
  TestedApps.MediConnect2.Run();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.Click(51, 5);
  //Enters text in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.SetText(Project.Variables.Password1);
  //Enters '[Enter]' in the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.Keys("[Enter]");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.MediConnect2.fmMain.XtraMainMenu.Click("Add");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.Click(165, 6);
  //Enters the text 'Adam' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.SetText("Adam");
  //Enters '[Tab]' in the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.Keys("[Tab]");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtLastName.TextBoxMaskBox.Click(7, 5);
  //Enters the text 'smith' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtLastName.TextBoxMaskBox.SetText("smith");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.Click(26, 7);
  //Clicks the 'dtBirthday' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.Click(136, 8);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtCity.TextBoxMaskBox.Click(93, 5);
  //Enters the text '12345' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtCity.TextBoxMaskBox.SetText("12345");
  //Clicks the 'btnSave' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.btnSave.Click(12, 12);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.Click(30, 9);
  //Enters the text '01/01/1991' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.Keys("01/01/1991");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtCity.TextBoxMaskBox.Click(103, 4);
  //Enters the text '12345' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtCity.TextBoxMaskBox.SetText("12345");
  //Clicks the 'btnSave' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.btnSave.Click(19, 11);
}