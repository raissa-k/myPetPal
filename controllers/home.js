const fetch = require('cross-fetch')
const NodeCache = require('node-cache')
const cache = new NodeCache({ stdTTL: 3600 });

module.exports = {
    getIndex: async (req,res)=>{
        if (cache.has('indexPicture')){
            res.render('index.ejs', {pictureUrl: `${cache.get('indexPicture')+'&crop=edges&w=700&h=500&fit=crop'}`})
        } else {
            try {
                let response = await fetch(`https://api.unsplash.com/photos/random/?query=pet&client_id=${process.env.UNSPLASH_CLIENT_ID}`)
                const data = await response.json()
                let picture = data.urls.raw
                cache.set('indexPicture', picture)
                res.render('index.ejs', {pictureUrl: `${cache.get('indexPicture')+'&crop=edges&w=700&h=500&fit=crop'}`})                
            } catch (error) {
                console.error(error)
            }
        }
    }
}