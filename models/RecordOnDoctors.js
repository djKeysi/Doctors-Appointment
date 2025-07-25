const mongoose = require("mongoose");
const dateNow =
  new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
const RecordOnDoctorsSchema = new mongoose.Schema({
  date: {
    type: String,
    default: dateNow,
    required: true,
  },
  fio: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  yourProblem: {
    type: String,
    //required: true,
  },
});

const RecordOnDoctors = mongoose.model(
  "RecordOnDoctors",
  RecordOnDoctorsSchema
);

module.exports = RecordOnDoctors;
