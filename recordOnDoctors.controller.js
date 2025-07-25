const RecordOnDoctors = require("./models/RecordOnDoctors");

async function createRecordOnDoctors(fio, phone, yourProblem) {
  await RecordOnDoctors.create({
    fio,
    phone,
    yourProblem,
  });
}
module.exports = {
  createRecordOnDoctors,
};
