import nodemailer from "nodemailer";
const fs = require("fs").promises;

export async function sendMail({
  subject,
  name,
  email,
  message,
  dob,
  phone,
  address,
  qualification,
  course,
  pgDiploma,
  parentName,
  parentPhone,
  }) {
  try {
    // Read the HTML template file
    // const htmlTemplate = await fs.readFile("./components/template.html", "utf8");

    // // Replace placeholders in the HTML template with form data
    // const formattedHtml = htmlTemplate
    //   .replace("{name}", name)
    //   .replace("{email}", email)
    //   .replace("{dob}", dob)
    //   .replace("{phone}", phone)
    //   .replace("{address}", address)
    //   .replace("{qualification}", qualification)
    //   .replace("{course}", course)
    //   .replace("{pg_diploma}", pgDiploma)
    //   .replace("{parent_name}", parentName)
    //   .replace("{parent_phone}", parentPhone)
    //   .replace("{otpText}", otpText);

    // Create Nodemailer transporter
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lckochiwebsite@gmail.com",
        pass: "ideaqgznspphgbxx",
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL verification
      },
    });

    // Define mail options with HTML content
    var mailOptions = {
      from: "lckochiwebsite@gmail.com",
      to: "lckochiwebsite@gmail.com",
      subject: subject,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background-color: #f5f5f5;">
        <h1 style="color: #333; text-align: center;">New Admssion Submission</h1>
        <hr style="border: 1px solid #ccc;">
        <div style="margin-bottom: 20px;">
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Subject:</strong> ${subject}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>dob:</strong> ${dob}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>phone:</strong> ${phone}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>qualification:</strong> ${qualification}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>address:</strong> ${address}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>course:</strong> ${course}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>pgDiploma:</strong> ${pgDiploma}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>parentName:</strong> ${parentName}</p>       
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>parentPhone:</strong> ${parentPhone}</p>
          </div>
        <div style="border-top: 1px solid #ccc; padding-top: 20px;">
          <p style="font-size: 16px;"><strong>Message:</strong></p>
          <p style="font-size: 16px; line-height: 1.6;">${message}</p>
        </div>
      </div>
    `,
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


