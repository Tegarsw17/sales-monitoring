const express = require("express");
const router = express.Router();

router.get("/login", function (req, res) {
  res.render("sales/login", {
    title: "Log In",
  });
});

router.get("/catalog", function (req, res) {
  res.render("sales/catalog", {
    title: "Catalog",
  });
});

router.get("/catalog/:id", function (req, res) {
  res.render("sales/detail", {
    title: "Detail",
    param: req.params.id
  });
});

module.exports = router;
