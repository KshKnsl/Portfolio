const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const geoip = require("geoip-lite");
const parser = require('ua-parser-js');
// const { connectMongoDb } = require("./connection");
// const contactForm = require("./models/contact");
dotenv.config();
// const db = process.env.MONGODB_URI;
// connectMongoDb(db)
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch((err) => console.log(err));

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
  let loc = geoip.lookup(
    (req.headers["x-forwarded-for"] || req.ip).split(",")[0].trim()
  );

  let ua = parser(req.headers['user-agent']);
  let browserName = ua.browser.name || "N/A";

  let info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL2,
    subject: "Contact Form from Portfolio Submitted",
    html: `
      <h1 style="color: #4CAF50; font-family: Arial, sans-serif;">Contact Form</h1>
      <h2 style="color: #2196F3; font-family: Arial, sans-serif;">Details</h2>
      <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #4CAF50; color: white;">Field</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #4CAF50; color: white;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Name</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${req.body.name}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Email</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${req.body.email}</td>
        </tr> 
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Message</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${req.body.message}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Contact No</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${req.body.contactNo}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">IP Address</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${req.headers["x-forwarded-for"] || req.ip}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Browser</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${browserName}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Referer</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${req.headers["referer"] || "N/A"}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Host</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${req.headers["host"]}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Location</td>
          <td style="border: 1px solid #ddd; padding: 12px;">${loc ? loc.city : "N/A"}</td>
        </tr>
      </table>`,
  });
  res.redirect("/");
});
// app.get("/show", async (req, res) => {
//   const data = await contactForm.find();
//   res.send(data);
// });

app.get("/:wrong", async (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
