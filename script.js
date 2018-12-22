// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = jQuery = require('jquery')(window);
// const AJAX = require('./lib/Service');
// const service = new AJAX.Service();


$(document).ready(function() {
    Date.daysBetween = function( date1, date2 ) {
        //Get 1 day in milliseconds
        var one_day=1000*60*60*24;
      
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
      
        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
          
        // Convert back to days and return
        return Math.round(difference_ms/one_day); 
      }

    var populateList = function (properties) {
        let name = properties.name;
        let expiration = properties.expiration || new Date();
        let temp = properties.temp || 5;
        let volume = properties.volume || 10;
        let remainingday = Date.daysBetween(new Date(), expiration);

        let row = "<tr>" +
        "<td>"+name+"</td>" +
        "<td>"+remainingday+"</td>" +
        "<td>"+temp+"</td>" +
        "<td>"+volume+"</td>"+"</tr>";

        $("#urunler").append(row);
    }
  let name;

  $("#button").click(function() {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 15);
      let props = {
          name : name,
          temp : 30,
          volume : 10,
          expiration : currentDate
      }
      populateList(props);
    // var markup = "<tr><td><b>Ürününüz: "+val+"    ";
    // $("#listem").append(markup);
    // var markup2 = "</td></tr>"+"<tr><td>"+new Date()+"</td></tr>"
    // $("#listem2").append(markup2); 
  });

  $("#userInput").change(function(event) {
    name = event.target.value;
  });

  $("#buttonRecipe").click(function(){
    $(".mainScreen").attr('hidden',true);
    $("#recipeDiv").attr('hidden',false);

  })

  $("#buttonOrder").click(function(){
    $(".mainScreen").attr('hidden', true);
    $("#orderDiv").attr('hidden', false);
    

  })
});

 
