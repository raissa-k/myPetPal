const express = require('express')
const router = express.Router()
const calendarController = require('../controllers/calendar')

router.get('/', calendarController.getCalendar)

module.exports = router