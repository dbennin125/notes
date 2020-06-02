const { add, } = require('./notes')

describe('make sure notes.js functions work', () => {
    
    it('the note will add a string', () => {
       const action = {
           type: 'add',
           payload: 'string'
       };
       const userNote = add(action);
       expect(userNote).toEqual({
           id: 1,
           text: 'string'
       })
    })
});