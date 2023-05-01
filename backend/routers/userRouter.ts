import express from "express";
import { data } from "../data";
import { User } from "../models/userModel";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove();
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

export default userRouter;
