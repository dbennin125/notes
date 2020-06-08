const minimist = require("minimist");

//parse functions
const parse = (arr) => {
    //use minimist to create an object from array
    const obj = minimist(arr)
    //you are deleting the parts of the object you don't need
    delete obj._;
    //destrucurting down to just the type and payload that you want from the object
    const [[type, payload]] = Object.entries(obj);
    // console.log(type, payload)
if (type === 'a') {
    type === 'add';
} return notes = {
        type, 
        payload
    };
};


class Inputs {
    constructor(arr) {
        const { type, payload } = parse(arr);
        this.type = type;
        this.payload = payload;
    }
     isValid() {
        return this.type === 'add' && this.payload;
    }
} 

module.exports = Inputs
