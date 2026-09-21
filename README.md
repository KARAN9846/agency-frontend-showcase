# Agency Frontend Showcase

A modern digital agency website built as a frontend portfolio project.

The project demonstrates a complete responsive multi-page experience for a fictional digital agency offering web development, software solutions, mobile experiences, and digital services.

The agency identity used in this project is fictional and is intended only for portfolio presentation.

## Live Demo

https://agency-frontend-showcase.vercel.app

## Features

- Responsive multi-page website
- Modern landing page and service sections
- Reusable React components
- Responsive navigation and mobile menu
- Interactive animations and transitions
- Services showcase
- Gallery experience
- Contact page and enquiry form
- Demo careers interface
- Accessible UI structure
- Server-side contact email delivery
- Visitor confirmation emails
- Form validation and honeypot spam protection

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- Nodemailer
- Zod

## Contact Form Architecture

The project does not use a database.

Contact enquiries are handled through a small server-side Next.js API route:

```text
Contact Form
     ↓
Next.js API Route
     ↓
Zod Validation
     ↓
Nodemailer
     ↓
Gmail SMTP
     ↓
Portfolio Inbox
```

## Deployment Modes

The normal resume/GitHub deployment uses Gmail SMTP and keeps the complete
contact workflow enabled when `SMTP_USER`, `SMTP_APP_PASSWORD`, and
`CONTACT_EMAIL` are configured.

An Upwork-safe deployment can use the same repository and frontend experience
with demonstration-only contact behavior. Set both of these Vercel environment
variables to `true`:

```text
NEXT_PUBLIC_UPWORK_SHOWCASE=true
UPWORK_SHOWCASE=true
```

In this mode the form retains its fields, validation, and interaction states,
but email delivery and off-platform contact paths are disabled. The API also
enforces demo behavior independently whenever `UPWORK_SHOWCASE=true`, so it
does not load Nodemailer or require SMTP credentials.
