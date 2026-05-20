require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

console.log('🔍 Testing connections...\n');

console.log('📋 Environment variables found:');
console.log('  - SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Set' : '❌ Missing');
console.log('  - SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');
console.log('  - EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Missing');
console.log('  - EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing');
console.log('  - RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL ? '✅ Set' : '❌ Missing');
console.log('');

async function testSupabase() {
  console.log('🔗 Testing Supabase connection...');
  try {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Supabase error:', error.message);
      console.error('   Make sure you have a "contact_submissions" table!');
      return false;
    }
    
    console.log('✅ Supabase connection successful!');
    return true;
  } catch (err) {
    console.error('❌ Supabase connection failed:', err.message);
    return false;
  }
}

async function testEmail() {
  console.log('\n📧 Testing email connection...');
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Test Email from MiB Portfolio',
      text: 'If you received this, your email setup is working!'
    };
    
    await transporter.sendMail(testMailOptions);
    console.log('✅ Email sent successfully! Check your inbox!');
    return true;
  } catch (err) {
    console.error('❌ Email connection failed:', err.message);
    console.error('   Make sure you are using an App Password, not your regular Gmail password!');
    console.error('   Go to: https://myaccount.google.com/apppasswords');
    return false;
  }
}

async function runAllTests() {
  await testSupabase();
  await testEmail();
  console.log('\n✅ All tests complete!');
}

runAllTests();
