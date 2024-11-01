const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleWare");

dotenv.config();

// allow cors
const cors = require("cors");

// allow all origins
const corsOptions = {
  origin: "*",
  headers: "*",
  methods: "*",
};

connectDB();

const app = express();

app.use(cors(corsOptions));

app.use(express.json()); // to accept json data in the body

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

// const localIP = "192.168.1.14";
const localIP = "localhost";
const port = process.env.PORT || 5000;

app.listen(port, localIP, () => {
  console.log(`Server is running on http://${localIP}:${port}`);
});
