const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

mongoose.set("strictQuery",false);
mongoose.connect(procee.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }, err=>{
    if(!err){console.log("Connected to mongodb")}
    else{console.log("Connection failed");}
})

