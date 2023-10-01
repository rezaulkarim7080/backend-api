
const Product = require("../models/productModel")


const getAllProducts = async (req, res) => {
    const myData = await Product.find({});

    // total product
    const totalProduct = await Product.countDocuments({});

    res.status(200).json({ totalProduct, myData });
    // res.status(200).json({ myData });
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


    // sort

    if (sort) {
        // let sortFix = sort.replace(",", " ");// it take 2 parameter

        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }


    // select

    if (select) {
        // let selectFix = select.replace(",", " ");// it take 2 parameter

        let selectFix = select.split(",").join(" "); // betterWay-> this is another way of select
        apiData = apiData.select(selectFix);
    }


    // pagination

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5; /// page product ->5
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);


    // total product
    const totalProduct = await Product.countDocuments({});


    // console.log(qureyObject);

    const myData = await apiData.sort(sort);
    res.status(200).json({ totalProduct, myData });


    // const myData = await Product.find(req.query)
    // res.status(200).json({ myData });

};



module.exports = { getAllProducts, getAllTestingProducts, }





// const totalProduct = await Product.countDocuments({});
// const myData = await Product.find({}).select("name company");
// const myData = await Product.find({}).sort("name -price");
// const myData = await Product.find({}).sort("name -price").select("name company");
// const myData = await Product.find({}).sort("name -price").select("name company").limit(10);
// const myData = await Product.find({}).sort("name -price").select("name company").skip(10);
// const myData = await Product.find({}).sort("name -price").select("name company").limit(10).skip(10);
// const myData = await Product.find({}).sort("name -price").select("name company").limit(10).skip(10).lean();
// const myData = await Product.find({}).sort("name -price").select("name company").limit(10).skip(10).lean().exec();