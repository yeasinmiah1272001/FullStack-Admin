import usermodel from "../models/userModels.js";
import validator from "validator";

const userLogin = async (req, res) => {};
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = await req.body;
    console.log("body", name);
    const existinguser = await usermodel.findOne({ email });
    // email validation
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "pleace enter a validate email",
      });
    }
    if (existinguser) {
      // cheak user
      return res.json({ success: true, message: "user already exit" });
    }

    // password
    if (email.length < 8) {
      return res.json({
        success: true,
        message: "pleace password must be 8 chr",
      });
    }

    // new user create
    const newUser = new usermodel({
      name,
      email,
      password,
    });

    // save database
    await newUser.save();

    res.json({
      success: true,
      message: "api connected successfull",
    });
  } catch (error) {
    console.log("register error", error);
    res.json({ success: true, message: error.message });
  }
};

const addmiinLogin = async (req, res) => {};
const removeUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const getUsers = async (req, res) => {
  res.send("hello user");
};

export {
  userLogin,
  userRegister,
  addmiinLogin,
  removeUser,
  updateUser,
  getUsers,
};
