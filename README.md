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
