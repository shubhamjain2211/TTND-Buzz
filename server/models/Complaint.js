const mongoose = require('mongoose');
const uniqid = require('uniqid');
const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref : 'user'
    },
    text: {
        type : String,
        required : true
    },
    name: {
        type : String,
    },
    email: {
        type : String,
    },
    department: {
        type : String,
    },
    issueTitle: {
        type : String,
    },
    issueId: {
        type : String,
        default: uniqid()
    },
    lockedBy: {
        type : String,
    },
    assignedTo: {
        type: String,
    },
    assignedToId: {
        type: Schema.Types.ObjectId,
        ref : 'user'
    },
    status: {
        type : String,
    },
    image:{
        type : String
    },
    date : {
        type: Date,
        default : Date.now()
    }
});

module.exports = Complaint = mongoose.model('complaint', ComplaintSchema);