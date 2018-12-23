$(document).ready(function() {
  $( "#stt" ).datepicker( {
    dateFormat: "dd.mm.yy"
  });

  $('.breakrow').nextUntil('tr.breakrow').slideToggle(100);
    $('.breakrow').click(function(){
      $(this).nextUntil('tr.breakrow').slideToggle(100);
    });

  $("#button").click(function() {
      let name = $('#userInput').val();
      let stt = $.datepicker.parseDate( "dd.mm.yy", $("#stt").val() );
      let props = {
          name : name,
          temp : 7,
          expiration : stt
      }
      populateList(props);
      $("#userInput").val('');    
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

  $('#userInput').keypress(function (e) {
    if(e.which == 13) {
      let name = $('#userInput').val();
      let stt = $.datepicker.parseDate( "dd.mm.yy", $("#stt").val() );
      let props = {
        name : name,
        temp : 7,
        expiration : stt
      }
      populateList(props);
      $(this).val('');    
    }
    });

});

 
