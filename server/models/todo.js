const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    desc: {
        type: String
    },
    done: {
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model('Todo', TodoSchema);