const mongoose = require('mongoose');
const AgendaSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    start: {
        type: Date,
        required: true,
        trim: true,
        unique: true
    },
    end: {
        type: Date,
        required: true,
        trim: true,
        unique: true
    },
    allDay: {
        type: Boolean,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    }

});

module.exports = mongoose.model('Agenda',AgendaSchema);