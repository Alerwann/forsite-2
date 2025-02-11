const express = require( 'express')
const router = express.Router()


const questes = require('../controller/quest')



router.get('/quetes',questes.findAllquetes)
router.get('/linkytb',questes.findAlllink)

module.exports =router