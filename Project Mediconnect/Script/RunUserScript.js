function New_User()
{
  


  //Clicks the 'All patients|Patients|User' item of the 'RibbonControl' bar.
  Aliases.MediConnect2.fmMain.RibbonControl.ClickItem("All patients|Patients|User");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.MediConnect2.fmMain.XtraMainMenu.Click("Add");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.Click(165, 7);
  //Enters the text 'testing' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.SetText("testing");
  //Enters '[Tab]' in the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtFirstName.TextBoxMaskBox.Keys("[Tab]");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtLastName.TextBoxMaskBox.Click(21, 10);
  //Enters the text 'UserLast' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtLastName.TextBoxMaskBox.SetText("UserLast");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.TextBoxMaskBox.Click(45, 9);
  //Clicks the 'dtBirthday' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.dtBirthday.Click(137, 13);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtCity.TextBoxMaskBox.Click(103, 6);
  //Enters the text '98234' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.txtCity.TextBoxMaskBox.SetText("98234");
  //Clicks the 'btnSave' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucPatientEditor.layoutPatient.btnSave.Click(9, 11);
}