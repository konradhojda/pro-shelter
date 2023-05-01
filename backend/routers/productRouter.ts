import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";
import { data } from "../data";
import { Accounts } from "../models/userModel";

const productRouter = express.Router();
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const accounts = await Accounts.find({});
    res.send(accounts);
  })
);
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({ products: createdProducts });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  })
);

export default productRouter;

