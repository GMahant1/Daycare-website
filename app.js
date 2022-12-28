const express  = require("express"); // Import the express library
const app = express(); // Define our app as an instance of express
const port = 8080; // Define our base URL as http:\\localhost:3000

app.set("view engine", "ejs");


app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/choose", (req, res) => {
  res.render("choose");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/team", (req, res) => {
  res.render("team");
});




app.listen(port, function () {
  console.log(`Server running on port ${port}`); // Tell yourself the port number to prevent mistakes in the future.
});