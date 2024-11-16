import express from "express";
import {
  signInController,
  signUpController,
} from "../controller/user.Controller.js";

const userRouter = express.Router();

userRouter.use("/signin", signInController);
userRouter.use("/signup", signUpController);

export default userRouter;
