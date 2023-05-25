const { Product } = require("../../models/product");

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndRemove(id);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({ message: "Product deleted" });
};

module.exports = removeProduct;
