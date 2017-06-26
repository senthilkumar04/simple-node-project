/** Require statements */

const yargs = require('yargs');
const notes = require('./notes.js');

/** Configuring Yargs */

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

/** Fetching the arguments using Yargs */

var command = yargs.argv._[0];
var note = {
    title : yargs.argv.title,
    body : yargs.argv.body
};

switch (command) {
    case "add": {
        console.log("Adding note");
        var result = notes.addNote(note);
        if(result.status === 200){
            notes.logNote(note);
        }
        console.log(result.message);
        break;
    }
    case "list": {
        console.log("Fetching notes");
        var result = notes.getNotes();
        result.data.forEach(function(note) {
            notes.logNote(note);
        }, this);
        if(!result.data.length){
            console.log("--------");
            console.log("No Notes to show");
        }
        break;
    }
    case "get": {
        console.log("Fetching note");
        var result = notes.getNote(note.title);
        if(result.status === 200){
            notes.logNote(result.data);
        }
        console.log(result.message);
        break;
    }
    case "remove": {
        console.log("Removing note");
        var result = notes.removeNote(note.title);
        console.log(result.message);
        break;
    }
    default: {
        console.log("Not a valid command");
        break;
    }
}
