const router = require('express').Router()
const {indexController} = require('../controllers/index')

router.route('/')
.get(indexController)


module.exports = router;