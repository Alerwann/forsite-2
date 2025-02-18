const express = require( 'express')
const router = express.Router()


const questes = require('../controller/quest')
const questions=require('../controller/quizz')



router.get('/quetes',questes.findAllquetes)
router.get('/quizz',questions.findAllquestions)


module.exports =router