require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const WebSocket = require('ws');
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: (...args) => fetch(...args),
  },
  realtime: {
    transport: WebSocket,
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
    
    console.log('📨 Processing contact form submission:', { name, email, phone, company });
    console.log('🔑 Environment Variables Check:');
    console.log('  - EMAIL_USER:', process.env.EMAIL_USER ? '✓ Set' : '✗ NOT SET');
    console.log('  - EMAIL_PASS:', process.env.EMAIL_PASS ? '✓ Set (length: ' + process.env.EMAIL_PASS.length + ')' : '✗ NOT SET');
    console.log('  - RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL ? '✓ Set' : '✗ NOT SET');
    
    let data = null;
    let emailSent = false;
    let emailError = null;
    
    try {
      console.log('💾 Trying to save to Supabase...');
      console.log('📊 Data to insert:', { name, email, phone, company, message });
      
      const insertData = {
        name,
        email,
        message,
        ...(phone && { phone }),
        ...(company && { company })
      };
      
      const supabaseResult = await supabase
        .from('contact_submissions')
        .insert([insertData])
        .select();

      if (supabaseResult.error) {
        console.error('❌ Supabase Error:', supabaseResult.error);
        console.error('   💡 Make sure your table has these columns:');
        console.error('      - id (UUID, primary key)');
        console.error('      - name (VARCHAR/TEXT)');
        console.error('      - email (VARCHAR/TEXT)');
        console.error('      - phone (VARCHAR/TEXT, optional)');
        console.error('      - company (VARCHAR/TEXT, optional)');
        console.error('      - message (TEXT)');
        console.error('      - created_at (TIMESTAMP)');
      } else {
        data = supabaseResult.data;
        console.log('✅ Saved to Supabase successfully:', data);
      }
    } catch (supabaseErr) {
      console.error('❌ Failed to save to Supabase:', supabaseErr);
    }
    
    try {
      console.log('📧 Trying to send email...');
      console.log('  - From:', process.env.EMAIL_USER);
      console.log('  - To:', process.env.RECIPIENT_EMAIL);
      
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

      console.log('📤 Sending email with nodemailer...');
      await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log('✅ Email sent successfully!');
    } catch (emailErr) {
      console.error('❌ Failed to send email:', emailErr);
      console.error('   Error details:', emailErr.message);
      if (emailErr.response) {
        console.error('   SMTP Response:', emailErr.response);
      }
      emailError = emailErr.message;
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data,
      details: {
        savedToSupabase: !!data,
        emailSent,
        emailError
      }
    });
  } catch (error) {
    console.error('❌ Error submitting contact form:', error);
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

app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project',
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
