function changeData(){
  var ss=SpreadsheetApp.getActive();
  var sho=ss.getSheetByName('TradingTimes')
  var tmr=Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "HH:mm:ss");
  var col2=Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "E MMM dd,yyyy HH:mm:ss");
  var col3=new Date(col2).getTime();
  var col4=new Date(col2).getTime();
  var dA=[[col2,col3,col4]];
  sho.getRange('B2:D2').setValues(dA);
  return tmr;
}

function showTimerSideBar()
{
  var ui=HtmlService.createHtmlOutputFromFile('datatimer').setTitle('Javascript Trigger Generator');
  SpreadsheetApp.getUi().showSidebar(ui);
}