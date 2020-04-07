const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const demoSchema = new Schema({
    title:{type:String , unique:true },
    url:{type:String},
    describe:{type:String},
    avatar:{type:String},
    link:{type:String},//github repository link
    likes: {type:Number, default:0, min:0},
    dislikes: {type:Number , default:0, min:0}

},{
    timestamps:true
});

module.exports = mongoose.model('Demo', demoSchema);