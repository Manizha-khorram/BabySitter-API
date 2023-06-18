const express = require ('express')
const router = express.Router()

const {totalPay} = require('../controllers/babySitter.js')

router.route('/BabySitter').post(totalPay)

module.exports = router