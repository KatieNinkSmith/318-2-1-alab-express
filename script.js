const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const PORT = 3000;

// Router

// Templates

// Views
app.get("/", (req, res) => {
  res.send(`<h1>This is the Home Page!</h1>`);
});
app.get("/index", (req, res) => {
  res.send(`<h1>This is the Index!</h1>`);
});
app.get("/user", (req, res) => {
  res.send(`<h1>This is the User Page!</h1>`);
  res.send(
    `<img src="./images/you-are-now-1311af58e0.jpg" alt="you are a user now" />`
  );
});

// Middleware  look into third-party middleware
app.use((req, res, next) => {
  console.log("middleware: i run for all routes");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// response

app.listen(PORT, (req, res) => {
  console.log(`Listening: Server is running on port ${PORT}`);
});
