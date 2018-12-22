// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = jQuery = require('jquery')(window);
// const AJAX = require('./lib/Service');
// const service = new AJAX.Service();

$(document).ready(function() {
  let val;

  $("#button").click(function() {
    var markup = "<tr><td><b>Ürününüz: "+val+"    ";
    $("#listem").append(markup);
    var markup2 = "</td></tr>"+"<tr><td>"+new Date()+"</td></tr>"
    $("#listem2").append(markup2); 
  });

  $("#userInput").change(function(event) {
    val = event.target.value;
  });
});
