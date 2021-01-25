let mongoose=require('../mongodb/db')
//Schema
let Schema=mongoose.Schema
let userSchema=new  Schema({
    username:String,
    password:String,
    password1:String,
})
//Model-----将会生成数据库集合名（复数）
let User =mongoose.model('users',userSchema)
module.exports=User