This is the Ink Founders Next.js website.

## Getting Started

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## SMTP Setup

All site contact forms submit through `src/app/api/submit/route.ts`, including the forms rendered from:

- `src/app/contactus/page.tsx`
- `src/app/Home/GetInTouch.tsx`

To configure SMTP:

1. Copy `.env.example` to `.env`.
2. Set the real mailbox password in `SMTP_PASS`.
3. Keep these SMTP values from your hosting panel:

```env
SMTP_HOST=business905.web-hosting.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=support@nexifire.com.au
SMTP_FROM=support@nexifire.com.au
SMTP_TO=support@nexifire.com.au
```

Notes:

- `SMTP_PASS` must be the password for `support@nexifire.com.au`.
- Port `465` uses SSL/TLS, so `SMTP_SECURE=true` is correct.
- The shared `GetInTouch` component now sends the current page path with each submission, so emails show where the lead came from.
- If `DATABASE_URL` is configured, submissions are also saved with Prisma in the `Submission` table.

## Build

```bash
npm run build
```
