const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.register = async (req, res) => {
  try {
    const userDetails = req.body;
    console.log(userDetails);
    const isExist = await User.findOne({ email: userDetails.email });

    if (isExist) {
      return res.status(409).json({ message: "User already exists!" });
    }

    const newUser = await User.create(userDetails);
    res.status(201).json({ message: "Registration success!", newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Regstration failed!", error: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (auth) {
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.jwt_secret,
        { expiresIn: "1hr" }
      );

      res.cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use true in production
        sameSite: "Lax",
        maxAge: 1000 * 60 * 60, // 1 hour
      });

      return res.status(200).json({ message: "Login success", user });
    }
    res.status(401).json({ message: "Invalid password" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Regstration failed!", error: error.message });
  }
};

module.exports.uploads = async (req, res) => {
  console.log(req.file);
  const avatar = `http://localhost:${process.env.PORT}/${req.file.originalname}`;
  const user = await userModel.findByIdAndUpdate(
    req.user.id,
    { $set: { avatar: avatar } },
    { new: true }
  );
  console.log(user);
  res.json(user);
};

module.exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

module.exports.logout = async (req, res) => {
  try {
    res.clearCookie("authToken", { httpOnly: true });
    return res.status(200).json({ message: "Logout Done" });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};
