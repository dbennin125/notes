const mongoose = require('mongoose');
const Input = require('./Input');
const Note = require('./lib/models/Note');

mongoose.connect('mongodb://localhost:27017/notes', {
      useNewUrlParser: true,
      useUnifiedTopology :true 
});

const input = new Input(process.argv);

if(input.isValid()) {
        Note.execute(input)
        .then(() => mongoose.connection.close());
} else {
        console.log('Opps, something went wrong');
}




// const { parse, validResponse } = require('./lib/input.js')
// const { execute } = require('./lib/notes.js')
// const Input = require('./Input');
// const Note  = require('./Notes');



// let input = new Input(process.argv);
// const isValidInput = input.isValid();

// isValidInput ? Note.execute(input) : console.log('failure to add');


//I will delete all this mess later, I'm just trying to get it working.
//get process.argv
// const userInput = parse(process.argv)
// use parse to create an action from process.argv

// const validUserInput = (validResponse(userInput));
// if(validResponse(userInput)) {
//      execute(userInput)
// } else {
//     return {
        // error: console.error(userInput),
//            error: console.error(userInput, 'incorrect syntax, note not added')
//     };
// };
// console.log(userInput)
// console.error(userInput)
// use valid to check if it is a valid action
// if valid execute
// bring it all together
//it works!!!!

