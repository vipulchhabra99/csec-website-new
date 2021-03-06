var express = require("express"),
    app = express(),
    PORT = 5000 || process.env.PORT;

app.set("view engine","ejs");
app.use(express.static("assets"));

app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/about", function(req, res){
    res.render("about.ejs");
});

app.get("/events", function(req, res){
    res.render("events.ejs");
});

app.get("/team", function(req, res){
    res.render("team.ejs");
});

app.get("/contact", function(req, res){
    res.render("contact.ejs");
});

app.listen(PORT, function(err){
    if(err)
        console.log(err);
    else
        console.log("Server started at port : "+PORT+"... ");
});

