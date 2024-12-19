const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const connectToDb = require('./db/db');
connectToDb();

const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send('hello world it is uber clone  ')

})

app.use('/users', userRoutes)

module.exports = app;