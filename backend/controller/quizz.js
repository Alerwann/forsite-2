const question=require("../models/quizz")


exports.findAllquestions =(req,res,next)=>{
    question.find().then(
        (question)=>{
            res.status(200).json(question);}
        )
        .catch((error)=>{
            res.status(400).json({error:error})
    }   )
}