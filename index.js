const mongoose = require('mongoose');
const Input = require('./Input');
const Note = require('./lib/models/Note');

mongoose.connect('mongodb://localhost:27017/notes', {
      useNewUrlParser: true,
      useUnifiedTopology :true 
});

const input = new Input(process.argv);

if(input.isValid()) {
        Note
        .execute(input)
        .then(() => mongoose.connection.close());
} else {
        console.log('Opps, something went wrong');
}
// it works!! DB is updated! Success!

