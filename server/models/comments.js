const mongoose = require('mongoose');

require('./posts');

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const commentSchema = new Schema({
    owner: String,
    belongedPost: {type:ObjectId , ref:'Post'},
    content: {type:String , trim:true},
    root : {type:ObjectId ,ref:"Comment"},
    parent:{type:ObjectId , ref:'Comment'},
    isdelete:{type:Boolean , default:false},
    likes:{type:Number , default:0 , min:0},
    dislikes:{type:Number, default:0, min:0 }
},{
    timestamps:true
});

module.exports =  mongoose.model('Comment', commentSchema);