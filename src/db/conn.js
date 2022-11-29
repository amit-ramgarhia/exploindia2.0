const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/exploindia", {
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(() => {
    console.log(`connection sucessful`);
}).catch((e) => {
    console.log(e);
})