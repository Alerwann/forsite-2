const mongoose =require('mongoose')

const queteSchema =mongoose.Schema({
    linkytb:{type:String, },
    type:{type:String, },
    lieux:{type:String,},
    description:{type:String,},
    tips:{type:String,}
})


module.exports= mongoose.model('hebdo', queteSchema);