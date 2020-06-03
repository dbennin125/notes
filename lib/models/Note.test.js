const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Note');

const mongodb = new MongoMemoryServer();

describe('Note model', () => {
  beforeAll(() => {
    return mongodb.getUri()
      .then(uri => mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }));
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close()
      .then(() => mongodb.stop());
  });

 it('test to see if Note will work', () => {
    return Note.execute({type: 'add', payload: 'My Note'})
    .then(note => {
        expect(note.toJSON()).toEqual({
            _id: expect.anything(),
            text: 'My Note' ,
            __v: 0
        });
    })
 });

 it('test to see if list works properly', async() => {

    await Note.execute({
        type: 'add',
        payload: 'My Note'
    });
    await Note.execute({
        type: 'add',
        payload: 'A Note'
    });

    return Note.execute({ type: 'list', payload: true })
    
    .then(notes => {
        expect(notes.map(note => note.toJSON())).toEqual([
            {
                _id: expect.anything(),
                text:  'My Note',
                __v: 0
            },
            {
                _id: expect.anything(),
                text:  'A Note',
                __v: 0
            }
        ]);
    
    })
 
    });
    it('test to see if delete works properly', async() => {

        const addNote = {
            type: 'add',
            payload: 'My note'
        }
       
        const note = await Note.execute(addNote)
    
        const deleteNote = {
            type: 'delete',
            payload: note._id
        }
        
        return Note.execute(deleteNote)
        
        .then(note => {
            expect(note.toJSON()).toEqual(
                {
                    _id: deleteNote.payload,
                    text: expect.any(String),
                    __v: 0
                }
            );
        
        });
     
    });

});