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


});