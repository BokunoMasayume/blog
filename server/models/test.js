const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
// cosnt ObjectId = Schema.ObjectId;

const testSchema = new Schema({
    name: {
        type:String,
        trim: true,
        unique:true
    },
    age:{
        type:Number,
        min: 0
    },
    comments:{
        type:[String]
    }
},{
    timestamps:true
});

 module.exports = mongoose.model('Test', testSchema);

