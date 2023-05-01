function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index");
}

function saveData(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var email = Session.getActiveUser();
  ss.appendRow([new Date(),email,data.submit_hostname,data.submit_alert,data.submit_service,submit_source,submit_resolution]);
}
