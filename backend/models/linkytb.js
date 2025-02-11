const mongoose =require('mongoose')

const linkytbSchema =mongoose.Schema({
   width:{type:Number, },
    height:{type:Number },
    src:{type:String,},
    allow:{type:String,},
})
module.exports= mongoose.model('link', linkytbSchema);