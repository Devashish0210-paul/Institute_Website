const db = require("./db");
db();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

const coachingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
  },
  suggestion: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("contactus", coachingSchema);
app.use(cors());
app.use(express.json());
app.post("/contactus", async (req, res) => {
  try {
    const exist = await user.findOne({ email: req.body.email });
    if (exist) {
      return res
        .status(400)
        .json({ message: "Request already exist", success: false });
    }

    const data = await user.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      suggestion: req.body.suggestion,
    });
    if (!data) {
      return res
        .status(501)
        .json({ message: "Something went Wrong", success: false });
    }

    return res
      .status(200)
      .json({ message: "Thankyou for Contacting us", success: true });
  } catch (error) {
    console.log(error.message);
    return res
      .status(501)
      .json({ message: "Something went Wrong", success: false });
  }
});

app.listen(5000, (req, res) => {
  console.log("Your app is SuccessFully Running on port no 5000");
});
