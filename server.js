const express = require("express");
require("./config/dbConnect");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors = require("cors");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json()); // pass incoming data
// Cors middleware
app.use(cors());

// Users route
app.use("/api/v1/users", usersRoute);
// Account routes
app.use("/api/v1/accounts", accountRoute);

// Transactions route
app.use("/api/v1/transactions", transactionsRoute);

// Error handlers
app.use(globalErrHandler);

// Static files
app.use(express.static(path.join(__dirname, "./client/build")));

// Catch-all route for other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Listen to the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
