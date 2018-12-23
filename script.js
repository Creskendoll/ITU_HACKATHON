$(document).ready(function() {

    $('.breakrow').click(function(){
      $(this).nextUntil('tr.breakrow').slideToggle(100);
    });
    $('.breakrow2').click(function(){
      $(this).nextUntil('tr.breakrow2').slideToggle(100);
    });
    $('.breakrow3').click(function(){
      $(this).nextUntil('tr.breakrow3').slideToggle(100);
    });

  let name;

  $("#button").click(function() {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 15);
      let props = {
          name : name,
          temp : 7,
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

  $("#buttonImage").click(function(){
    $(".mainScreen").attr('hidden',true);
    $("#imageDiv").attr('hidden',false);

  })


});

 
