const Pet = require('../models/Pet')
const Todo = require('../models/Todo')

module.exports = {
    createPet: async (req, res)=>{
        try{
            await Pet.create({
                petName: req.body.petName,
                petAge: req.body.petAge,
                petBirthday: req.body.petBirthday,
                petBreed: req.body.petBreed, 
                userId: req.user.id
            })
            res.redirect('/dashboard')
        }catch(err){
            console.error(err)
        }
    },
    deletePet: async (req, res)=>{
        try{
            const petId = req.body.petId
            const petToDelete = await Pet.findById(petId)
            const petName = petToDelete.petName
            await Todo.deleteMany({petName:petName})
            await petToDelete.deleteOne()
            await Pet.findOneAndDelete({_id:petId})
            res.json('Deleted It')
        }catch(err){
            console.error(err)
        }
    },
    editPet: async (req, res) => {
        const { petId, petName, petBreed, petBirthday, petAge } = req.body

        let petToEdit
        try {
            petToEdit = await Pet.findById(petId)
        } catch (err) {
            console.error(err)
        }

        petToEdit.petName = petName
        petToEdit.petBreed = petBreed
        petToEdit.petBirthday = petBirthday
        petToEdit.petAge = petAge

        try {
            await petToEdit.save()
        } catch (error) {
            console.error(error)
        }
        res.json('Edited pet')
    }
}    