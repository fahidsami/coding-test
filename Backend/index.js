const express = require('express')
const cors = require('cors')


const filmRoute = require('./filmRouter');
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
app.use(filmRoute)

app.listen(port, ()=>{
    console.log('port started:' + port)
})
