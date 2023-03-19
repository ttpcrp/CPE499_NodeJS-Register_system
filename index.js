const express = require("express")
const app = express()
const router = require('./routes/router')

app.set("view engine", "ejs")

app.use('/route', router)

app.get('/', (req, res) => {
    res.render('base', {title : "Register System"})
})

app.listen(3000)