const mongoose = require("mongoose");

/// create product schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,

    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: true
    },


});

module.exports = mongoose.model("Product", productSchema);
