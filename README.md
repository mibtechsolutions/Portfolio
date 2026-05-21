# MiB Tech Solutions - Portfolio

A premium enterprise-level multi-page website for MiB Tech Solutions, featuring a futuristic AI/automation aesthetic with beautiful animations.

## Features

- 🏢 **Home Page**: Hero section, stats, services, process, testimonials, CTA
- 📖 **About Page**: Company story, mission/vision, team, expertise
- 🛠️ **Services Page**: Comprehensive services list, technical advantages, FAQ
- 📁 **Portfolio Page**: Case studies, project filtering, client success stories
- 📞 **Contact Page**: Contact form, WhatsApp CTA, meeting scheduler, FAQ

## Tech Stack

- React + Vite + JavaScript (JSX)
- Tailwind CSS
- Framer Motion (animations)
- GSAP
- Lenis (smooth scrolling)
- Lucide React (icons)

## Development

```bash
cd client
npm install
npm run dev
```

## Production Build

```bash
cd client
npm run build
```

## Deployment

### Frontend (Netlify)
- Deployed to: https://mibtechsolutions.netlify.app
- Build command: `cd client && npm run build`
- Publish directory: `client/dist`

### Backend (Render)
- Deployed to: https://mib-tech-backend.onrender.com
- Environment variables configured in Render dashboard

## Pages

1. `/` - Home
2. `/about` - About Us
3. `/services` - Services
4. `/portfolio` - Portfolio
5. `/contact` - Contact
6. `/case-study/:id` - Case Study Details
