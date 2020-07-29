
var express = require('express'); 
var lattes = require('../models/drink.js');
const app = require("../server");


module.exports = function(app) {
  
// menu api
app.get("/menu", function (req, res) {
    lattes.selectAllLattes(function(data) {
        var hbsObject = {
            lattes: data
        };
        console.log(hbsObject);
        res.render("menu", hbsObject);
    });
});

app.post("/api/lattes", function (req, res) {
    lattes.insertLatte(["drink_name", "drank"], [req.body.drink_name, req.body.drank], function(result) {
        res.json({ id: result.insertId });
    });
});

app.put("/api/lattes/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    lattes.updateLatte({ drank: req.body.drank }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

app.delete("/api/lattes/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    lattes.deleteLatte(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

};