const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date:{
        type:String,
        // required: true,
    },
    time:{
        type:String,
        // required: true,
    },
    location:{
        type:String,
        // required: true,
    },
    phone:{
        type:String,
        // required: true,
    }
}
,
{
    timestamps: true
})

module.exports = mongoose.model('Post', Post)