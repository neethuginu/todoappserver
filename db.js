const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/todo_server",{useNewUrlParser:true},{ useUnifiedTopology: true })


const user=mongoose.model("User",{
    orderfiled:Number,
    title:String,
    description:String
})

module.exports={
    user
}