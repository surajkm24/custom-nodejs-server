const express = require('express');
const cors = require('cors');

const gifRouter = require('./routes/gif.router.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/api/gif', gifRouter);

app.get('/', (req, res) => {
    res.send('Hi I am Suraj. Nice to meet you. Now get lost. Don`t make unnecessary request to my server. It costs real money.')
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})

module.exports = app;