const express = require("express");
require("./config/dbConnect");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors = require ("cors");
const path = require ("path");


const app = express();

//middlewares
app.use(express.json())// pass incoming data
//cors middleware
app.use(cors());
//static files
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", (req, res)=>{
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// });
//users route
app.use("/api/v1/users", usersRoute);
//account routes
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers
app.use(globalErrHandler);
//listen to server
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));



