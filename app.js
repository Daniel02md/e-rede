const express = require('express')
const {userRoute, productRoute} = require('./routes')
const app = express()
app.use(express.json())

app.use('/', userRoute)
app.use('/', productRoute)
app.listen(3000)
