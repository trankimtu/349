(function(window) {
  "use strict";
  // Declare a local variable.
  // If there's an "App" property of the windows, assign local "App" for setInterval(function () {
  // If not, create a new empty one
  var App = window.App || {};

  // DataStore is a data type, like a class
  function DataStore() {
    // console.log("running the DataStore function");

    // create constructor
    // this: prefer new Object
    // property name: data
    // data property: empty (can be add later)
    this.data = {};

    // key: email
    // val: order info
    DataStore.prototype.add = function(key, val) {
      this.data[key] = val;
    };

    DataStore.prototype.get = function(key) {
      return this.data[key];
    };

    DataStore.prototype.getAll = function() {
      return this.data;
    };

    DataStore.prototype.remove = function(key) {
      delete this.data[key];
    };
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);


// console:
//
// var ds = new App.DataStore();
// ds.add('m@bond.com', 'tea');
// ds.add('james@bond.com', 'eshpressho');
// ds.getAll();
// ds.remove('james@bond.com');
// ds.getAll();
// ds.get('m@bond.com');
// ds.get('james@bond.com');
