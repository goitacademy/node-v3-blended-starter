import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getAllProducts = async (req, res) => {
  const products = await Product.find({ userId: req.user._id });
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findById({
    _id: productId,
    userId: req.user._id,
  });

  if (!product) {
    throw createHttpError(404, 'Opps something went wrong..');
  }

  res.status(200).json(product);
};

export const createProduct = async (req, res) => {
  const product = await Product.create({ ...req.body, userId: req.user._id });
  res.status(201).json({ product });
};

export const updateProduct = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
  });

  if (!product) {
    throw createHttpError(404, 'Product was not found!');
  }

  res.status(200).json(product);
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findOneAndDelete({
    _id: productId,
    userId: req.user._id,
  });

  if (!product) {
    throw createHttpError(404, 'Product was not found!');
  }

  res.status(200).json(product);
};
