const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.fcczo.mongodb.net/users?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error : " + err);
    }
)