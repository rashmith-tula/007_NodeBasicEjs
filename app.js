var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("<h1 style=\'color: steelblue\'>Welcome to my 1st EJS app</h1>")
});

app.get("/books", function(req, res) {
    var posts = [{ title: "Srimad Bagavadgita", author: "Srila Vyasadeva" },
        { title: "Srimad Bagavatham", author: "Srila Vyasadeva" },
        { title: "Upadeshamritha", author: "Srila Rupa Goswami" },
        { title: "Bhakti Rasamritha Sindhu", author: "Srila Rupa Goswami" },
        { title: "Sri Ishopanishad", author: "Srila Vyasadeva" },
        { title: "Chaitanya Charitamritha", author: "Krishnaraja Kaviraja Goswami" },
        { title: "Srila Prabhupada Lilamritha", author: "Satsvarupa Goswami" }
    ];

    res.render("posts", { posts: posts });
});

app.get("/i/:name", function(req, res) {
    res.render("home", { candidate: req.params.name });
});

app.get("*", function(req, res) {
    res.send("<h3 style=\'color: red\'>This is not a valid request. </h3> <p style=\'color: blue\'>Either enter '/i/' followed by your name or enter '/books' </p>");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running your app...");
});
