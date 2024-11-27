const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("holiday", { title: "Holiday" });
});

module.exports = router;
