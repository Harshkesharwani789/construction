const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer'); // For handling file uploads
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5003;

// Enable CORS
app.use(cors());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be saved in the 'uploads' folder

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email endpoint
app.post('/send-email', upload.single('attachment'), (req, res) => {
  const { name, email, message } = req.body; // Extract form data
  const attachment = req.file; // Get the uploaded file

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  // Professional HTML email template
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <!-- Header -->
      <div style="text-align: center; background-color: #2C3E50; padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="color: #fff; margin: 0;">New Enquiry Received</h1>
      </div>

      <!-- Body -->
      <div style="padding: 20px;">
        <p>Hello,</p>
        <p>You have received a new enquiry from:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
          <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
          <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Please respond to this enquiry at your earliest convenience.</p>
      </div>

      <!-- Footer -->
      <div style="text-align: center; background-color: #f9f9f9; padding: 15px; border-radius: 0 0 10px 10px; font-size: 0.9em; color: #777;">
        <p style="margin: 0;">This is an automated message. Please do not reply directly to this email.</p>
        <p style="margin: 0;">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  `;

  console.log('HTML Content:', htmlContent); // Log the HTML content

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Enquiry from ${name}`,
    html: htmlContent, // Use the HTML content
    attachments: attachment
      ? [
          {
            filename: attachment.originalname || 'attachment',
            path: attachment.path, // Path to the uploaded file
          },
        ]
      : [],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email', error: error.toString() });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully', info: info.response });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});