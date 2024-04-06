import nodemailer from "nodemailer";

export async function sendMail(subject, toEmail, otpText, name, email) {
  try {
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
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${otpText}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
