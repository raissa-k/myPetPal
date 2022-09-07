const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true
  },
  petAge: {
    type: String,
    required: true
  },
  petBreed: {
    type: String,
    required: true
  },
  petBirthday: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pet', PetSchema)