import express from "express";
import expressAsyncHandler from "express-async-handler";
import { Accounts, Sessions } from "../models/userModel";

const loginRouter = express.Router();
loginRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const accounts = await Accounts.find({});
    const session = await Sessions.find({})

    res.send({
      accounts: accounts,
      session: session
    })
  })
);

export default loginRouter;

