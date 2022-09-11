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
    getTodos: async (req, res) => {
        const lookUpDate = {
            $gte: startOfDay(new Date()),
            $lte: endOfDay(new Date())
        }
        const calendar = new Date()
        try {
            const todoItems = await Todo.find({
                date: lookUpDate,
                userId: req.user.id
            })
            const pets = await Pet.find({ userId: req.user.id })
            const itemsLeft = await Todo.countDocuments({
                userId: req.user.id,
                completed: false,
                date: lookUpDate
            })
            res.render('todos.ejs', {
                todos: todoItems,
                pets: pets,
                left: itemsLeft,
                user: req.user,
                calendar: calendar
            })
        } catch (err) {
            console.error(err)
        }
    },
    createTodo: async (req, res) => {
        const creationDate = req.body.date.replace(/-/g, '/')
        if (!creationDate) {
            creationDate = new Date()
        }
        const getDate = new Date(req.body.date).toISOString().slice(0,10)
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
        const date = req.body.date.replace(/-/g, '/')
        try {
            await Todo.findOneAndUpdate(
                todoId,
                {
                    todo: req.body.todoItem,
                    petName: req.body.petName,
                    completed: false,
                    date: date,
                    userId: req.user.id
                }
            )
            res.json('Edited task')
        } catch (err) {
            console.error(err)
        }
    },
    deleteTodo: async (req, res) => {
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
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
            await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
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
            await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
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
            })
            const pets = await Pet.find({ userId: req.user.id })
            const itemsLeft = await Todo.countDocuments({
                userId: req.user.id,
                completed: false,
                date: lookUpDate
            })
            res.render('todos.ejs', {
                todos: todoItems,
                pets: pets,
                left: itemsLeft,
                user: req.user,
                calendar: date
            })
        } catch (err) {
            console.error(err)
        }
    },
    getPreviousDay: async (req, res) => {
        const date = new Date(req.body.date.replace(/-/g, '/'))
        const previous = subDays(date, 1)
        const lookUpDate = {
            $gte: startOfDay(previous),
            $lte: endOfDay(previous)
        }
        const calendar = previous
        try {
            const todoItems = await Todo.find({
                date: lookUpDate,
                userId: req.user.id
            })
            const pets = await Pet.find({ userId: req.user.id })
            const itemsLeft = await Todo.countDocuments({
                userId: req.user.id,
                completed: false,
                date: lookUpDate
            })
            res.render('todos.ejs', {
                todos: todoItems,
                pets: pets,
                left: itemsLeft,
                user: req.user,
                calendar: calendar
            })
        } catch (err) {
            console.error(err)
        }
    },
    getNextDay: async (req, res) => {
        const date = new Date(req.body.date.replace(/-/g, '/'))
        const next = addDays(date, 1)
        const lookUpDate = {
            $gte: startOfDay(next),
            $lte: endOfDay(next)
        }
        const calendar = next
        try {
            const todoItems = await Todo.find({
                date: lookUpDate,
                userId: req.user.id
            })
            const pets = await Pet.find({ userId: req.user.id })
            const itemsLeft = await Todo.countDocuments({
                userId: req.user.id,
                completed: false,
                date: lookUpDate
            })
            res.render('todos.ejs', {
                todos: todoItems,
                pets: pets,
                left: itemsLeft,
                user: req.user,
                calendar: calendar
            })
        } catch (err) {
            console.error(err)
        }
    }
}