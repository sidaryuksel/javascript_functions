const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    post_body: {
        type: String,
        required: [true, 'The post body is required!']
    },
    author: {
        type: String,
        required: [true, 'The author is required!']
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Data', dataSchema);
