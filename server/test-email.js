require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  console.log('🔑 Testing Resend API...');
  console.log('API Key starts with:', process.env.RESEND_API_KEY.substring(0, 5));
  console.log('Recipient email:', process.env.RECIPIENT_EMAIL);

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.RECIPIENT_EMAIL],
      subject: 'Test Email from MiB Tech Solutions',
      html: `
        <h1>✅ Test Successful!</h1>
        <p>If you received this, the email sending is working!</p>
      `
    });

    if (error) {
      console.error('❌ Resend Error:', error);
      throw error;
    } else {
      console.log('✅ Email sent successfully! ID:', data.id);
    }
  } catch (e) {
    console.error('❌ Error sending test email:', e.message);
    console.error('Full error:', JSON.stringify(e, null, 2));
  }
}

testEmail();
