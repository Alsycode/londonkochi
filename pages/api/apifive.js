import { NextApiRequest, NextApiResponse } from "next";
import { sendSimpleMail } from "../../services/sendcontactmail.js";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      // Extract data from the request body
      const { name, phone, subject, message } = req.body;

      // Send email with form data
      await sendSimpleMail({
        subject,
        to: "razoralf67@gmail.com", // Update with your email address or use email from req.body
        name,
        phone,
        message,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
};

export default handler;
