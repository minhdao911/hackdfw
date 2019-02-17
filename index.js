const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.listen(8000, function(req, res){
    console.log("Server is running at " + 8000);
});