(function(window) {
  "use strict";
  var App = window.App || {};

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
      return;
    }
    this.serverUrl = url;
  }
  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };
  // RemoteDataStore.prototype.getAll = function() {
  //   $.get(this.serverUrl, function(serverResponse) {
  //     console.log(serverResponse);
  //     cb(serverResponse);
  //   });
  // };
  RemoteDataStore.prototype.getAll = function() {
    RemoteDataStore.prototype.getAll = function(cb) {
      $.get(this.serverUrl, function(serverResponse) {
        console.log(serverResponse);
        serverResponse.forEach(function(object) {
          checkList.addRow(object);
        });
      });
    };
  };
  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "/" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  // RemoteDataStore.prototype.remove = function(key) {
  //   $.ajax(this.serverUrl + '/' + key, {
  //     type: 'DELETE'
  //   });
  // };
  RemoteDataStore.prototype.remove = function(key) {
    var getUrl = this.serverUrl;
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      serverResponse.forEach(function(object) {
        console.log("ID is " + object.id);
        $.ajax(getUrl + "/" + object.id, {
          type: "DELETE"
        });
      });
    });
  };
  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
