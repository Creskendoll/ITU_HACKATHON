var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);
const AJAX = require('./lib/Service');
const service = new AJAX.Service();

$(document).ready(function(){

$("#button").click(function(){
    $("#listem").append("<li><b>Yeni bir ürün eklendi.</b></li>");
});

<p>
<button id="button">Listenin ürün ekle.</button>
</p>

<ol class="listem">
  <li>ürün</li>
</ol>
