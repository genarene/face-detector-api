const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register");
const Signin = require("./controllers/Signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "test",
    database: "smartbrain",
  },
});

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/Signin", (req, res) => {
  Signin.handleSignin(req, res, bcrypt, db);
});
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});
app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});
app.listen(3000, () => {
  console.log("app is running on part 3000");
});
