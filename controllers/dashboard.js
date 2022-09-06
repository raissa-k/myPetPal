const Pet = require('../models/Pet')

module.exports = {
    dashboard: async (req, res) => {
        try {
            const pets = await Pet.find({userId:req.user.id})
            const petCount = await Pet.countDocuments({userId:req.user.id})
            res.render('dashboard.ejs', {
                pets: pets, 
                petCount: petCount, 
                user: req.user
            })
        } catch (err) {
            console.error(err)
        }
    },
}