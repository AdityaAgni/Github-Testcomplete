function Run_Herz()
{
  //Runs the "MediConnect2" tested application.
  TestedApps.MediConnect2.Run();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.Click(45, 6);
  //Enters text in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.SetText(Project.Variables.Password1);
  //Enters '[Enter]' in the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmLogin.LayoutControl1.txtPassword.TextBoxMaskBox.Keys("[Enter]");
  Delay(15000);
  //Clicks the 'gcPatient' object.
  Delay(15000);
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucPatientManagement.LayoutControl1.gcPatient.Click(239, 290);
  //Clicks the 'Selected patient|Create order|Order templates|[2]' item of the 'RibbonControl' bar.
  Delay(15000);
  Aliases.MediConnect2.fmMain.RibbonControl.ClickItem("Selected patient|Create order|Order templates|[2]");
  //Clicks the 'btn3' object.
  Aliases.MediConnect2.fmMessage.LayoutControl1.btn3.Click(51, 13);
  //Selects the 'Material' tab of the 'tabMain' tab control.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("Material");
  //Clicks the 'Add' item of the 'DockedBarControl' bar.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.d650bdab_6bb2_4328_8575_8f7126dede64.ucPatientOrderLine.BarDockControl.DockedBarControl.ClickItem("Add");
  //Clicks the 'btnFind' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.ucItemManagement.MainLayoutControl.UcItemGridFilterControl.MainLayoutControl.btnFind.Click(32, 11);
  //Clicks the 'lcMain' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.UcPatientHeader1.lcMain.Click(1047, 19);
  //Clicks the 'gc' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.ucItemManagement.MainLayoutControl.gc.Click(172, 74);
  //Enters the text '1' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.ucItemManagement.MainLayoutControl.gc.fhTextBox.TextBoxMaskBox.Keys("1");
  //Clicks the 'btnAdd' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.btnAdd.Click(15, 6);
  //Clicks the 'lcMain' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.UcHeaderNew1.lcMain.Click(1245, 56);
  //Selects the '[Leistung]' tab of the 'tabMain' tab control.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("[Leistung]");
  //Clicks the 'z66927D6_0DE7_4B34_A183_7D76587B351E' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z629f78e_2f9f_4dcb_8a2c_26f0a663f24c.ucEntryTemplate.MainLayoutControl.z66927D6_0DE7_4B34_A183_7D76587B351E.Click(5, 10);
  //Selects the 'Biopsie *' tab of the 'tabMain' tab control.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("Biopsie *");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z2B3D946_F06B_4A96_88F7_4788F2417E07.TextBoxMaskBox.Click(143, 6);
  //Enters the text '123' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z2B3D946_F06B_4A96_88F7_4788F2417E07.TextBoxMaskBox.SetText("123");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z5F5CA79_B462_493E_88FC_0DBF72B4663D.TextBoxMaskBox.Click(117, 9);
  //Enters the text '456' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z5F5CA79_B462_493E_88FC_0DBF72B4663D.TextBoxMaskBox.SetText("456");
  //Clicks the 'C10C1141_69DF_442B_9374_D24D5F771FB8' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.C10C1141_69DF_442B_9374_D24D5F771FB8.Click(6, 8);
  //Clicks the 'Generate Finding Text' item of the 'DockedBarControl' bar.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.BarDockControl.DockedBarControl.ClickItem("Generate Finding Text");
  //Selects the '[Beurteilung]' tab of the 'tabMain' tab control.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("[Beurteilung]");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z2e94da9_b913_4903_bb0a_8d6d4c19dd9b.ucEntryTemplate.MainLayoutControl.z826EB41_C305_4C5A_84BB_182B82BE141C.TextBoxMaskBox.Click(229, 41);
  //Enters 'testing worklfo[BS][BS][BS]flow' in the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z2e94da9_b913_4903_bb0a_8d6d4c19dd9b.ucEntryTemplate.MainLayoutControl.z826EB41_C305_4C5A_84BB_182B82BE141C.TextBoxMaskBox.Keys("testing worklfo[BS][BS][BS]flow");
  //Clicks the 'Save  close' item of the 'DockedBarControl' bar.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.BarDockControl.DockedBarControl.ClickItem("Save  close");
}