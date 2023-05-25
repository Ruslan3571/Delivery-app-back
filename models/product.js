const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = Schema(
  {
    title: String,
    price: Number,
    image01: String,
    category: String,
  }
  // { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string(),
  price: Joi.string(),
  image01: Joi.string(),
  category: Joi.string(),
});

// const updateSchema = Joi.object({
//   title: Joi.string(),
//   price: Joi.string(),
//   category: Joi.string(),
// });

const Product = model("product", productSchema);
module.exports = { Product, addSchema };
