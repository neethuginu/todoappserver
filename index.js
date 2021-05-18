const express = require('express')
const db=require('./db');
const cors=require('cors');


const app = express();

app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))

app.get('/display', (req, res) => {
    console.log("all datas");
    db.user.find({})
    .exec(function(err,users){
        if(err){
            console.log("error list")
        }
        else{
            res.json(users);
        }
    }); 

})
// app.put('/update',(req,res)=>{
//     console.log("update")
//     db.user.updateMany({}).exec(function(err,users){

//         if(err){
//             console.log("erro")
//         }
//         else{
//             res.json(users)
//         }
//     });
// })

app.listen(8000, () => {
    console.log("server started")
   
})