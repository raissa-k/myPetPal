const Todo = require('../models/Todo')
const Pet = require('../models/Pet')
const startOfDay = require('date-fns/startOfDay')
const endOfDay = require('date-fns/endOfDay')
const subDays = require('date-fns/subDays')
const addDays = require('date-fns/addDays')


module.exports = {
    /*//////////////////////// 
    BASIC CRUD FIRST
    ////////////////////////*/
    getTodoPage: async (req, res) => {
        const localeDate = new Date().toLocaleDateString()
        const lookUpDate = {
            $gte: startOfDay(new Date(localeDate)),
            $lte: endOfDay(new Date(localeDate))
        }
        try {
            const todoItems = await Todo.find({
                date: lookUpDate,
                userId: req.user.id
            }).lean()
            const pets = await Pet.find({ userId: req.user.id }).lean()
            const itemsLeft = await Todo.countDocuments({
                userId: req.user.id,
                completed: false,
                date: lookUpDate
            }).lean()
            res.render('todos.ejs', {
                todos: todoItems,
                pets: pets,
                left: itemsLeft,
                user: req.user,
                calendar: new Date(localeDate),
                localeDate: localeDate
            })
            console.log(localeDate, new Date(localeDate))
        } catch (err) {
            console.error(err)
        }
    },
    createTodo: async (req, res) => {
        let creationDate = req.body.date.replace(/-/g, '/')

        const getDate = new Date(creationDate).toISOString().slice(0,10)
        try {
            await Todo.create({
                todo: req.body.todoItem,
                petName: req.body.petName,
                completed: false,
                date: creationDate,
                userId: req.user.id
            })
            res.redirect(`/todos/${getDate}`)
        } catch (err) {
            console.error(err)
        }
    },
    editTodo: async (req, res) => {
        const todoId = req.body.todoId
        const todo = req.body.todoItem
        const petName = req.body.petName
        const date = req.body.date.replace(/-/g, '/')

        let todoToEdit
        try {
            todoToEdit = await Todo.findById(todoId)
        } catch (err) {
            console.error(err)
        }

        todoToEdit.todo = todo
        todoToEdit.petName = petName
        todoToEdit.date = date

        try {
            await todoToEdit.save()
        } catch (error) {
            console.error(error)
        }
        res.json('Edited task')
    },
    deleteTodo: async (req, res) => {
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoId })
            res.json('Deleted It')
        } catch (err) {
            console.error(err)
        }
    },
   
    /*//////////////////////// 
    MARKING COMPLETE/INCOMPLETE
    ////////////////////////*/
    markComplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({ _id: req.body.todoId }, {
                completed: true
            })
            res.json('Marked Complete')
            console.log('Marked Complete')
        } catch (err) {
            console.error(err)
        }
    },
    markIncomplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({ _id: req.body.todoId }, {
                completed: false
            })
            res.json('Marked Incomplete')
            console.log('Marked Incomplete')
        } catch (err) {
            console.error(err)
        }
    },
    /*//////////////////////// 
    DATES
    ////////////////////////*/
    getTodosByDate: async (req, res) => {
        if (!req.body.date){
            req.body.date = req.params.date
        }
        const date = new Date(req.body.date.replace(/-/g, '/'))
        const lookUpDate = {
            $gte: startOfDay(date),
            $lte: endOfDay(date)
        }
        try {
            const todoItems = await Todo.find({
                date: lookUpDate,
                userId: req.user.id
            }).lean()
            const pets = await Pet.find({ userId: req.user.id }).lean()
            const itemsLeft = await Todo.countDocuments({
                userId: req.user.id,
                completed: false,
                date: lookUpDate
            }).lean()
            res.render('todos.ejs', {
                todos: todoItems,
                pets: pets,
                left: itemsLeft,
                user: req.user,
                calendar: date
            })
            console.log(date)
        } catch (err) {
            console.error(err)
        }
    },
    formTodosByDate: async (req, res) => {
        let creationDate = req.body.date.replace(/-/g, '/')
        const getDate = new Date(creationDate).toISOString().slice(0,10)
        try {
            res.redirect(`/todos/${getDate}`)
        } catch (err) {
            console.error(err)
        }
    },
    getPreviousDay: async (req, res) => {
        const date = new Date(req.body.date.replace(/-/g, '/'))
        const previous = subDays(date, 1).toISOString().slice(0,10)
        try {
            res.redirect(`/todos/${previous}`)
        } catch (err) {
            console.error(err)
        }
    },
    getNextDay: async (req, res) => {
        const date = new Date(req.body.date.replace(/-/g, '/'))
        const next = addDays(date, 1).toISOString().slice(0,10)
        try {
            res.redirect(`/todos/${next}`)
        } catch (err) {
            console.error(err)
        }
    }
}