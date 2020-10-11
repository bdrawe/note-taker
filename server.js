const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require("./data/db.json");

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public'));

function createNewNote(body, noteArray){
    const note = body;
    noteArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, './data/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
      );
    
    return note;
}
function validateNewNote(note){
    if(!note.title || typeof note.title !== "string"){
        return false;
    }
    if(!note.text || typeof note.text !== "string"){
        return false;
    }
    if(!note.id || typeof note.id !== "string"){
        return false;
    }
    return true;
    
}


app.get("/api/notes", (req, res) => {
    res.json(notes);
});
app.post("/api/notes", (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNewNote(req.body)){
        res.status(400).send("This note is not in the right format.");
    } else {
    const note = createNewNote(req.body, notes)
    res.json(req.body);
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, ()=> {
    console.log(`Your app is now listening to Port Number: ${PORT}`);
})

































