const express =require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();

const PORT = process.env.PORT || 8070 ;

app.use(cors());
app.use(bodyParser.json()); 

const URL =  process.env.MongoDB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB connection success");
})


const userRouter = require("./routes/users.js");
app.use("/user",userRouter);

const companyRouter = require("./routes/companies.js");
app.use("/company",companyRouter);


const requestRouter = require("./routes/requests.js");
app.use("/request",requestRouter);

const farmerRouter = require("./routes/farmers.js");
app.use("/farmer",farmerRouter);

const expenditureRouter = require("./routes/Expenditures.js");
app.use("/expenditure",expenditureRouter);

const incomeRouter = require("./routes/Incomes.js");
app.use("/incomes",incomeRouter);

const itemRouter = require("./routes/items.js");
app.use("/item",itemRouter);

const shippingRouter = require("./routes/shippings.js");
app.use("/shipping",shippingRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
