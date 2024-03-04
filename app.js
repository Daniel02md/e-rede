const express = require('express')
const {userRoute, productRoute, saleRoute} = require('./routes')
const app = express()
app.use(express.json())

app.use('/', userRoute)
app.use('/', productRoute)
app.use('/', saleRoute)
app.listen(3000)
