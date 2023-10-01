
const getAllProducts = async (req, res) => {

    res.status(200).json({ message: "i am getall products" });


};
const getAllTestingProducts = async (req, res) => {

    res.status(200).json({ message: "i am getall TEsting  products" });

};



module.exports = { getAllProducts, getAllTestingProducts, }