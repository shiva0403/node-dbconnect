//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log('Connected to MongoDB server');

  //Query everything
  // db.collection('Todos').find().toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to feth todos',err)
  // });

  //Query by value

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a4ae0b345bad23004d26a36")
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to feth todos',err)
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos Count: ${count}`);
  // }, (err) => {
  //   console.log('unable to feth todos',err)
  // });

  db.collection('Users').find({
    name: 'shiva'
  }).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to feth todos',err)
  });
  //sdb.close();
});
