const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cardSchema = new Schema({
    user_id: {
        type: String
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String
    },
    price: {
        type: Number
    },
    likes: {
        type: Array,
        default: []
    }

}, {
        collection: 'cards'
    });


const Card = mongoose.model("cards", cardSchema);

module.exports = { Card };