// // production.js
// var deployd = require("deployd");
//
// var server = deployd({
//   port: process.env.PORT || 3000,
//   env: "production",
//   db: {
//     connectionString: "mongodb://localhost:27017/coffeeorders";
//     // host: "localhost",
//     // port: 27017,
//     // name: "coffeeorders",
//     // credentials: {
//     //   username: "username",
//     //   password: "password"
//     // }
//   }
// });
//
// server.listen();
//
// server.on("listening", function() {
//   console.log("Server is listening on port: ", process.env.PORT || 3000);
// });
//
// server.on("error", function(err) {
//   console.error(err);
//   process.nextTick(function() { // Give the server a chance to return an error
//     process.exit();
//   });
// });
