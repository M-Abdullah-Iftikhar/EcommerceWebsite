const express = require("express")

// const { signupValidation, loginValidation} = require("../MiddleWare/userValidation")
// const {fetchUser} = require("../MiddleWare/fetchUser")

const router = express.Router();

const {handlesignupuser,handlesignIn} = require("../Controller/User")



router.post("/signup",handlesignupuser)
router.post("/login",handlesignIn)

// router.get("/test", fetchUser, async (req, res) => {
//     const data = req.user;
//     res.json({userdata:data.user.id})
// });



module.exports = router;