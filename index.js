const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/search', async (req, res) => {
    const {q} = req.query;
    console.log(q)
    try {
        let response = await fetch(`https://www.orbitz.com/api/v4/typeahead/${q}?browser=Chrome&client=Homepage&dest=true&device=Mobile&expuserid=684932151&features=ta_hierarchy%7Cpostal_code%7Cgoogle%7Cconsistent_display&format=json&guid=0c969107-bb37-4715-beea-3292bb1441c3&lob=HOTELS&locale=en_US&maxresults=8&personalize=true&regiontype=2047&siteid=70201&latlong=26.18%2C91.73&ab=42716.1&trending=true`)
        let data = await response.json();
        res.send(data);
    }
    catch (e) {
        res.send(e)
    }

})

app.listen(3003, () => {
    console.log(`Server started on http://localhost:3003`);
})

module.exports = app;