const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Origin"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Expose-Headers", "Content-Range");
  res.header("Content-Range", "bytes : 0-9/*");
  next();
});

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

mongoose
  .connect(
    "mongodb+srv://pandeymrityunjay796:utTKQ83GMKwapnHw@digido.h5l7xl6.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));

require("./controllers/controller")(app);

app.listen(process.env.PORT || 8000, () =>
  console.log("Server is running @8000 ...")
);

// Export the Express API
module.exports = app;
