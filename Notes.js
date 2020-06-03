class Notes {
    
    // constructor(id, text) {
    //     this.id = id,
    //     this.id = text
    // };
        
    static add(noteObject) {
            let note = {
                id: Date.now(),
                text: noteObject.payload
                
            };
            console.log(`Added Note: ${noteObject.payload}`);
            return note;
        }
    static execute(noteObject) {
        switch(noteObject.type) {
            case 'add':
                return Notes.add(noteObject);
            default:
                console.log('Please use appropiate syntax')
        }
    }

}



module.exports = Notes