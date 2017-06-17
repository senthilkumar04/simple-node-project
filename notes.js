const fs = require('fs');

var fetchNotes = () => {
    try {
        var notes = JSON.parse(fs.readFileSync('notes-data.json'));
        return notes.length ? notes : [];
    }
    catch(e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var findDuplicates = (checkNote) => {
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => note.title === checkNote.title);
    return duplicateNotes.length ? true : false;
}

var logNote = (note) => {
    console.log('-------');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
    console.log('-------');
}

var addNote = (note) => {
    message = "";
    if(findDuplicates(note)){
        message = "Note Already exists";
    }
    else {
        var notes = fetchNotes();
        notes.push(note);
        saveNotes(notes);
        message = "Note Added successfully";
    }
    return message;
}

var getNotes = () => {
    var notes = fetchNotes();
    return notes;
}

var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((note) => note.title === title);
    return note.length ? note[0] : undefined;
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var removedNotes = notes.filter((note) => note.title !== title);
    saveNotes(removedNotes);
}

module.exports = {
    addNote,
    getNotes,
    getNote,
    removeNote,
    logNote
}