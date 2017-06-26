/** Require statment */
const fs = require('fs');

/** Helper Method for Notes application */

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

var resultFormat = (status, data, message) => {
    var result = {};
    result.status = status;
    result.data = data;
    result.message = message;
    return result;
}


/** Module functions for  notes applciation */

var addNote = (note) => {
    var notes = fetchNotes(),
        output = {};

    if(findDuplicates(note)){
        output = resultFormat(500, null, "Note Already exists");
    }
    else {
        notes.push(note);
        saveNotes(notes);
        output = resultFormat(200, notes, "Note Added successfully");
    }
    return output;
}

var getNotes = () => {
    var notes = fetchNotes(),
        output = {};
    
    output = resultFormat(200, notes, "Notes retrieved successfully");
    return output;
}

var getNote = (title) => {
    var notes = fetchNotes(),
        note = notes.filter((note) => note.title === title),
        output = {};

    if(note.length){
        output = resultFormat(200, note[0], "Note retrieved successfully");
    }
    else {
        output = resultFormat(404, null, "Note not found");
    }
    return output;
}

var removeNote = (title) => {
    var notes = fetchNotes(),
        removedNotes = [],
        indexOfNoteToBeRemoved = notes.map((note) => note.title).indexOf(title),
        output = {};

    if(indexOfNoteToBeRemoved != -1){
        removedNotes = notes.filter((note) => note.title !== title);
        saveNotes(removedNotes);
        output = resultFormat(200, removedNotes, "Note removed successfully");
    }
    else {
        output = resultFormat(500, null, "Note doesn't exists");
    }
    return output;
}

/** Module export */

module.exports = {
    addNote,
    getNotes,
    getNote,
    removeNote,
    logNote
}