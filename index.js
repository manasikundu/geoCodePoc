const express=require('express')
const app=express()
const router=require('./router')
app.use(express.json())

app.use(router)


const port = 5000;
app.listen(port, () => {
    console.log(`Backend server is running on ${port}!`);
});

