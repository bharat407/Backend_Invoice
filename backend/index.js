const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/v1", productRoutes);
app.use("/api/v1", customerRoutes);
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});
dbConnect();
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
