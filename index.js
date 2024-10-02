const express = require("express");
const sequelize = require("./config/db");
const productRoutes = require("./routes/productRoutes");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", productRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("database connected and synced");
    app.listen(port, () => {
      console.log(`server is running on ${port}`);
    });
  })
  .catch((error) => {
    console.log("error connecting with database", error);
  });
