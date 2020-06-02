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
    return {
        type, 
        payload
    };
};
//valid functions
const validResponse = action => {
    return action.type === 'add' || action.type === 'a' && action.payload;
};


module.exports = {
    parse,
    validResponse
   
}