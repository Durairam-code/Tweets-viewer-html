$(document).ready(function () {
  var d = new Date();
  var today = d.toISOString().slice(0, 10);
  d.setDate(d.getDate() - 1);
  var yesterday = d.toISOString().slice(0, 10);
  d.setDate(d.getDate() - 1);
  var day_before_yesterday = d.toISOString().slice(0, 10);
  $("#today").load("./tweets/"+today+".html");
  $("#yesterday").load("./tweets/"+yesterday+".html");
  $("#day_before_yesterday").load("./tweets/"+day_before_yesterday+".html");
});
