
export class Question  {
    constructor(
           public id:String, 
           public text:String, 
           public rep1:String,
           public rep2:String,
           public rep3:String,
           public correctAnswer:Number,
           public verifGood:Boolean,
           public verifWrong:Boolean){}

}

