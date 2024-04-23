
const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (title) => _.escape(title).trim();


const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User',
    },
    review_rating: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    review_text: {
        type: String,
        trim: true,
        required: true,
    }
});

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        set: setName,
    },
    platforms: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    reviews:
        [reviewSchema],
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User',
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

gameSchema.statics.toAPI = (doc) => ({
    title: doc.title,
    rating: doc.rating,
    platforms: doc.platforms,
    image: doc.image,
    reviews: doc.reviews,
    owner: doc.owner,
});

const GameModel = mongoose.model('Game', gameSchema);

module.exports = GameModel;