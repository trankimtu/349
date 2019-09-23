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
  Customer.prototype.createTitle = function(title) {
    console.log("Adding title for " + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function(customerId) {
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log("Truck " + this.truckId + " has pending orders:");
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Truck = Truck;
  window.App = App;
})(window);


//
// console
//   // Create myTruck is a Truck with stuckId = 007 and truck.db = new App.DataStore
//   var myTruck = new App.Truck('007', new App.DataStore());
//
//   // order is an DataStore object = {emailAddress: 'email@email.com', coffee: 'defaf'}
//   myTruck.createOrder({
//     emailAddress: 'dr@no.com',
//     coffee: 'decaf'
//   });
//   myTruck.createOrder({
//     emailAddress: 'me@goldfinger.com',
//     coffee: 'double mocha'
//   });
//   myTruck.createOrder({
//     emailAddress: 'm@bond.com',
//     coffee: 'earl grey'
//   });
//   myTruck.db;
//   myTruck.deliverOrder('m@bond.com');
//   myTruck.deliverOrder('dr@no.com');
//   myTruck.db;
//   myTruck.printOrders();
