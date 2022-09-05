const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport') // handles authentication for us
const session = require('express-session') // has to deal with saving something about our session
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash') // lets us render messages without refreshing page
const logger = require('morgan') // logs requests to the console
const connectDB = require('./config/database')
const methodOverride = require('method-override')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const petRoutes = require('./routes/pets')
const dashboardRoutes = require('./routes/dashboard')
const calendarRoutes = require('./routes/calendar')
const editRoutes = require('./routes/edit')


require('dotenv').config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
app.use('/pets', petRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/calendar', calendarRoutes)
app.use('/edit', editRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!')
})