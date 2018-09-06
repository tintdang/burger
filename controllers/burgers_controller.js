var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {

})

router.post("api/burgers", function(req, res){

})

router.put("api/burgers/:id", function(req, res){

})

module.exports = router;