const mongoose = require("mongoose");

const myconnect = () => {
  mongoose.connect("mongodb://localhost:27017/SALC").then((res) => {
    console.log("Database connected successfully");
  });
};
module.exports = myconnect;
