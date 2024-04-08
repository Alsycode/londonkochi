import nodemailer from "nodemailer";

export async function sendSimpleMail({ name, email, subject, message }) {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shyamalfred@gmail.com",
        pass: "yjkmdhmxtflkbzfk",
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL verification
      },
    });

    var mailOptions = {
      from: "shyamalfred@gmail.com",
      to: "shyamalfred@gmail.com", // Change this to your recipient's email address
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
