var db = require("../models");
var rooms = {}

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  
app.get("/chat", (req, res) => {
  res.render("chat",{rooms: rooms})
});

app.get("/register", function (req, res) {  
  res.render("register")
});

app.get("/home", function (req, res) {  
  res.render("home")
});

app.get("/book", function (req, res) {  
  res.render("book")
});

/*app.get("/:room", (res, req) =>{
  res.render("room", {roomName: req.params.room})
})*/


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
