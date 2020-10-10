const express = require('express');
const app = express();
const { data } = require("./data/db.json")
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;


app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "./public/index.html" ));
});
app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/notes.html" ));
});

app.listen(PORT, () => {
    console.log(`The server is now listening on PORT: ${PORT}`);
});