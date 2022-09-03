const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/', editController.edit)

router.get('/pet/:petId', editController.getEditPet)


module.exports = router