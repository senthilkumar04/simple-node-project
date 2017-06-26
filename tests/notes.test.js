const notes = require('../notes');
const expect = require('expect');

describe('Notes', () => {
    describe('#add-note', () => {
        it('should check for note addition', () => {
            var note = {
                title : 'Note 1',
                body : 'Note 1 body'
            };
            var result = notes.addNote(note);
            expect(result.status).toBeA('number').toBe(200);
            expect(result.data).toNotBe(null).toInclude(note);
        });
        it('should check for duplicate note', () => {
            var note = {
                title : 'Note 1',
                body : 'Note 1 body'
            };
            var result = notes.addNote(note);
            expect(result.status).toBeA('number').toBe(500);
            expect(result.data).toBe(null);
        });
    })
    describe('#list-notes', () => {
        it('should check notes returned is array', () => {
            var result = notes.getNotes();
            expect(result.status).toBeA('number').toBe(200);
            expect(result.data).toBeA('array');
        });
    })
    describe('#get-note', () => {
        it('should check note exists', () => {
            var noteTitle = "Note 1";
            var result = notes.getNote(noteTitle);
            expect(result.status).toBeA('number').toBe(200);
            expect(result.data).toInclude({title: noteTitle})
        });
        it('should check note not exists', () => {
            var noteTitle = "Not1";
            var result = notes.getNote(noteTitle);
            expect(result.status).toBeA('number').toBe(404);
            expect(result.data).toBe(null);
        });
    })
    describe('#remove-note', () => {
        it('should check note not exists', () => {
            var noteTitle = "Note1";
            var result = notes.removeNote(noteTitle);
            expect(result.status).toBeA('number').toBe(500);
            expect(result.data).toBe(null);
        });
        it('should remove a note', () => {
            var noteTitle = "Note 1";
            var result = notes.removeNote(noteTitle);
            expect(result.data).toExclude({title: noteTitle});
        })
    })
});