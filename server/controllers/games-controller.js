const Game = require('../models/games-schema');


const addGame = async (req, res) => {

    const { title, rating, platforms, image, reviews, owner } = req.body;
    console.log(req.body, "body");
    if (!title || !rating || !platforms || !image || !owner) {
        return res.status(400).json({ error: 'title, rating, platforms, image, reviews, owner are required!' });
    }
    const gameData = {
        title,
        rating,
        platforms,
        image,
        reviews,
        owner: req.session.account._id,
    };

    try {
        const newGame = new Game(gameData);
        await newGame.save();
        return res.status(201).json({ title: newGame.title, rating: newGame.rating, platforms: newGame.platforms, image: newGame.image, reviews: newGame.reviews, owner: newGame.owner });
    } catch (err) {
        console.log(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Game already exists!' });
        }
        return res.status(500).json({ error: 'An error occurred adding G=game!' });
    }
};

const getGames = async (req, res) => {
    try {

        const games = await Game.find();
        return res.json({ games });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error retrieving games!' });
    }
};

const deleteGame = async (req, res) => {
    try {
        await Game.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: 'Game deleted successfully!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error deleting game' });
    }
};

const getSingleGame = async (req, res) => {
    try {
        const game = await Game.findOne({ _id: req.params.id });
        return res.json({ game });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error retrieving game!' });
    }
};

const addGameReview = async (req, res) => {
    try {
        const game = await Game.findOne({ _id: req.params.id });
        if (!game) {
            return res.status(404).json({ error: 'Game not found!' });
        }
        const { review_rating, review_text, userId } = req.body;
        if (!review_rating || !review_text) {
            return res.status(400).json({ error: 'review_rating and review_text are required!' });
        }
        game.reviews.push({userId, review_rating, review_text });
        await game.save();
        return res.status(201).json({ game });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error adding review!' });
    }
};

module.exports = {
    addGame,
    getGames,
    getGames,
    deleteGame,
    getSingleGame,
    addGameReview,
};
