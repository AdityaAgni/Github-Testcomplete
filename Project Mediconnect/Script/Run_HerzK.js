function Run_Herzkatether()
{
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucPatientManagement.LayoutControl1.gcPatient.Click(290, 280);
  //Clicks the 'Selected patient|Create order|Order templates|[2]' item of the 'RibbonControl' bar.
  Aliases.MediConnect2.fmMain.RibbonControl.ClickItem("Selected patient|Create order|Order templates|[2]");
  //Clicks the 'btn3' object.
  Aliases.MediConnect2.fmMessage.LayoutControl1.btn3.Click(43, 4);
  //Selects the 'Material' tab of the 'tabMain' tab control.
  Delay(20000);
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("Material");
  //Clicks the 'Add' item of the 'DockedBarControl' bar.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.d650bdab_6bb2_4328_8575_8f7126dede64.ucPatientOrderLine.BarDockControl.DockedBarControl.ClickItem("Add");
  //Clicks the 'btnFind' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.ucItemManagement.MainLayoutControl.UcItemGridFilterControl.MainLayoutControl.btnFind.Click(15, 10);
  //Clicks the 'gc' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.ucItemManagement.MainLayoutControl.gc.Click(175, 73);
  //Simulates one or several keypresses.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.ucItemManagement.MainLayoutControl.gc.fhTextBox.TextBoxMaskBox.Keys("1");
  //Clicks the 'btnAdd' object.
  Aliases.MediConnect2.fmPatientPopup.FhLayoutControl1.ucOrderTemplateSelect.FhLayoutControl1.btnAdd.Click(8, 12);
  //Selects the 'Protocol' tab of the 'tabMain' tab control.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("Protocol");
  //Clicks the 'Add Medication' item of the 'DockedBarControl' bar.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.zfb8a796_752d_4827_a8a8_dec3532c44e0.ucIntervAppliedMed.BarDockControl.DockedBarControl.ClickItemXY("Add Medication", 159, 23);
  //Clicks the 'PopupLookUpEditForm' object.
  Aliases.MediConnect2.PopupLookUpEditForm.Click(124, 140);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.zfb8a796_752d_4827_a8a8_dec3532c44e0.ucIntervAppliedMed.FhLayoutControl1.UcIntervention1.FhLayoutControl1.gcMainIntervention.SpinEdit.TextBoxMaskBox.Click(12, 10);
  //Simulates one or several keypresses.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.zfb8a796_752d_4827_a8a8_dec3532c44e0.ucIntervAppliedMed.FhLayoutControl1.UcIntervention1.FhLayoutControl1.gcMainIntervention.SpinEdit.TextBoxMaskBox.Keys("10.00");
  //Selects the '[Leistung]' tab of the 'tabMain' tab control.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("[Leistung]");
  //Clicks the 'z66927D6_0DE7_4B34_A183_7D76587B351E' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z629f78e_2f9f_4dcb_8a2c_26f0a663f24c.ucEntryTemplate.MainLayoutControl.z66927D6_0DE7_4B34_A183_7D76587B351E.Click(7, 14);
  //Selects the 'Biopsie *' tab of the 'tabMain' tab control.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.ClickTab("Biopsie *");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z2B3D946_F06B_4A96_88F7_4788F2417E07.TextBoxMaskBox.Click(125, 12);
  //Simulates one or several keypresses.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z2B3D946_F06B_4A96_88F7_4788F2417E07.TextBoxMaskBox.Keys("123");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z5F5CA79_B462_493E_88FC_0DBF72B4663D.TextBoxMaskBox.Click(128, 8);
  //Simulates one or several keypresses.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.z5F5CA79_B462_493E_88FC_0DBF72B4663D.TextBoxMaskBox.Keys("456");
  //Clicks the 'C10C1141_69DF_442B_9374_D24D5F771FB8' object.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.MainLayoutControl.C10C1141_69DF_442B_9374_D24D5F771FB8.Click(12, 11);
  //Clicks the 'Generate Finding Text' item of the 'DockedBarControl' bar.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.FhLayoutControl1.tabMain.z0063d5a_4d81_4117_816a_c1afbac9163c.ucEntryTemplate.BarDockControl.DockedBarControl.ClickItem("Generate Finding Text");
  //Clicks the 'Save  close' item of the 'DockedBarControl' bar.
  Aliases.MediConnect2.fmWorkflow.FhLayoutControl1.ucWorkflow.BarDockControl.DockedBarControl.ClickItem("Save  close");
}