const mongoose = require("mongoose");

/// create product schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 3.5
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "sumsung", "dell", "mi"],
            message: "Invalid Company"
        },
    },

});

module.exports = mongoose.model("Product", productSchema);
