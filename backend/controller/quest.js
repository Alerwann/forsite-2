const quetes =require("../models/quetes") 


exports.findAllquetes =(req,res,next)=>{
    quetes.find().then(
        (quetes)=>{
            res.status(200).json(quetes);}
        )
        .catch((error)=>{
            res.status(400).json({error:error})
    }   )
}
