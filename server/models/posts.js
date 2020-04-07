const mongoose = require('mongoose');
require('./labels');
const ObjectId = Schema.ObjectId;

const Schema = mongoose.Schema;

const postSchema = new Schema({
    labels:[{type:ObjectId , unique:true, ref:"Label"}],
    serial: [{type:ObjectId, unique:true ,ref:"Label" }],
    type: {type:String, enum:['post', 'log' , 'essay']},
    avatar: String,
    title:{type:String, trim:true , unique:true}, // 标题唯一
    content: String,
    isdelete:{type:Boolean , default:false},
    likes:{type:Number, min:0 , default:0},
    dislikes:{type:Number, min:0, default:0}
},
{
    timestamps:true
});

module.exports = mongoose.model("Post", postSchema);