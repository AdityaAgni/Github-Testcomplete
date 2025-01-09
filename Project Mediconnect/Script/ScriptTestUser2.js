function TestUser()
{
  //Clicks the 'Master Data|Environment settings|User' item of the 'RibbonControl' bar.
  Aliases.MediConnect2.fmMain.RibbonControl.ClickItem("Master Data|Environment settings|User");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.MediConnect2.fmMain.XtraMainMenu.Click("Add");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtFirstName.TextBoxMaskBox.Click(36, 6);
  //Enters the text 'aaa' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtFirstName.TextBoxMaskBox.SetText("aaa");
  //Clicks the 'txtLastName' object.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtLastName.Click(36, 2);
  //Enters the text 'bb' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtLastName.TextBoxMaskBox.SetText("bb");
  //Clicks the 'txtFirstName' object.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtFirstName.Click(42, 1);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtDisplayName.TextBoxMaskBox.Click(29, 9);
  //Enters the text 'asdfasdf' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtDisplayName.TextBoxMaskBox.SetText("asdfasdf");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtUserLogin.TextBoxMaskBox.Click(135, 4);
  //Enters the text 'test1' in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtUserLogin.TextBoxMaskBox.SetText("test1");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtUserPwd.TextBoxMaskBox.Click(99, 11);
  //Enters text in the 'TextBoxMaskBox' text editor.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserInfo.lcUserInfo.txtUserPwd.TextBoxMaskBox.SetText(Project.Variables.Password2);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.MediConnect2.fmMain.XtraMainMenu.Click("Save");
  //Clicks the 'btn1' object.
  Aliases.MediConnect2.fmMessage.LayoutControl1.btn1.Click(2, 11);
  //Clicks the 'btnAdd' object.
  Aliases.MediConnect2.fmMain.FhLayoutControl1.ClientPanel.ucUserManagement.FhLayoutControl1.XtraTabControl1.tabUserGroup.lcUserGroup.btnAdd.Click(11, 15);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.MediConnect2.fmMain.XtraMainMenu.Click("Save");
}