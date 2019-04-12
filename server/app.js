const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/graphql-demo', { useNewUrlParser: true })

mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => (
  console.log('connected to database')
))

var authorSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  age: { type: Number }
});

var bookSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  genre: { type: String, required: true, maxlength: 50 },
  authorId: { type: Number }
})

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => (
  console.log('now listening for requests on port 4000')
))
