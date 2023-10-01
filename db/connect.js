const mongoose = require("mongoose");



const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
        .then(() => console.log("MongoDB connected"))
}


module.exports = connectDB;

