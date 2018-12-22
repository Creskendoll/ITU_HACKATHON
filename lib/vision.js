
// include to HTML
/* <script src="./lib/Service.js">
</script>
<script src="./script.js"></script> */

$(document).ready(function(){
    const service = new Service();
    let URL = "https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags&language=en";
    
    $('#analyzeBtn').click(function () {
      $("#sourceImage").attr("src", "#");
      $("#responseTextArea").val("");
      $("#captionSpan").text("");
      
      // Display the image.
      var sourceImageUrl = $("#inputImage").val();
      $("#sourceImage").attr("src", sourceImageUrl);
  
      var data = {
        'url' : sourceImageUrl,
      };
      var headers = {
        'Ocp-Apim-Subscription-Key' : '17dae212971d46949bce7448c3391d23',
        'Content-Type' : 'application/json'
      }
  
      var options = new Options(URL, "POST", data, headers);
  
      service.request(options, function (data) {
        // Put the error JSON in the response textarea.
        var tags = data['tags'];
        var names = [];
  
        tags.forEach(tag => {
          names.push(tag['name']);
        });
  
        $("#responseTextArea").val(names.toString());
  
        console.log(data);
      },
      function (err) {  
        console.log("Error");
        console.log(err);
      });
    });
  
  });