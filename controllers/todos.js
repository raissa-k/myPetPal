const Todo = require('../models/Todo')
const Pet = require('../models/Pet')

module.exports = {
    getTodos: async (req,res)=>{
        try {
            const todoItems = await Todo.find({userId:req.user.id})
            const pets = await Pet.find({userId:req.user.id})
            const petCount = await Pet.countDocuments({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})  
            const date = await Todo.find({userId:req.user.id}).sort({date:-1})
            res.render('todos.ejs', {
                todos: todoItems, 
                pets: pets, 
                petCount: petCount, 
                left: itemsLeft,
                date: date,
                user: req.user
            })
            
        }catch (err) {
            console.error(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, petName: req.body.petName, completed: false, userId: req.user.id})
            res.redirect('/todos')
        }catch(err){
            console.error(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            res.json('Marked Complete')
        }catch(err){
            console.error(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            res.json('Marked Incomplete')
        }catch(err){
            console.error(err)
        }
    },
    deleteTodo: async (req, res)=>{
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            res.json('Deleted It')
        }catch(err){
            console.error(err)
        }
    },
    // getPreviousDay: async (req, res) => {
    //     const date = new Date()
    //     const previous = new Date(date.getTime())
    //     previous.setDate(date.getDate() - 1)

    //     return previous
    // },
    // getNextDay: async (req, res) => {
    //     const date = new Date()
    //     const next = new Date(date.getTime())
    //     previous.setDate(date.getDate() + 1)

    //     return next

    // }
}    