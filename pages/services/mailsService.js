// pages/api/sendMail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
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
  } = req.body;

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

  const mailOptions = {
    from: "shyamalfred@gmail.com",
    to: "shyamalfred@gmail.com",
    subject: subject,
    text: `
      Name: ${name}
      Email: ${email}
      Date of Birth: ${dob}
      Phone: ${phone}
      Address: ${address}
      Qualification: ${qualification}
      Course: ${course}
      PG Diploma: ${pg_diploma}
      Parent Name: ${parent_name}
      Parent Phone: ${parent_phone}
      Message: ${otpText}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    res.status(200).json({ message: "Email Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
