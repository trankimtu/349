(function(window) {
  "use	strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    //	Code	will	go	here
    if (!selector) {
      throw new Error("No	selector provided");
    }

    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {
      throw new Error("Could	not	find	element	with	selector:	" + selector);
    }
  }

  // Call	fn	inside	the	submit	handler	callback	in	formhandler.js	and	pass	it	the	data object	that	contains	the	user	input.
  // when	the	form	is	submitted,	the	callback	will	be invoked	and	will	be	passed	whatever	data	the	user	entered	into	the	form.
  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log("Setting	submit	handler	for	form");

    // on method like addEvenListener
    this.$formElement.on("submit", function(event) {

      // event.preventDefault	to	ensure	that	submitting	the	form	does	not	take	the	user away	from	the	CoffeeRun	page
      event.preventDefault();

      // $(this)	gives	you	a	wrapped	object
      // serializeArray	returns	the	form	data	as	an	array	of	objects
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + "	is	" + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      // invoke focus method to the field after submit
      this.elements[0].focus();
    });
  };


  // FormHandler.prototype.addSubmitHandler = function(fn) {
  //   console.log('Setting	submit	handler	for	form');
  //   this.$formElement.on('submit', function(event) {
  //     event.preventDefault();
  //
  //     var data = {};
  //     $(this).serializeArray().forEach(function(item) {
  //       data[item.name] = item.value;
  //       console.log(item.name + '	is	' + item.value);
  //     });
  //     console.log(data);
  //     fn(data);
  //     this.reset();
  //     this.elements[0].focus();
  //   });
  // };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
