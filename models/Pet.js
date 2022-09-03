const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  petAge: {
    type: Number
  },
  petBreed: {
    type: String
  },
  petBirthday: {
    type: String
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pet', PetSchema)