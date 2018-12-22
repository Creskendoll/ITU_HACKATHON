var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

var Options = function (url, method, data){
    this.url = url;
    this.method = method || 'get';
    this.data = data || {};
}

var Service = function() {
    this.request = function (
        options,
        successCallback,
        errorCallback
    ) {
        var that = this;
        $.ajax({
        url: options.url,
        type: options.method,
        data: options.data,
        cache: false,
        success: function(d) {
            successCallback(d);
        },
        error: function(d) {
            if (errorCallback) {
            errorCallback(d);
            return;
            }
            var errorTitle = 'Error in (' + options.url + ')';
            var fullError = JSON.stringify(d);
            console.log(errorTitle);
            console.log(fullError);
            that.log(fullError, errorTitle);
        }
        });
    };
    this.get = function (
        url,
        successCallback,
        errorCallback
    ) {
        this.request(new Options(url), successCallback, errorCallback);
    };
    this.getWithDataInput = function (
        url,
        data,
        successCallback,
        errorCallback
    ) {
        this.request(
        new Options(url, 'get', data),
        successCallback,
        errorCallback
        );
    };
    this.post = function (
        url,
        successCallback,
        errorCallback
    ) {
        this.request(new Options(url, 'post'), successCallback, errorCallback);
    };
    this.postWithData =function (
        url,
        data,
        successCallback,
        errorCallback
    ) {
        this.request(
        new Options(url, 'post', data),
        successCallback,
        errorCallback
        );
    };

    this.log = function (
        message,
        title
    ) {
        alert(title + '\n' + message);
    };
}

module.exports = {
    Service : Service,
    Options : Options
}