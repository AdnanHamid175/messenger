const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleWare");

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // to accept json data in the body

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const localIP = "192.168.1.14";
const port = process.env.PORT || 5000;

app.listen(port, localIP, () => {
  console.log(`Server is running on http://${localIP}:${port}`);
});
