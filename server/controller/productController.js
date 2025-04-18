const Product = require("../models/productModel");

module.exports.allProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res
      .status(200)
      .json({ message: "All product fetched successfully", product });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Product fetching failed", error: error.message });
  }
};

module.exports.getProductsId=async(req,res)=>{
    try {
        const productId = req.params.productId
        console.log(typeof productId);
        const product=await Product.findOne({productID:productId})
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product fetched successfully",product})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Product fetched failed!",error:error.message})
        
    }

}

module.exports.addProduct = async (req, res) => {
  try {
    const productDetails = req.body;
    const newProduct = new Product(productDetails);
    await newProduct.save();
    res.status(200).json({ message: "Product added successfully", newProduct });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Product adding failed", error: error.message });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const { productName, description, Price } = req.body;

    const product = await Product.findOne({ _id: productId });

    product.productName = productName ? productName : product.productName;
    product.description = description ? description : product.description;
    product.Price = Price ? Price : product.Price;

    const updateProduct = await product.save();

    res
      .status(200)
      .json({ message: "Product updated successfully!", updateProduct });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Product update failed", error: error.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res
        .status(200)
        .json({ message: "Product delete failed!!! No Product found with this id" });
    }
    res.status(200).json({ message: "Product deleted successfully!!!", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Product delete failed", error: error.message });
  }
};

module.exports.categories=async(req,res)=>{
  const categories = await Product.distinct('productCategory');
  res.json(categories); 
};

