const mongoose =require('mongoose')

const queteSchema =mongoose.Schema({
    lien:{type:String, },
    lieux:{type:String, },
    action:{type:String,},
    tips:{type:String,}
})


module.exports= mongoose.model('hebdo', queteSchema);