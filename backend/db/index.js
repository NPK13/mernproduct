
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://salih:salih123@cluster0.d5wkp7e.mongodb.net/person')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log('Error :' + err)
    })
