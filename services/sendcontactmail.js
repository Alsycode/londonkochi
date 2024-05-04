import nodemailer from "nodemailer";

export async function sendSimpleMail({ name, email, subject, message }) {
  try {
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

    var mailOptions = {
      from: "lckochiwebsite@gmail.com",
      to: "lckochiwebsite@gmail.com", // Change this to your recipient's email address
      subject: subject,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background-color: #f5f5f5;">
        <h1 style="color: #333; text-align: center;">New Contact Form Submission</h1>
        <hr style="border: 1px solid #ccc;">
        <div style="margin-bottom: 20px;">
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="border-top: 1px solid #ccc; padding-top: 20px;">
          <p style="font-size: 16px;"><strong>Message:</strong></p>
          <p style="font-size: 16px; line-height: 1.6;">${message}</p>
        </div>
      </div>
    `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
