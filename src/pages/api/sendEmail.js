import sgMail from '@sendgrid/mail';

export default async function sendEmail(req, res) {
  const { email, message } = req.body;

  // Set your SendGrid API key here
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Compose the email message
  const msg = {
    to: 'your-email@example.com', // Replace with your email address
    from: email,
    subject: 'Contact Form Submission',
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    // Send the email
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
