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
const multer = require("multer")
const path = require("path")
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
app.use("/images", express.static(path.join(__dirname, "public/images"), {
    setHeaders: (res, path, stat) => {
        res.set('Cross-Origin-Resource-Policy', 'same-origin');
    }
}));

// Middleware

// Allow requests from localhost:3000
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//      cb(null,"public/images")   
//     },
//     filename:(req,file,cb)=>{
//         cb(null,req.body.name)
//     },
// })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});



 const upload = multer({storage:storage});
// app.post("/api/upload",upload.single("file"),(req ,res)=>{
//     try {
//      return res.status(200).json("file uploaded suscessfully")  
//     } catch (error) {
//         console.log(error)
//     }
// })


app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "File upload failed" });
    }
});



// Routes

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);


// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});


// const express = require("express");
// const cors = require('cors');
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const userRouter = require("./routes/users");
// const authRouter = require("./routes/auth");
// const postsRouter = require("./routes/posts");
// const multer = require("multer");
// const path = require("path");
// dotenv.config();

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection.on("connected", () => {
//     console.log("Connected to MongoDB");
// });

// mongoose.connection.on("error", (error) => {
//     console.error("Error connecting to MongoDB:", error);
// });

// console.log("MongoDB Connection URI:", process.env.MONGO_URL);




// app.use("/images", express.static(path.join(__dirname, "public/images")));

// app.use(cors());
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "public/images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//     try {
//         return res.status(200).json("file uploaded successfully");
//     } catch (error) {
//         console.log(error);
//     }
// });

// app.use("/api/users", userRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/posts", postsRouter);

// const PORT = process.env.PORT || 8800;
// app.listen(PORT, () => {
//     console.log(`Backend server is running on port ${PORT}`);
// });
