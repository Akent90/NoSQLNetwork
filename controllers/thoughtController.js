const { Thought, User } = require('../models');

exports.getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ message: 'Error getting thoughts', error });
    }
};

exports.getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(400).json({ message: 'No thought was found with this ID!' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: 'Error getting thought', error });
    }
};