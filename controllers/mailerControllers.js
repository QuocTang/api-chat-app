const nodeMailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "abclone114@gmail.com",
    pass: "kgacnfzokycaxfqi",
  },
});

const sendMailAuthencation = asyncHandler(async (req, res) => {
  const { email } = req.body;
  let randomCapcha = (Math.random() + 1).toString(36).substring(7);
  console.log(email);
  const options = {
    from: "abclone114@gmail.com",
    to: email,
    subject: "[ChatApp] Please verify your email!",
    text: randomCapcha,
  };
  await transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      res.json("email is required");
      return;
    }
    console.log(info.response);
    res.json(randomCapcha);
  });
});

module.exports = { sendMailAuthencation };
