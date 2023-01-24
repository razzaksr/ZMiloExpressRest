const exp=require("express")
require("./models/db")
const cors=require("cors")

const app=exp()
app.use(exp.json())
app.use(cors())


app.listen(8000,()=>{
    console.log("Server started")
})