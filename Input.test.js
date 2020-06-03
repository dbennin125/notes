const Inputs = require('./Input');

describe('Input class', () => {
 
    it('parse function works on Input', () =>{
    const inputs = new Inputs(['node', 'index.js', '--add', 'My Note'])
    expect(inputs.type).toEqual('add')
    expect(inputs.payload).toEqual('My Note')
    });

    it('isValid works', () => {
        const inputs = new Inputs(['node', 'index.js', '--add', 'My Note'])
        const result = inputs.isValid();
        expect(result).toBeTruthy();
    });
    it('isValid will not add a bad value', () => {
        const inputs = new Inputs(['node', 'index.js', '--amd', 'My Note'])
        const badResult = inputs.isValid();
        expect(badResult).toBeFalsy();
    });
})

