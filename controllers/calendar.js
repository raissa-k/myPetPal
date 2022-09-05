const Todo = require('../models/Todo')

module.exports = {
    getCalendar: async (req, res) => {
        try {
            const dates = await Todo.find({userId:req.user.id})
            const newDate = new Date()
			const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('calendar.ejs', {
                dates: dates,
				left: itemsLeft,
                user: req.user,
                calendar: newDate
            })
            
        } catch (err) {
            console.error(err)
        }
    }
}