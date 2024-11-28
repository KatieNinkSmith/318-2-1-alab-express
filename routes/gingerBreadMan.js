const express = require("express");
const router = express.Router();
// localhost:3000/gingerbreadman
router.get("/", (req, res) => {
  res.render("gingerbreadman", { title: "Ginger Breadman" });
});

module.exports = router;
