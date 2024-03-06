const express = require('express')
const {userRoute, productRoute, saleRoute, categoryRoute} = require('./routes')
const app = express()
app.use(express.json())

app.use('/', userRoute)
app.use('/', productRoute)
app.use('/', saleRoute)
app.use('/', categoryRoute)

app.listen(3000)
