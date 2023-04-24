const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("./db/conn");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sample_data', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const dataSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
});

const Data = mongoose.model('Data', dataSchema);

app.get('/api/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
