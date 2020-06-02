
const { parse, validResponse } = require('./lib/input.js')
const { execute } = require('./lib/notes.js')


//get process.argvn
const userInput = parse(process.argv)
// use parse to create an action from process.argv

// const validUserInput = (validResponse(userInput));
if(validResponse(userInput)) {
     execute(userInput)
} else {
    return {
        // error: console.error(userInput),
           error: console.error(userInput, 'incorrect syntax, note not added')
    };
};
console.log(userInput)
// console.error(userInput)
// use valid to check if it is a valid action
// if valid execute
// bring it all together
//it works!!!!