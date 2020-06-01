const minimist = require("minimist");




//parse functions
const parse = (arr) => {
    const obj = minimist(arr)
    delete obj._;
    
    const [[type, payload]] = Object.entries(obj);
    console.log(type, payload)
    return {
        type, 
        payload
    };
};
//valid functions
// const validResponse = (arg) => {
//     if(arg[0] === "--add" || arg[0] === '--a' ) {
//         return true;
//     }
//     return false
// };


module.exports = {
    parse,
   
}