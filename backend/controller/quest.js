const quetes =require("../models/quetes") 
const linkytb =require("../models/linkytb")

exports.findAllquetes =(req,res,next)=>{
    quetes.find().then(
        (quetes)=>{
            res.status(200).json(quetes);}
        )
        .catch((error)=>{
            res.status(400).json({error:error})
    }   )
}


exports.findAlllink =(req,res,next)=>{
    linkytb.find().then(
        (linkytb)=>{
            res.status(200).json(linkytb);}
        )
        .catch((error)=>{
            res.status(400).json({error:error})
    }   )
}