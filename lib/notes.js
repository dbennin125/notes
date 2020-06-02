//need add function

//write an add function that will create an object representing a 
//note (with an ID and the note text as properties) and console.log 
//the text of the note to be added when the add command is executed

const add = action =>{
    const userNote = {
        id: 1, 
        text: action.payload
    };
    return userNote;
};


//need execute function

const execute = action => {
    //series of ifs,
    //switch, (I want to use this one when more actions are there)
    //dictionary(no idea how to do this)
    if(action.type === 'add') {
        return add(action);
    } else {
        return {
            error: 'something went wrong, please use another action'
        };
    };

};

module.exports = {
    add,
    execute
};