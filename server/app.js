const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb://localhost:27017/graphql-demo', { useNewUrlParser: true })

mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => (
  console.log('connected to database')
))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => (
  console.log('now listening for requests on port 4000')
))
