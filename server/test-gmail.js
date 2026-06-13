require('dotenv').config();
const nodemailer = require('nodemailer');

async function testGmail() {
  console.log('=== Testing Gmail ===');
  console.log('User:', process.env.EMAIL_USER);
  console.log('Pass:', '*** (length: ' + (process.env.EMAIL_PASS?.length || 0) + ')');
  console.log('Recipient:', process.env.RECIPIENT_EMAIL);
  console.log('===');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    logger: true,
    debug: true
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Test Gmail from MiB',
      text: 'This is a test email'
    });

    console.log('✅ Email sent: ', info.response);
  } catch (e) {
    console.error('❌ Error sending Gmail:', e.message);
    console.error('Full error:', JSON.stringify(e, null, 2));
  }
}

testGmail();
