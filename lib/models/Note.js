const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: true
    }
});

noteSchema.statics.execute = function(actionObject) {
    switch(actionObject.type) {
        case 'add' : {
            return this.create({
                text: actionObject.payload
            });
        }   case 'list' : {
                return this.find();
        }   case 'delete' : {
                return this.findByIdAndDelete({ _id: actionObject.payload });
        }   default: 
            console.error('You need to choose a proper command');
    };
};

module.exports = mongoose.model('Note', noteSchema);