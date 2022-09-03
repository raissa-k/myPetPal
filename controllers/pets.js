const Pet = require('../models/Pet')

module.exports = {
    createPet: async (req, res)=>{
        try{
            await Pet.create({petName: req.body.petName, userId: req.user.id})
            res.redirect('/todos')
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
    }
}    