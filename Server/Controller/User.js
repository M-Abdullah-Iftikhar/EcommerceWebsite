const User = require("../Models/User");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "hopify-@ecom-@web";

async function handlesignupuser(req, res) {
  try {
    const body = req.body;
    const chkingexistance = await User.findOne({ email: body.email });
    if (chkingexistance) {
      return res
        .status(409)
        .json({ error: "User already exist, you can login", success: false });
    }
    let cart = {}
    for(let i=0;i<300;i++)
    {
        cart[i] = 0;
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(body.password, salt);
    const user = await User.create({
      name: body.name,
      email: body.email,
      password: secPass,
      cartItem:cart
    });

    res
      .status(201)
      .json({ message: "user created successfully", success: true,user });
  } catch (error) {
    res.status(500).json({
      message: "Internal server errror",
      success: false,
    });
  }
}

async function handlesignIn(req, res) {
  const body = req.body;
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res
        .status(403)
        .json({
          message: "Please try to login with correct credentials",
          success: false,
        });
    }

    const passwordCompare = await bcrypt.compare(body.password, user.password);
    if (!passwordCompare) {
      return res
        .status(403)
        .json({
          message: "Please try to login with correct credentials",
          success: false,
        });
    }

    const data = {
      user: {
        id: user.id,
        email: user.email,
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "24h" });
    res.cookie("JWT_TOKEN", authtoken, { httpOnly: true,secure:false }); // Set httpOnly to true for security

    return res
      .status(200)
      .json({ message: "User login successful", success: true, authtoken:authtoken,email:user.email,name:user.name });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server error", success: false });
  }
}

module.exports = { handlesignupuser, handlesignIn };
