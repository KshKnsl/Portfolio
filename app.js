const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const { connectMongoDb } = require("./connection");
const contactForm = require("./models/contact");
dotenv.config();
const db = process.env.MONGODB_URI;
connectMongoDb(db)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/form", async (req, res) => {
  await contactForm
    .create({
      name: req.body.name,
      email: req.body.email,
      description: req.body.message,
    })
    .then(async () => {
      console.log("Data inserted successfully");
    let info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL2,
      subject: "Contact Form from Portfolio Submitted",
      html: `
      <style>
        h1 {
          color: #333;
          font-family: Arial, sans-serif;
        }
        h2 {
          color: #555;
          font-family: Arial, sans-serif;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 5px 0;
          font-family: Arial, sans-serif;
        }
        li span {
          font-weight: bold;
        }
      </style>
      <h1>Contact Form</h1>
      <h2>Details</h2>
      <ul>
        <li><span>Name:</span> ${req.body.name}</li>
        <li><span>Email:</span> ${req.body.email}</li>
        <li><span>Message:</span> ${req.body.message}</li>
        <li><span>Contact No:</span> ${req.body.contactNo}</li>
        <li><span>IP Address:</span> ${req.ip}</li>
        <li><span>Browser:</span> ${req.headers['user-agent']}</li>
        <li><span>Referer:</span> ${req.headers['referer'] || 'N/A'}</li>
        <li><span>Host:</span> ${req.headers['host']}</li>
      </ul>`,
    });
  
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/");
});
app.get("/show", async (req, res) => {
  const data = await contactForm.find();
  res.send(data);
});

app.get("/:wrong", async (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});