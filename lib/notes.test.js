const { add, execute } = require('./notes')

describe('make sure notes.js functions work', () => {
    
    it('the note will "add" a string', () => {
       const action = {
           type: 'add',
           payload: 'string'
       };
       
       const userNote = add(action);
        expect(userNote).toEqual({
           id: 1,
           text: 'string'
       });

    });

    it('execute function will return a correct response', () => {
        const action = {
            type: 'add',
            payload: 'string'
        };
        const otherAction = {
            type: 'nope',
            payload: 'incorrect'
        };

        const correctResponse = execute(action);
        const badResponse = execute(otherAction);


        expect(correctResponse).toEqual({
            id: 1,
            text: 'string'
        });
        
        expect(badResponse).toEqual({
            error: 'something went wrong, please use another action'
        });
    
    }); 

});