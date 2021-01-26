"use strict";

//引入数据库链接
var mongoose = require('../mongodb/db'); //创建规范


var Schema = mongoose.Schema;
var userSchema = new Schema({
  userName: String,
  password: String,
  passwordC: String
}); // Model——————将会生成数据库集合名（复数）

var User = mongoose.model('users', userSchema);
module.exports = User;