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
    getEditPet: async(req, res) => {
        const petId = req.params.petId
        try {
            const petPage = await Pet.findById(petId)

            if (!petPage){
                return res.status(404).render('editpet.ejs', {
                    pets: {}, 
                    user: req.user
                })
            }
            res.render('editpet.ejs', {
                pets: petPage, 
                user: req.user
            }) 
        }catch (err) {
            console.error(err)
        }
    },
    deletePet: async (req, res)=>{
        try{
            const petId = req.body.petIdFromJSFile
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
        const petId = req.body.petId
        try {
            await Pet.findOneAndReplace(
                {_id:petId},
                {
                    petName: req.body.petName,
                    petAge: req.body.petAge,
                    petBirthday: req.body.petBirthday,
                    petBreed: req.body.petBreed,
                    userId: req.user.id
                }
            )
            res.redirect('/dashboard')
        } catch (err) {
            console.error(err)
        }
    }
}    