const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.json("Hello World")
})

app.listen(1001, () => { console.log("Server started on port 1001") })