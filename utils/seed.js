const mongoose = require('mongoose');
const Thought = require('../models/Thought');
const User = require('../models/User');
const { getRandomName, getRandomEmail, getRandomThoughts } = require('./data');
const db = require('../config/connection');

db.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    for (let i = 0; i < 10; i++) {
        const name = getRandomName();
        const email = getRandomEmail(name);
        users.push({ username, email });
    }

    const createdUsers = await User.insertMany(users);

    const thoughts = createdUsers.map(user => ({
        thoughtText: getRandomThoughts(1)[0],
        username: user.username,
    }));

    const createdThoughts = await Thought.insertMany(thoughts);

    console.log('Databse seeded!');
    process.exit(0);
});