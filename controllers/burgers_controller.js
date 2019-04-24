var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

  router.get("/", function(req, res) {
    burger.all(function(data) {
      res.render("index", { data });
    });
  });

router.post("/api/burger", function(req, res) {
  burger.create([
    "burgers_name", "enjoyed"
  ], [req.body.name, req.body.burger], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    burger: req.body.enjoyed
  }, condition, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
    
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
