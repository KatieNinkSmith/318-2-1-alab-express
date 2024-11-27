const express = require("express");
const holidayRouter = require("./routes/holiday.js");
const eggnogRouter = require("./routes/eggnog.js");
const gingerBreadManRouter = require("./routes/gingerBreadMan.js");
const app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", holidayRouter);
app.use("/eggnog", eggnogRouter);
app.use("/gingerbreadman", gingerBreadManRouter);
app.listen(3000, () => {
  console.log("Express is running on port 3000");
});
