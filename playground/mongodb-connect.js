//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//object destructuring
// var user = {name:'shiva', age:31};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text:'SOmething to do',
  //   completed:false
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todos',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name:'shiva',
  //   age:31,
  //   location:'Baltimore'
  // }, (err, result) => {
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // });
  db.close();
});
