if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express()
const cors = require('cors')
const route = require('./routers')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', route)
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
});