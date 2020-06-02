//need add function

//write an add function that will create an object representing a 
//note (with an ID and the note text as properties) and console.log 
//the text of the note to be added when the add command is executed

const add = action =>{
    const userNote = {
        //since this is the first one, it'll be 1 for the id:
        id: Date.now(), 
        // text is coming from the action.payload which comes from the parse
        // text: 'Adding note:',
        text: action.payload
        
    };
    console.log(`Note Added: ${userNote.text}`)
    
    return userNote;
};


//need execute function

const execute = action => {
    //series of ifs, since it's a simple if else, I'll do this first and refactor later.
    //switch, (I want to use this one when more actions are there)
    //dictionary(no idea how to do this)
    if(action.type === 'add' || action.type === 'a') {
        //if the action.type is equal to add it will begin the function
        return add(action);
    } else {
        //if it's not on the list, display an error message.
        return {
            error: 'something went wrong, please use another action'
        };
    };

};

module.exports = {
    add,
    execute
};