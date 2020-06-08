const { parse, validResponse } = require('./input.js')

describe('make sure minimist', () => {

it('creates a correct parse response', () => {
    const commandLineArgs = ['node', 'index.js', '--add', 'My Note']
    const action = parse(commandLineArgs);

    expect(action).toEqual({
       type: 'add',
       payload: 'My Note'
    });
  });

  it('can validate command line arguments with add', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
      const isValid = validResponse(action)
    
      expect(isValid).toBeTruthy();
    });
    it('can validate command line arguments with a', () => {
        const action = {
            type: 'a',
            payload: 'my note'
        };
      const isValid = validResponse(action)
    
      expect(isValid).toBeTruthy();
    });
    it('should fail because of bad type', () => {
        const action = {
            type: 'badType',
            payload: 'my note'
        };
      const isValid = validResponse(action)
    
      expect(isValid).toBeFalsy();
    });
});
