const Pet = require('../models/Pet')
const Todo = require('../models/Todo')

module.exports = {
    edit: async (req, res) => {
        res.render('edit.ejs')
    }
}