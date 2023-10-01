
const Product = require("../models/productModel")


const getAllProducts = async (req, res) => {

    const myData = await Product.find({})
    res.status(200).json({ myData });


};
const getAllTestingProducts = async (req, res) => {

    const myData = await Product.find(req.query)
    res.status(200).json({ myData });

};



module.exports = { getAllProducts, getAllTestingProducts, }