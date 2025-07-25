const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const { createRecordOnDoctors } = require("./recordOnDoctors.controller");
const Operator = require("./models/Operator");
const {
  recordOnDoctorsAndAppWithForm,
  SearchOnFIO,
} = require("./appWithForm.conroller");
const e = require("express");
const port = 3000;
const app = express();
app.set("view engine", "ejs");
app.set("views", "pages");

app.use(express.static(path.resolve(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Запись к врачу",
    createdRecord: false,
    error: "",
  });
});

app.post("/", async (req, res) => {
  await createRecordOnDoctors(
    req.body.fio,
    req.body.phone,
    req.body.yourProblem
  );
  res.render("index", {
    title: "Запись к врачу",
    createdRecord: true,
    error: "",
  });
});

app.get("/operator", (req, res) => {
  res.render("operator", {
    title: "LoginOperator",
    createdRecord: false,
    error: "",
  });
});

app.post("/operator", async (req, res) => {
  // await Operator.create({ email: req.body.email, password: req.body.password });

  // res.render("operator", {
  //   title: "LoginOperator",
  //   createdRecord: false,
  // });
  // if (req.body.email === "" || req.body.password === "") {}

  if (req.body.email === "qwe@qwe.ru" && req.body.password === "qwe") {
    res.redirect("/app-with-form");
  } else {
    res.render("operator", {
      title: "LoginOperator",
      createdRecord: false,
      error: "Неверная электронная почта или пароль",
    });
  }

  // }

  //res.redirect("/app-with-form");
});
app.get("/app-with-form", async (req, res) => {
  res.render("app-with-form", {
    title: "Заявки с формы",
    createdRecord: false,
    records: await recordOnDoctorsAndAppWithForm(),
    error: undefined,
    //search: SearchOnFIO(req.body.fio),
  });
});
app.post("/app-with-form", async (req, res) => {
  res.render("app-with-form", {
    title: "Заявки с формы",
    createdRecord: false,
    records: await recordOnDoctorsAndAppWithForm(),
    error: undefined,
    // search: SearchOnFIO(),
  });
});

mongoose
  .connect(
    "mongodb://user:mongopass@localhost:27017/doctorsAppointment?authSource=admin"
  )
  .then(() => {
    app.listen(port, () => {
      // console.log(chalk.green(`Server has been started on port ${port}...`));
      console.log("Сервер запущен");
    });
  });
