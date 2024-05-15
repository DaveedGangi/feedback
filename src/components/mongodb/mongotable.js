const express =require("express")

const collection=require("./mongoDB")

const cors=require("cors")

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors())

app.get("/",cors(),(req,response)=>{

})

app.post("/",async(req,response)=>{
    const {details}=req.body

    const data={
        details:details
    }

    await collection.insertMany([data])
})


app.listen(8000,()=>{
    console.log("port connected")
})