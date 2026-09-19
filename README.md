# Nexa Digital Agency

Nexa Digital Agency is a fictional digital agency website created as a frontend portfolio demonstration. It showcases a responsive multi-page interface for web development, software solutions, mobile experiences and digital services without representing a real operating agency.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- Nodemailer
- Zod

## What this project demonstrates

- Responsive layouts and navigation
- Accessible, reusable interface components
- Motion and interaction design
- Service, gallery, contact and demo careers experiences
- A server-side contact workflow using Gmail SMTP
- Server-side validation, HTML escaping and honeypot protection

No database is used, and submitted enquiries are not stored by the application.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Contact email configuration

Copy `.env.example` to `.env.local` and configure an independent portfolio Gmail account:

```bash
SMTP_USER=your-portfolio-account@gmail.com
SMTP_APP_PASSWORD=your-google-app-password
CONTACT_EMAIL=your-portfolio-inbox@example.com
```

Use a Google App Password for `SMTP_APP_PASSWORD`. These variables are server-only and must never use a `NEXT_PUBLIC_` prefix. Real credentials are not committed.

## Deployment notes

Before publishing, configure the three email variables in the independent hosting project. A production domain has not been assigned, so canonical URLs, a sitemap URL, and social preview artwork should be added only after the final deployment URL and approved brand assets are available.
