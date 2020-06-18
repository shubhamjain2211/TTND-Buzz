const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuzzSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref : 'user'
    },
    text: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    category: {
        type : String,
    },
    image: {
        type : String
    },
    name: {
        type : String,
    },
    avatar: {
        type : String,
    },
    likes :[
        {
            user : {
                type : Schema.Types.ObjectId,
                ref :'user'
            }
        }
    ],
    dislikes :[
        {
            user : {
                type : Schema.Types.ObjectId,
                ref :'user'
            }
        }
    ],
    date : {
        type: Date,
        default : Date.now
    }
});

module.exports = Buzz = mongoose.model('buzz', BuzzSchema);