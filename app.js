// All Application is runing from here .......
const express = require('express')
const app = express()
const port = process.env| 80;


app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))




// app.get('/',async(req , res)=>{
//     res.send('hello world')
// })

// const route = require('./server/routes/home.js')
// app.use('/' , router)

const router = require('./server/routes/home')
app.use('/' , router)
app.use('/contact' , router)

app.listen(port , ()=> console.log(`App is working on http://localhost:${port}`))