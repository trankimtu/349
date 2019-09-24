// IIFE
(function(window) {
  "use strict";
  console.log("test mainpayment");
  var FORM_SELECTOR = "[data-payment='form']";
  // var CHECKLIST_SELECTOR = "[data-coffee-order='checklist']";
  var App = window.App;
  var Customer = App.Customer;
  var DataStore = App.DataStore;

  var FormHandler = App.FormHandler;
  // var CheckList = App.CheckList;

  var myCustomer = new Customer("ncc-1701", new DataStore());
  window.myCustomer = myCustomer;

  // var checkList = new CheckList(CHECKLIST_SELECTOR);
  // checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));


  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myCustomer.createCustomer.call(myCustomer, data);
    // checkList.addRow.call(checkList, data);
  });

})(window);
