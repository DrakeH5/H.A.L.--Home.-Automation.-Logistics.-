const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json("hello world")
})

app.listen(5000, () => { console.log("Server started on port 5000") })