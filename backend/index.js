const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth")
const postsRouter = require("./routes/posts")

dotenv.config();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/socialapp");

// Event listener for successful connection
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

// Event listener for connection error
mongoose.connection.on("error", (error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Middleware

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);


// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
