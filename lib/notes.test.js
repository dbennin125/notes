const { add, execute } = require('./notes')

describe('make sure notes.js functions work', () => {
    
    it('the note will "add" a string', () => {
       const action = {
           type: 'add',
           payload: 'string'
       };
       
       const userNote = add(action);
        expect(userNote).toEqual({
           id: expect.any(Number),  
           text: 'string',
        });

    });

    it('noted added with note text', () => {
        console.log = jest.fn();
        
        const action = {
            type: 'add',
            payload: 'string'
        }
        const note = add(action);

        expect(console.log).toHaveBeenCalledTimes(1)
        expect(console.log).toHaveBeenCalledWith(`Note Added: ${note.text}`)
 
     });



    it('execute function will return a correct response', () => {
        const action = {
            type: 'add',
            payload: 'string'
        };
        const otherAction = {
            type: '',
            payload: 'incorrect'
        };

        const correctResponse = execute(action);
        const badResponse = execute(otherAction);


        expect(correctResponse).toEqual({
            id: expect.any(Number),
            text: 'string'
        });
        
        expect(badResponse).toEqual({
            error: 'something went wrong, please use another action'
        });
    
    }); 

});