const Notes = require('./Notes')

describe('Note class', () => {
    it('get execute to run', () => {
        const userNote = {
            type: 'add',
            payload: 'string'
        };
        const result = Notes.execute(userNote);

        expect(result).toEqual({
            id: expect.any(Number),
            text: 'string'
        });
    }); 
});


