const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labelSchema = new Schema({
    name:{type:String , unique:true},
    type:{type:String, enum:['normal', 'serial']},
    reference:{type:Number , default:0, min:0},
    isdelete:{type:Boolean , default:false},
    likes: {type:Number, default:0, min:0},
    dislikes: {type:Number , default:0, min:0}
},
{
    timestamps:true
});

module.exports = mongoose.model('Label' , labelSchema);