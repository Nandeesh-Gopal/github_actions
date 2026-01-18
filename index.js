const express =require("express")
const app=express();
app.get("/",(req,res)=>{
    console.log("super da machi")
})
app.listen(3000,()=>{
    console.log("App is running on 3000 nothing da")
})