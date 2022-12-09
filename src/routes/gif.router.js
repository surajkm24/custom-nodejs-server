const express = require('express');
const axios = require('axios');

const gifAPI = 'L8eXbxrbPETZxlvgXN9kIEzQ55Df04v0';

const app = express.Router();

app.get('/search', async (req, res) => {
    const { q } = req.query;
    try {
        let data = await axios.get(`https://api.giphy.com/v1/videos/search?q=${q}&limit=20&api_key=${gifAPI}`);
        console.log(data.data);
        return res.send(data.data)
    }
    catch (error) {
        return res.send({ message: "Error", error })
    }
})

module.exports = app;
