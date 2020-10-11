const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require("./data/db.json");

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.listen(PORT, ()=> {
    console.log(`Your app is now listening to Port Number: ${PORT}`);
})

































// const express = require('express');
// const app = express();
// const { notes } = require("./data/db.json")
// const path = require('path');
// const fs = require('fs');
// const PORT = process.env.PORT || 3001;



// app.use(express.static(__dirname + '/public'));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());



// function noteChecker(note) {
//     if(!note.title || typeof note.title !== "string"){
//         return false
//     }
//     if(!note.body || typeof note.body !== "string"){
//         return false;
//     }
//     if(!note.id || typeof note.id !== "string"){
//         return false;
//     }
//     return true;
// };
// function newNote (body, notesArr){
//     const notes = body;
//     notesArr.push(notes);
//     fs.writeFileSync(
//         path.join(__dirname, "./data/db.json"),
//         JSON.stringify({note: notesArr}, null, 2)
//     );
//     return notes;
// }

// // HTML REQUEST
// app.get("/", (req, res)=> {
//     res.sendFile(path.join(__dirname, "./public/index.html" ));
// });
// app.get("/notes", (req, res) =>{
//     res.sendFile(path.join(__dirname, "./public/notes.html" ));
// });
// app.get('api/notes', (req, res) => {
//     res.json({ notes });
// })
// //Display the note
// app.get("data/db", (req, res) => {
//     const results = data;
//     res.json(results);
// });

// //Post a new note
// app.post("/notes", (req, res) => {
//     req.body.id = notes.length.toString();
//     if(!noteChecker(req.body)){
//         res.status(404).send("Error: Not is not formatted correctly")
//     } else {
//         const notes = newNote(req.body, notes);
//         res.json(notes);
//     }
// })

// app.listen(PORT, () => {
//     console.log(`The server is now listening on PORT: ${PORT}`);
// });