const express = require("express")
const router = express.Router()

router.post('/register', (req, res) => {
    res.end("Register Successful")
})

module.exports = router;