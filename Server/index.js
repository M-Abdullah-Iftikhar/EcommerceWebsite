const express = require("express");
const cors = require('cors');
const {connecttomongoose} = require('./db');
const multer = require('multer');
const path = require('path')
const ProductRouter = require('./Routes/Product')
const UserRouter = require("./Routes/User")
const dotenv = require('dotenv') 
dotenv.config()


const port = process.env.PORT || 8000;

// App use......................................

const app = express();
app.use(express.json());
app.use(cors());

// api routes

app.get("/",(req,res)=>{
    res.send("Express app is running and other? ")
})


// Products Routes..........................

app.use("/",ProductRouter)

// User Router ..............................

app.use("/",UserRouter)


// image storage...............................

const storage = multer.diskStorage({     // make a storage container which we can customize
    destination:'./Upload/Images',      // Where the files Stored
    filename:(req,file,cb)=>{
        return cb(null,  `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})


// create endpoint for uploading picture


app.use('/images',express.static("Upload/Images"))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:true,
        image_url:`https://hopifyecommerce.onrender.com/images/${req.file.filename}`
    })
})


// Connection With Database.....................

connecttomongoose().then(()=>{
    console.log("Database Connected")
}).catch(()=>{
    console.log("Database not Connected")
})

// Starting the Server..........................

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})
