const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
            .populate('thoughts')
            .populate('friends');
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user= await User.findById(req.params.id)
            .populate('thoughts')
            .populate('friends');
        if (!user) {
            res.status(404).json({ message: 'No user was found with this ID!' });
            return;
        }
        res.jason(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
};