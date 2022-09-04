const Pet = require('../models/Pet')

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
        console.info(req.body.petIdFromJSFile)
        try{
            await Pet.findOneAndDelete({_id:req.body.petIdFromJSFile})
            res.json('Deleted It')
        }catch(err){
            console.error(err)
        }
    },
    editPet: async (req, res) => {
        try {
            await Pet.findOneAndUpdate(
                req.body.petIdFromJSFile,
                
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