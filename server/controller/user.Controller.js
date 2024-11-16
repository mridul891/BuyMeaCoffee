import { user } from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Envs
const saltRound = 10;

const SECRET = "Secret";

export const singUpController = async (req, res) => {
  try {
    const body = req.body;

    const exisitingUser = await user.findOne({
      username: body.username,
    });
    if (exisitingUser) {
      return res.status(400).json({
        message: "User Already Exist",
      });
    }

    const hashedPassword = bcrypt.hashSync(body.password, saltRound);

    const newUser = await user.create({
      username: body.username,
      password: hashedPassword,
      name: body.name,
    });

    const token = jwt.sign(
      {
        username: newUser.username,
        id: newUser._id,
      },
      SECRET
    );
    console.log(token);

    res.status(200).json({
      message: " user Created successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while Creating the User" });
  }
};

export const signInController = async (req, res) => {
  try {
    const body = req.body;

    const userPresent = await user.findOne({
      username: body.username,
    });

    if (!userPresent) {
      return res
        .status(400)
        .json({ message: " User is not Present please Register " });
    }

    bcrypt.compare(body.password, userPresent.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(
          { username: userPresent.username, id: userPresent._id },
          SECRET
        );

        return res.status(200).json({
          token: token,
        });
      } else {
        return res.status(400).json({
          message: "Password Incorrect",
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: " Error while Sign in" });
  }
};
