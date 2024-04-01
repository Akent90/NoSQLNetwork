const { User, Thought } = require('../models');

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
        res.json(user);
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

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'No user was found with this ID' });
            return;
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userToDelete = await User.findByIdAndDelete(req.params.id);
        if (!userToDelete) {
            res.status(404).json({ message: 'No user was found with this ID' });
            return;
        }
        await Thought.deleteMany({ username: userToDelete.username });
        await userToDelete.remove();
        res.json({ message: 'User and their thoughts were deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        if(!user) {
            res.status(404).json({ message: 'No user was found with this ID' });
            return;
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.removeFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'No user was found with this ID' });
            return;
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};