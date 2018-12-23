$(document).ready(function() {
    $("#idleScreen").load('idle.html');
    setInterval(function () {
        $('#timeText').html(new Date().getHours() + ":" 
        + new Date().getMinutes() + ":" +
        new Date().getSeconds());
        $('#dateText').html(new Date().getDate() + "." 
        + new Date().getMonth() + "." +
        new Date().getFullYear());
      }, 1000);

      $(document.documentElement).keypress(function() {
          $('#idleScreen').attr('hidden', true);
          $('#mainScreen').attr('hidden', false);
      });
});