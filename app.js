const yargs = require('yargs');

const notes = require('./notes.js');

var arguments = yargs.command('add', 'Add a note', {
    title: {
        describe: 'Title of the note',
        demand: true,
        alias: 't'
    },
    body: {
        describe: 'Body of the note',
        alias: 'b'
    }
})
    .command('list', 'List all note')
    .command('get', 'Get a note', {
        title: {
            describe: 'Title of the note which you want to retrieve',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove a note', {
        title: {
            describe: 'Title of the note which you want to delete',
            demand: true,
            alias: 't'
        }
    })
    .help();

var command = yargs.argv._[0];
var note = {
    title : yargs.argv.title,
    body : yargs.argv.body
};

switch (command) {
    case "add": {
        console.log("Adding note");
        notes.logNote(note);
        console.log(notes.addNote(note));
        break;
    }
    case "list": {
        console.log("Fetching notes");
        notes.getNotes().forEach(function(note) {
            notes.logNote(note);
        }, this);
        break;
    }
    case "get": {
        console.log("Fetching note");
        var fetchedNote = notes.getNote(note.title);
        if(fetchedNote){
            notes.logNote(fetchedNote);
        }
        else {
            console.log('--------');
            console.log("Note not found");
        }
        break;
    }
    case "remove": {
        console.log("Removing note");
        notes.removeNote(note.title);
        break;
    }
    default: {
        console.log("Not a valid command");
        break;
    }
}
