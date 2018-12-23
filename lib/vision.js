$(document).ready(function(){
    var imageIndex = 0;
    let validNames = data.validNames;
    const service = new Service();
    let APIurl = "https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags&language=en";
    var headers = {
        'Ocp-Apim-Subscription-Key' : '17dae212971d46949bce7448c3391d23',
        'Content-Type' : 'application/json'
    };

    function analyzeIMG(imgURL) {
        var data = {
            'url' : imgURL
        };
        var options = new Options(APIurl, "POST", data, headers);

        service.request(options, function (data) {
            // Put the error JSON in the response textarea.
            var tags = data['tags'];
            var names = [];
    
            tags.forEach(tag => {
                if (validNames.includes(tag['name'])) {
                    names.push(tag['name']);
                }
            });
    
            clearList();
            if(names.length != 0) {
                let currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + 15);
                names.forEach(name => {
                    //do stuff with data
                    let props = {
                        name : name,
                        temp : 30,
                        volume : 10,
                        expiration : currentDate
                    }
                    populateList(props);
                });
                // $("#responseTextArea").val(names.toString());
            }

            console.log(data);
        },
        function (err) {  
                console.log("Error");
                console.log(err);
        });
    }

    const urls = [
        "https://drive.google.com/uc?id=1ILy6j2cPCDeLJa86exTwy6eg0-9Nhg6o",
        "https://drive.google.com/uc?id=14767OL70G5xrKbjZvQXO6LeoExqnzAny",
        "https://drive.google.com/uc?id=1Q-gZTsPG1vR_qBHoDGJ9Rgx5FI34Vd06",
        "https://drive.google.com/uc?id=1bmYxcU1PVGu38nf4Vw6WX62sUlcZNEr5"
    ]

    // set default image
    $('#sourceImage').attr('src', urls[imageIndex]);
    // analyzeIMG(urls[imageIndex]);

    $('#sourceImage').click(function () {
        if (imageIndex >= urls.length){
            imageIndex = 0;
        }
        $("#sourceImage").attr("src", urls[++imageIndex]);
        
        // Display the image.
        var sourceImageUrl = $("#sourceImage").attr('src');
        analyzeIMG(sourceImageUrl);
    });
  
  });