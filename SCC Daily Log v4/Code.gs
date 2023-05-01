function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index");
}

function saveData(start_time,hostname,it_alert,it_service_resolution,end_time) {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var email = Session.getActiveUser();
  ss.appendRow([new Date(),email,start_time,hostname,it_alert,it_service_resolution,end_time]);
}
