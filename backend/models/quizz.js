const mongoose =require('mongoose')

const questionSchema =mongoose.Schema({
    id:{type:String, },
    text:{type:String, },
    rep1:{type:String,},
    rep2:{type:String,},
    rep3:{type:String,},
    correctAnswer:{type:Number},
    verifGood:{type:Boolean},
    verifWrong:{type:Boolean},
})


module.exports= mongoose.model('question', questionSchema);