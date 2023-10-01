
const Product = require("../models/productModel")


const getAllProducts = async (req, res) => {
    // const myData = await Product.find({}).sort("name -price")
    // const myData = await Product.find({}).select("name company");
    const myData = await Product.find({});



    res.status(200).json({ myData });
};



const getAllTestingProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const qureyObject = {};
    if (company) {
        qureyObject.company = company;
    }

    if (name) {
        qureyObject.name = { $regex: name, $options: 'i' };
    }
    if (featured) {
        qureyObject.featured = featured;
    }

    let apiData = Product.find(qureyObject);


    if (sort) {
        // let sortFix = sort.replace(",", " ");// it take 2 parameter

        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        // let selectFix = select.replace(",", " ");// it take 2 parameter

        let selectFix = select.split(",").join(" "); // betterWay-> this is another way of select
        apiData = apiData.select(selectFix);
    }


    console.log(qureyObject);
    const myData = await apiData.sort(sort);
    res.status(200).json({ myData });


    // const myData = await Product.find(req.query)
    // res.status(200).json({ myData });

};



module.exports = { getAllProducts, getAllTestingProducts, }