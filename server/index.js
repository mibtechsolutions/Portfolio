require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const ws = require('ws');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    transport: ws
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get('/', (req, res) => {
  res.json({
    message: 'MiB Tech Solutions API Server',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;
    
    console.log('📨 Receiving contact form submission:', { name, email, phone, company, message: message.substring(0, 50) + '...' });
    
    let dbData = null;
    let emailSent = false;
    
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          { name, email, phone, company, message }
        ])
        .select();

      if (error) {
        console.error('❌ Supabase insert error:', error);
      } else {
        dbData = data;
        console.log('✅ Data saved to Supabase:', dbData);
      }
    } catch (dbError) {
      console.error('❌ Database error:', dbError);
    }
    
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2 style="color: #D4AF37;">New Contact Form Submission</h2>
          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; color: #ffffff;">
            <p><strong style="color: #D4AF37;">Name:</strong> ${name}</p>
            <p><strong style="color: #D4AF37;">Email:</strong> ${email}</p>
            ${phone ? `<p><strong style="color: #D4AF37;">Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong style="color: #D4AF37;">Company:</strong> ${company}</p>` : ''}
            <p><strong style="color: #D4AF37;">Message:</strong></p>
            <p style="background: #2a2a2a; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log('✅ Email sent successfully!');
    } catch (emailError) {
      console.error('❌ Email sending error:', emailError.message);
      console.log('💡 Tip: Make sure you set up a Gmail App Password and update your .env file!');
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: dbData,
      emailSent
    });
  } catch (error) {
    console.error('❌ General error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: error.message
    });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error: error.message
    });
  }
});

app.get('/api/testimonials', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonials',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 MiB Tech Solutions API Server running on http://localhost:${PORT}`);
});
