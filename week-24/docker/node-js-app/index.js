import express from 'express'

const app = express()

app.use(express.json());

app.get("/", (req,res)=>{
    res.send('Hi their hosted!')
})

app.listen(3000, ()=>{
    console.log("Server is hosted on http://localhost:3000")
})
