require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const babySitterRouter = require("./routers/babysitterRouter");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Babysitter");
});

app.use("/api/v1", babySitterRouter);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
