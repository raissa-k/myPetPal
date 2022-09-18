const fetch = require('node-fetch')

module.exports = {
    getIndex: async (req,res)=>{
        let picture
        await fetch(`https://api.unsplash.com/photos/random/?query=pet&client_id=${process.env.UNSPLASH_CLIENT_ID}`)
        .then(response => response.json())
        .then(data => picture = data.urls.raw)
        .catch(err => console.error(err))
        res.render('index.ejs', {pictureUrl: picture+'&crop=edges&w=700&h=500&fit=crop'})            
    }
}