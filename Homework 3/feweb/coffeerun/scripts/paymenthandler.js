(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log("This line is on addSubmitHandler");
    this.$element.on("submit", function(event) {

      event.preventDefault();
    });







    FormHandler.prototype.addSubmitHandler = function(fn) {
      console.log("Setting submit handler for form");
      this.$formElement.on("submit", function(event) {
        event.preventDefault();

        var data = {};
        $(this).serializeArray().forEach(function(item) {
          data[item.name] = item.value;
          console.log(item.name + " is " + item.value);
        });
        console.log(data);
        fn(data);
        this.reset();
        this.elements[0].focus();

        var description = "";
        description +=data["title"] ? " " + data["title"] : "";
        description +=data["username"] ? " " + data["username"] + "." : "";
        description = description == "" ? "." : "," + description;

        $("#note").text("Thank you for your payment" + description);
        $("#receipt").modal();
      });
    };

    FormHandler.prototype.addInputHandler = function(fn) {
      console.log("Setting input handler for form");
      this.$formElement.on("input", "[name=\"emailAddress\"]",
        function(event) {
          var emailAddress = event.target.value;
          var message = "";
          if (fn(emailAddress)) {
            event.target.setCustomValidity("");
          } else {
            message = emailAddress + " is not an authorized email address!";
            event.target.setCustomValidity(message);
          }
        });
    };



  }; // End function

  App.FormHandler = FormHandler;
  window.App = App;
})(window);









// (function(window) {
//   "use strict";
//   var App = window.App || {};
//   var $ = window.jQuery;
//
//   function PaymentFormHandler(selector) {
//     if (!selector) {
//       throw new Error("No selector provided");
//     }
//
//     this.$element = $(selector);
//     if (this.$element.length === 0) {
//       throw new Error("Could not find element with selector: " + selector);
//     }
//   }
//
//   PaymentFormHandler.prototype.addSubmitHandler = function(fn) {
//     console.log("Setting submit handler for form");
//     this.$element.on("submit", function(event) {
//       event.preventDefault();
//
//       var data = {};
//       $(this).serializeArray().forEach(function(item) {
//         data[item.name] = item.value;
//         console.log(item.name + " is " + item.value);
//       });
//       console.log(data);
//       fn(data);
//       this.reset();
//       this.elements[0].focus();
//
//       var description = "";
//       description += data["title"] ? " " + data["title"] : "";
//       description += data["username"] ? " " + data["username"] + "." : "";
//       description = description == "" ? "." : "," + description;
//       $("#note").text("Thank you for your payment" + description);
//       $("#receipt").modal();
//     });
//   };
//
//   PaymentFormHandler.prototype.addInputHandler = function(fn) {
//     console.log("Setting input handler for form");
//     this.$formElement.on("input", "[name=\"emailAddress\"]",
//       function(event) {
//         var emailAddress = event.target.value;
//         var message = "";
//         if (fn(emailAddress)) {
//           event.target.setCustomValidity("");
//         } else {
//           message = emailAddress + " is not an authorized email address!";
//           event.target.setCustomValidity(message);
//         }
//       });
//   };
//
//   App.PaymentFormHandler = PaymentFormHandler;
//   window.App = App;
// })(window);
