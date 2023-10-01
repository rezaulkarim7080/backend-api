
const express = require("express");
const { getAllTestingProducts, getAllProducts, getSingleProduct } = require("../controllers/products");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/testing", getAllTestingProducts);


module.exports = router;