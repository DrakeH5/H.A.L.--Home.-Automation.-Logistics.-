const express = require("express");
const app = express();
var static = require('node-static');

var file = new(static.Server)("./index.html");
app.get("/", (req, res) => {
    file.serve(req, res); 
})

app.listen(5000, () => { console.log("Server started on port 5000") })