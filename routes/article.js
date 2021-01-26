var express=require('express');
const article = require('../models/article');
var router=express.Router();
let date = new Date()
router.post('/add',(req,res,next)=>{
    console.log(req.body)
    console.log(req.body.texthead);//获取标题
    console.log(req.body.content);//获取内容
    console.log(date)
    let txtInfo = {
        texthead: req.body.texthead,
        content: req.body.content,
        datetime:date,
      }
    let txtI = new article(txtInfo)

    // 上传至数据库
    txtI.save((err, result) => {
      if (!err) {
        res.send(result)
      }
    }) 
    
})



module.exports=router