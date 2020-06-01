const { parse, validResponse } = require('./input.js')

describe('make sure minimist', () => {
// it('creates a valid response', () => {
//     const commandLineArgs = ['node', 'index.js', '--add', 'My Note']
//     const result = validResponse(commandLineArgs);

//     expect(result).toEqual({
//         add: 'My Note'
//         })
//     });


it('creates a correct parse response', () => {
    const commandLineArgs = ['node', 'index.js', '--add', 'My Note']
    const action = parse(commandLineArgs);

    expect(action).toEqual({
       type: 'add',
       payload: 'My Note'
    })
  });
});