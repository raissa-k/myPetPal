const fetch = require('node-fetch')
global.fetch = fetch
const { createApi } = require('unsplash-js')
require('dotenv').config({ path: './config/.env' })

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_CLIENT_ID
})

module.exports = {
    getIndex: async (req,res)=>{
        let data
        await unsplash.photos.getRandom({ query: 'pet', orientation: 'landscape', count: 1})
        .then(result => {
            data = result.response[0]
        })
        .catch(error => console.error(error))
        res.render('index.ejs', {datapicture: `${data.urls.raw}&fm=jpg&crop=edges&fit=crop&w=700&h=500&q=80&fit=max`, data: data})            
    }
}