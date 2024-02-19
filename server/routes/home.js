const express = require('express')
const router = express.Router()


router.get('/',(req ,res)=>{
    res.render('index')
})
router.get('/contact', (req ,res)=>{
    res.render('contact')
})
router.get('/skills' , (req ,res)=>{
    res.render('skills')
})
router.post('/contact',(req , res)=>{
    res.redirect('contact')
})

module.exports = router