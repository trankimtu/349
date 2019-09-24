(function(window) {
  "use strict";

  var App = window.App || {};

  // We will enter DataStore document as customer.db
  function Customer(customerId, db) {
    console.log("in customer.js");
    this.customerId = customerId;
    this.db = db;
  }

  // customer is DataStore Object which has key = email vaule, and val = order info
  Customer.prototype.createCustomer = function(cus) {
    console.log("Adding customer for " + cus.emailAddress);
    this.db.add(cus.emailAddress, cus);
  };

  Customer.prototype.printCustomer = function() {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log("Thank you " + this.CustomerId + " for your payment:");
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Customer = Customer;
  window.App = App;
})(window);


//
// console
//   // Create myCustomer is a Customer with customerId = 007 and Customer.db = new App.DataStore
//   var myCustomer = new App.Customer('007', new App.DataStore());
//
//   // cus is an DataStore object = {title: 'Mister', name: 'My Name', emailAddress: 'email@email.com', password: 'my password'}
//   myCustomer.createCustomer({
//     title: 'Mister',
//     name: 'Customer 1',
//     emailAddress: 'customer1@email.com',
//     password: 'customer 1 password'
//   });
//   myCustomer.createCustomer({
//     title: 'Miss',
//     name: 'Customer 2',
//     emailAddress: 'customer2@email.com',
//     password: 'customer 2 password'
//   });
//   myCustomer.createCustomer({
//     title: 'Mister',
//     name: 'Customer 3',
//     emailAddress: 'customer3@email.com',
//     password: 'customer 3 password'
//   });
//


//   myCustomer.db;
//   myCustomer.printCustomer(007);
//   myCustomer.db;
//   myCustomer.printCustomer();
