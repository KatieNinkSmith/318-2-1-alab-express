const express = require("express");
const router = express.Router();
// localhost:300/eggnog
router.get("/", (req, res) => {
  res.render("eggnog", { title: "Eggnog" });
});

router.post("/submit", (req, res) => {
  console.log(req.body);
  res.redirect("/eggnog");
});

module.exports = router;
