// IIFE
var dataList;
(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment='form']";
  var App = window.App;
  // var DataStore = App.DataStore;

  var FormHandler = App.FormHandler;
  // var CheckList = App.CheckList;

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    // dataList = data;
    var codeBlock = "Thank you for your payment, " + data.title + " " + data.username;
    document.getElementById("ex1").innerHTML = codeBlock;
  });



})(window);
