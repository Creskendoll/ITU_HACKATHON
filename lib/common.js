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

var clearList = function () {
    $("#urunler").find(".item-row").remove();
}

var populateList = function (properties) {
    let name = properties.name;
    let expiration = properties.expiration || new Date();
    let temp = properties.temp || 5;
    let volume = properties.volume || 10;
    let remainingday = Date.daysBetween(new Date(), expiration);

    let row = "<tr class='item-row'>" +
    "<td>"+name+"</td>" +
    "<td>"+remainingday+"</td>" +
    "<td>"+temp+"</td>" +
    "<td>"+volume+"</td>"+"</tr>";

    $("#urunler").append(row);
}
