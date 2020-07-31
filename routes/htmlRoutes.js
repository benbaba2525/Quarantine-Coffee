
var rooms = {}

module.exports = function(app) {
  // Load index page
  app.get("/", (req, res) => {
    res.render("index",{rooms: rooms})
  });
// Load Menu page
  app.get("/menu", function (req, res) {  
    res.render("menu")
  });
// Load Book page
  app.get("/books", function (req, res) {  
    res.render("books")
  });
// Load chat page
app.get("/chat", (req, res) => {
  res.render("chat",{rooms: rooms})
});
//Load register page
app.get("/register", function (req, res) {  
  res.render("register")
});
// Load successful register page
app.get("/successRegister", function (req, res) {  
  res.render("successRegister")
});
//Load signin page
app.get("/signin", function (req, res) {  
  res.render("signin")
});

// Load incorrect password from signin page
app.get("/incorrect", function (req, res) {  
  res.render("incorrect")
});

// Load email not found from signin page
app.get("/emailNotExist", function (req, res) {  
  res.render("emailNotExist")
});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
