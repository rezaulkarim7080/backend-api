require("dotenv").config();
const express = require("express");

const app = express();

const connectDb = require("./db/connect");



app.get("/", (req, res) => {
    res.send("i am live");
});

/// middleware or set router

const product_routes = require("./routes/products")

app.use("/api/products", product_routes);


const start = async () => {

    try {
        await connectDb();
        app.listen(process.env.PORT || 5000, () => {
            console.log(`server is running port `);
        });
    } catch (error) {

        console.log(error);
    }

}

start();


