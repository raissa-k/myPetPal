const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/', editController.edit)

router.get('/pet/:petId', editController.getEditPet)
router.get('/todo/:todoId', editController.getEditTodo)


module.exports = router