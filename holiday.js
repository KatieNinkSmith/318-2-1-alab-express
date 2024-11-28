const express = require("express");
const holidayRouter = require("./routes/holiday.js");
const eggnogRouter = require("./routes/eggnog.js");
const gingerBreadManRouter = require("./routes/gingerBreadMan.js");
const path = require("path");
const app = express();
// middleware
app.use((req, res, next) => {
  console.log("Middleware to log requests");
  console.log(req.method, req.url);
  next();
});
app.use((req, res, next) => {
  console.log(`New request: ${req.method} ${req.url}`);
  next();
});
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", holidayRouter);
app.use("/eggnog", eggnogRouter);
app.use("/gingerbreadman", gingerBreadManRouter);

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "images", "you-are-now.jpg");
  res.download(filePath, "mini-gingerbeard.jpg", (err) => {
    console.error("Error downloading", err);
    res.status(500).send("Error downloading");
  });
});
app.use((req, res) => {
  console.log("Middleware if no route works properly");
  res.status(404);
  res.json({ error: "Resource not found" });
});
app.listen(3000, () => {
  console.log("Express is running on port 3000");
});
