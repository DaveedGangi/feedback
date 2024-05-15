const mongoose=require("mongoose")

mongoose.connect("http://localhost:27017/feedbacks")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("failed")
})


const newSchema=new mongoose.Schema({

    details:{
        type:String,
        required:true
    }

})

const collection=mongoose.model("collection",newSchema)

module.exports =collection