require('dotenv').config();

console.log('=== Testing Direct API Call ===');
console.log('API Key:', process.env.RESEND_API_KEY.substring(0, 20) + '...');
console.log('Recipient:', process.env.RECIPIENT_EMAIL);
console.log('===');

async function testResendAPI() {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [process.env.RECIPIENT_EMAIL],
        subject: 'Test Direct API',
        html: '<p>Test direct API call!</p>'
      })
    });

    const data = await response.json();

    console.log('Status Code:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error sending direct API request:', err.message);
  }
}

testResendAPI();
