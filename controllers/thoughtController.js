const Thought = require('../models/Thought');
const User = require('../models/User');

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

exports.createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(
            req.body.userId,
            { $push: { thoughts: thought._id } },
            { new: true }
        );
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: 'Error creating thought', error });
    }
};

exports.updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'No thought was found with this ID!' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: 'Error updating thought', error });
    }
};

exports.deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndRemove(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'No thought was found with this ID!' });
        }
        await User.findByIdAndUpdate(
            thought.userId,
            { $pull: { thoughts: req.params.id } },
            { new: true }
        );
        res.json({ message: 'Thought successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting this thought', error });
    }
};

exports.addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought was found with this ID to add a reaction!' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: 'Error adding reaction', error });
    }
};

exports.removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought was found with this ID to remove a reaction!' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: 'Error removing reaction!', error });
    }
};