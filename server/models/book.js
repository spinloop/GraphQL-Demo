const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  genre: { type: String, required: true, maxlength: 50 },
  authorId: { type: Number }
})

module.exports = mongoose.model('Book', bookSchema)
