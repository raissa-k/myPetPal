const Todo = require('../models/Todo')
const Pet = require('../models/Pet')
const startOfDay = require('date-fns/startOfDay')
const endOfDay = require('date-fns/endOfDay')

module.exports = {
    dashboard: async (req, res) => {
        try {
            const newDate = new Date()
            const lookUpDate = {
                $gte: startOfDay(new Date()),
                $lte: endOfDay(new Date())
            }
            const todos = await Todo.find({userId:req.user.id}).lean()
			const itemsLeft = await Todo.countDocuments({
                userId: req.user.id,
                completed: false,
                date: lookUpDate
            }).lean()
            
            const pets = await Pet.find({userId:req.user.id}).lean()
            const petCount = await Pet.countDocuments({userId:req.user.id}).lean()
            
            res.render('dashboard.ejs', {
                pets: pets, 
                petCount: petCount, 
                todos: todos,
				left: itemsLeft,
                calendar: newDate,
                user: req.user
            })
        } catch (err) {
            console.error(err)
        }
    },
}