const express = require("express");
const fs = require("fs");
const path = require("path");

const route = express.Router();

route.get("/data", (req, res) =>{

    const FilePath = path.join(__dirname, "sample1.json");

    
})