const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const app = express()
const port = process.env.PORT || 5000;
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
app.use("/",userRouter);
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB CONNECTED");
    app.listen(port, () => {
        console.log(`server is running on http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err)
})

