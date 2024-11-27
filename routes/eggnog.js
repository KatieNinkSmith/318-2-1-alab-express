const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("eggnog", { title: "Eggnog" });
});

module.exports = router;
