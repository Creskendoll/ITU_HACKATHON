const AJAX = require('./lib/Service');
const service = new AJAX.Service();
let URL = "https://api.myjson.com/bins/l4mu0";

// Example of a get request
service.get(URL, function (data) {
    // The response is handled here
    console.log(data);
});

// Example with custom options and data
let data = {};
let method = "get"; 
const opt = new AJAX.Options(URL, method, data);
service.request(opt, function (data) {
    // The response is handled here
    console.log(data);
});
