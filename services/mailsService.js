const nodemailer = require("nodemailer");
const fs = require("fs").promises;

async function sendMail({
  subject,
  toEmail,
  otpText,
  name,
  email,
  dob,
  phone,
  address,
  qualification,
  course,
  pg_diploma,
  parent_name,
  parent_phone,
}) {
  try {
    // Read the HTML template file
    const htmlTemplate = await fs.readFile("./components/template.html", "utf8");

    // Replace placeholders in the HTML template with form data
    const formattedHtml = htmlTemplate
      .replace("{name}", name)
      .replace("{email}", email)
      .replace("{dob}", dob)
      .replace("{phone}", phone)
      .replace("{address}", address)
      .replace("{qualification}", qualification)
      .replace("{course}", course)
      .replace("{pg_diploma}", pg_diploma)
      .replace("{parent_name}", parent_name)
      .replace("{parent_phone}", parent_phone)
      .replace("{otpText}", otpText);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shyamalfred@gmail.com",
        pass: "yjkmdhmxtflkbzfk",
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL verification
      },
    });

    // Define mail options with HTML content
    const mailOptions = {
      from: "shyamalfred@gmail.com",
      to: "shyamalfred@gmail.com",
      subject: subject,
      html: formattedHtml,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}

module.exports = sendMail;
