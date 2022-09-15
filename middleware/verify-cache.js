const NodeCache = require('node-cache')
const cache = new NodeCache({ stdTTL: 15 });

module.exports = { 
	verifyCache: function (req, res, next) {
      try {
		const id = cache.get()
		if (cache.has(id)){
			return res.status(200).json(cache.get(id))
		}
		return next
	  } catch (error) {
		console.error(error)
	  }
    }
  }
  