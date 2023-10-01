require("dotenv").config();
const connectDb = require("./db/connect");

const Product = require("./models/productModel")

const ProductJson = require("./product.json");

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Data inserted");
    } catch (error) {
        console.log(error);
    }
}



start();