const mongoose = require("mongoose");
const validator = require("validator");

const OperatorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} не верная электронная почта",
    },
  },
  password: {
    type: String,
    required: true,
  },
});
const Operator = mongoose.model("Operator", OperatorSchema);

module.exports = Operator;
