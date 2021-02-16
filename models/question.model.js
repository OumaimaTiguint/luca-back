const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    publication: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    }
},
{
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;