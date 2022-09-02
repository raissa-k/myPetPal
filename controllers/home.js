module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    dashboard: (req, res) => {
        res.render('dashboard.ejs')
    }
}