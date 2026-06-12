import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  // Vercel parses JSON bodies automatically; guard in case it doesn't.
  const body =
    typeof req.body === "string" ? safeParse(req.body) : req.body || {};

  const {
    name = "",
    email = "",
    organization = "",
    interest = "",
    message = "",
    company = "", // honeypot — must stay empty
  } = body;

  // Bot trap: real users never fill this hidden field.
  if (company) return res.status(200).json({ ok: true });

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanMessage = String(message).trim();

  if (cleanName.length < 2)
    return res.status(400).json({ ok: false, error: "Please enter your name." });
  if (!EMAIL_RE.test(cleanEmail))
    return res.status(400).json({ ok: false, error: "Please enter a valid email." });
  if (cleanMessage.length < 10)
    return res.status(400).json({ ok: false, error: "Please add a little more detail." });

  const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Missing SMTP_USER / SMTP_PASS environment variables.");
    return res
      .status(500)
      .json({ ok: false, error: "Email is not configured. Please email us directly." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = CONTACT_TO || SMTP_USER;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#1a1a1a;line-height:1.6">
      <h2 style="margin:0 0 16px">New inquiry — Aurora Program Solutions</h2>
      <p><strong>Name:</strong> ${esc(cleanName)}</p>
      <p><strong>Email:</strong> ${esc(cleanEmail)}</p>
      ${organization ? `<p><strong>Organization:</strong> ${esc(organization)}</p>` : ""}
      ${interest ? `<p><strong>Area of interest:</strong> ${esc(interest)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;padding:12px 16px;background:#f4f4f2;border-radius:8px">${esc(
        cleanMessage
      )}</p>
    </div>`;

  const text =
    `New inquiry — Aurora Program Solutions\n\n` +
    `Name: ${cleanName}\n` +
    `Email: ${cleanEmail}\n` +
    (organization ? `Organization: ${organization}\n` : "") +
    (interest ? `Area of interest: ${interest}\n` : "") +
    `\nMessage:\n${cleanMessage}\n`;

  try {
    await transporter.sendMail({
      from: `"Aurora Program Solutions" <${SMTP_USER}>`,
      to,
      replyTo: `"${cleanName}" <${cleanEmail}>`,
      subject: `New inquiry — ${cleanName}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("sendMail failed:", err);
    return res
      .status(502)
      .json({ ok: false, error: "Could not send right now. Please email us directly." });
  }
}

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
