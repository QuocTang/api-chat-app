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
  const { name, email } = req.body;
  let randomCapcha = (Math.random() + 1).toString(36).substring(7);
  console.log(email);
  const options = {
    from: "abclone114@gmail.com",
    to: email,
    subject: "[ChatApp] Please verify your email",
    html: `
<h2>Hey ${name}!</h2>
    
<h5>A sign in attempt requires further verification because we did not reconize your device.
 To complete the sign in, enter the verification code on the unrecognized device.</h5>

<h4>Verification code: <span style="color:red">${randomCapcha}</span></h4>

<h5>Thanks</h5>

`,
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
