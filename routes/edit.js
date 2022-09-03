const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/', editController.edit)

module.exports = router