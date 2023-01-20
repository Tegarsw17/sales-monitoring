const express = require("express");
const router = express.Router();

router.get("", function (req, res) {
  res.render("sales/main", {
    title: "Log In",
  });
});

router.get("/catalog", function (req, res) {
  res.render("sales/catalog", {
    title: "Catalog",
  });
});

module.exports = router;
