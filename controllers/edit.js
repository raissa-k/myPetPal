const Pet = require('../models/Pet')
const Todo = require('../models/Todo')

module.exports = {
    edit: async (req, res) => {
        res.render('edit.ejs')
    },
    getEditPet: async(req, res) => {
        const petId = req.params.petId
        try {
            const petPage = await Pet.findById(petId)

            if (!petPage){
                return res.status(404).render('edit.ejs', { warning: 'Could not find any entry with this ID'})
            }
            res.render('editpet.ejs', {
                pets: petPage, 
                user: req.user
            }) 
        }catch (err) {
            console.error(err)
        }
    },
    getEditTodo: async(req, res) => {
        const todoId = req.params.todoId
        try {
            const pets = await Pet.find({userId:req.user.id})
            const todoPage = await Todo.findById(todoId)

            if (!todoPage){
                return res.status(404).render('edit.ejs', { warning: 'Could not find any entry with this ID'})
            }
            res.render('edittodo.ejs', {
                todos: todoPage,
                todoPets: pets, 
                user: req.user
            }) 
        }catch (err) {
            console.error(err)
        }
    }
}