const express = require('express')
const router = express.Router()
const petsController = require('../controllers/pets') 

router.post('/createPet', petsController.createPet)
router.delete('/deletePet', petsController.deletePet)
router.patch('/editPet', petsController.editPet)

module.exports = router