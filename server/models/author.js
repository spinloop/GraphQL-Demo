const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  age: { type: Number }
})

module.exports = mongoose.model('Author', authorSchema)
