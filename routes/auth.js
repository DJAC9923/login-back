const router = require('express').Router()


router.post('/regiister', async(req, res) => {
    res.json({
        error: null,
        data: ''
    })
})
module.exports = router