# Aurora Program Solutions

Marketing website for **Aurora Program Solutions** — environmental program
coordination, reporting, and systems support for Indigenous communities, Tribal
Councils, and environmental organizations across Canada.

## Tech stack

- **React** + **Vite** — component-based UI and fast builds
- **SCSS** — styling with shared variables and mixins
- **Framer Motion** — scroll reveals, loader, and transitions
- **Lenis** — smooth scrolling
- **Nodemailer** — contact form delivery via a Vercel serverless function
- **Vercel** — hosting and serverless API

## Local development

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

> The contact form posts to `/api/contact`, a Vercel serverless function. Plain
> `npm run dev` does not run that function — use `vercel dev` (with a local
> `.env.local`) to test the form end to end, or test it on a Vercel deployment.

## Contact form configuration

The form sends email through Google Workspace SMTP. Set these environment
variables locally (`.env.local`) and in Vercel → Settings → Environment
Variables (see [`.env.example`](.env.example)):

| Variable     | Purpose                                               |
| ------------ | ----------------------------------------------------- |
| `SMTP_USER`  | The Google Workspace mailbox that sends the mail      |
| `SMTP_PASS`  | A Google **App Password** (not the account password)  |
| `CONTACT_TO` | Where inquiries are delivered (defaults to `SMTP_USER`) |

## Project structure

```
api/            Vercel serverless functions (contact form)
public/         Static assets (favicon, share image, photos, video)
src/
  components/   Page sections (Hero, Services, Contact, …)
  styles/       Global styles and SCSS abstracts
  lib/          Shared helpers (animation variants)
```

## License

© 2026 Aflo Studios. All rights reserved. Published for portfolio and
reference only — see [`LICENSE`](LICENSE). Not licensed for reuse.
