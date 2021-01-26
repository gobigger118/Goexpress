//引入数据库链接
let mongoose = require('../mongodb/db')
let Schema = mongoose.Schema
let txtSchema = new Schema({
    texthead: String,
    content: String,
    datetime: String,
})// Model——————将会生成数据库集合名（复数）
let txt = mongoose.model('content',txtSchema)
module.exports = txt