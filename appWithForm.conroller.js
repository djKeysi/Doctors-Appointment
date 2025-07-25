const RecordOnDoctors = require("./models/RecordOnDoctors");

async function recordOnDoctorsAndAppWithForm() {
  const record = await RecordOnDoctors.find();
  return record;
}

async function SearchOnFIO() {
  return RecordOnDoctors.find({ fio });
}

module.exports = {
  recordOnDoctorsAndAppWithForm,
  SearchOnFIO,
};
