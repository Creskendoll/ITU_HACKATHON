$(document).ready(function() {
  $('.breakrow').nextUntil('tr.breakrow').slideToggle(100);
    $('.breakrow').click(function(){
      $(this).nextUntil('tr.breakrow').slideToggle(100);
    });

  $("#button").click(function() {
      let name = $('#userInput').val();
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 15);
      let props = {
          name : name,
          temp : 7,
          volume : 10,
          expiration : currentDate
      }
      populateList(props);
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
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 15);
      let props = {
        name : name,
        temp : 7,
        volume : 10,
        expiration : currentDate
      }
      populateList(props);
      $(this).val('');    
    }
    });

});

 
