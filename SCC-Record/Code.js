function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index");
}

function saveData(start_time,end_time) {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var email = Session.getActiveUser();
  ss.appendRow([new Date(),email,start_time,end_time]);
}
