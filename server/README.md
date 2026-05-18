# MiB Tech Solutions Backend API

Node.js backend server with Express and Supabase for MiB Tech Solutions portfolio.

## Tech Stack

- Node.js
- Express.js
- Supabase (Database)
- CORS
- dotenv

## Setup Instructions

### 1. Supabase Setup

1. Create a Supabase project at https://supabase.com
2. Copy your project URL and anon/public key
3. Run the SQL schema in `supabase-schema.sql` in your Supabase SQL Editor

### 2. Environment Variables

Create a `.env` file in the server directory:

```env
PORT=3001
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

## API Endpoints

### Health Check
- `GET /` - Welcome message
- `GET /api/health` - Health check

### Contact Form
- `POST /api/contact` - Submit contact form

### Projects
- `GET /api/projects` - Get all projects

### Testimonials
- `GET /api/testimonials` - Get all testimonials

## Database Tables

1. **contact_submissions** - Stores contact form submissions
2. **projects** - Stores portfolio projects
3. **testimonials** - Stores client testimonials
