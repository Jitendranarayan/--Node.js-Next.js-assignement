const { default: mongoose, Mongoose } = require("mongoose");



mongoose.connect("mongodb://localhost:27017/sample_data", { useNewUrlParser: true, useUnifiedTopology: true});

fetch('http://localhost:3001/api/data')
    .then(response => response.json())
    .then(data => {
        // Use the data to display it in a table format
    })
    .catch(error => console.error(error));
