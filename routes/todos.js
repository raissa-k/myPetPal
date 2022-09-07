const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)
router.get('/edit/:todoId', todosController.getEditTodo)
router.get('/:date', todosController.getTodosByDate)

router.post('/createTodo', todosController.createTodo)
router.post('/getDate', todosController.getTodosByDate)
router.post('/previous', todosController.getPreviousDay)
router.post('/next', todosController.getNextDay)

router.put('/markComplete', todosController.markComplete)
router.put('/markIncomplete', todosController.markIncomplete)
router.put('/edit/', todosController.editTodo)

router.delete('/deleteTodo', todosController.deleteTodo)



module.exports = router