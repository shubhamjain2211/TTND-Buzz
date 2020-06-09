const mongoose = require('mongoose');
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
    department: {
        type : String,
    },
    issueTitle: {
        type : String,
    },
    issueId: {
        type : String,
    },
    lockedBy: {
        type: Schema.Types.ObjectId,
        ref : 'user'
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref : 'user'
    },
    status: {
        type : String,
    },
    date : {
        type: Date,
        default : Date.now
    }
});

module.exports = Complaint = mongoose.model('complaint', ComplaintSchema);