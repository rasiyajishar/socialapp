const express = require("express");
const authRouter = express.Router(); // Create a new router instance
const User = require("../models/User");
const bcrypt = require("bcrypt")

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

//register
authRouter.post("/register", async(req, res) => {
  
  try {
//generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
   

    //create new user
    const newUser = new User({
      username:req.body.username,
      email:req.body.email,
      password:hashedPassword,
    })
   
   //save user and  response
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not register user" }); // Sending 500 status for server error
  }
});





// login
authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json("Wrong password");

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});



// Handle Google login
authRouter.post("/auth/googleLogin", async (req, res) => {
  const { tokenId } = req.body;
  try {
      const ticket = await client.verifyIdToken({
          idToken: tokenId,
          audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const { email } = payload;

      // Check if the user already exists in the database
      let user = await User.findOne({ email });

      if (!user) {
          // Create a new user if not found
          user = new User({
              email,
              // Add any other user fields as needed
          });
          await user.save();
      }

      
      // Respond with user data or token
      res.status(200).json({ user });
  } catch (error) {
      console.error("Google login error:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});




module.exports = authRouter;


// const express = require("express");
// const authRouter = express.Router(); 
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// // Register
// authRouter.post("/register", async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({ error: "User with this email already exists." });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword,
//         });

//         const user = await newUser.save();
//         res.status(201).json(user);
//     } catch (error) {
//         console.error("Registration Error:", error);
//         res.status(500).json({ error: "Could not register user." });
//     }
// });

// // Login
// authRouter.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ error: "User not found." });
//         }

//         const validPassword = await bcrypt.compare(password, user.password);

//         if (!validPassword) {
//             return res.status(401).json({ error: "Invalid password." });
//         }

//         res.status(200).json({ message: "Login successful", user });
//     } catch (error) {
//         console.error("Login Error:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// module.exports = authRouter;

