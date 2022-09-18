const fetch = require('cross-fetch')

module.exports = {
    getIndex: async (req,res)=>{
        const response = await fetch(`https://api.unsplash.com/photos/random/?query=pet&client_id=${process.env.UNSPLASH_CLIENT_ID}`)
        const data = await response.json()
        let picture = data.urls.raw
        res.render('index.ejs', {pictureUrl: `${picture+'&crop=edges&w=700&h=500&fit=crop'}`})
        }
    }