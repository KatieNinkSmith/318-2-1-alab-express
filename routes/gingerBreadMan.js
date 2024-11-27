const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("gingerbreadman", { title: "Ginger Breadman" });
});
module.exports = router;
