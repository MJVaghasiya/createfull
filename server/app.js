const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

const bodyParser = require("body-parser"); router.use(bodyParser.json());

dotenv.config(); // Load environment variables from .env file

require('./DB/conn');

const User = require('../server/model/userSchema');

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGODB_URI; // Load MongoDB URI from environment variable

app.use(express.json()); // Middleware to parse JSON bodies

// Define routes
app.get('/', (req, res) => {
    res.send('hello word from the server');
});

app.get('/contact', (req, res) => {
    res.send('contact from the server');
});

app.get('/signin', (req, res) => {
    res.send('signin from the server');
});

app.post('/login', async (req, res) => {
    res.send('login from the server');
});

// Example API endpoint to create a user
app.post('/api/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
