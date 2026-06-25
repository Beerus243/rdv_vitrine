export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export interface LeadPayload {
  email: string;
  phone?: string;
}

export async function notifyViaMailgun(lead: LeadPayload): Promise<boolean> {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const notifyTo = process.env.MAILGUN_NOTIFY_TO;

  if (!apiKey || !domain || !notifyTo) {
    return false;
  }

  const body = new URLSearchParams({
    from: `RDV Landing <noreply@${domain}>`,
    to: notifyTo,
    subject: "Nouvelle inscription liste d'attente RDV",
    text: [
      "Nouvelle inscription sur la landing page RDV :",
      "",
      `Email : ${lead.email}`,
      lead.phone ? `WhatsApp : ${lead.phone}` : "WhatsApp : (non renseigné)",
      "",
      `Date : ${new Date().toISOString()}`,
    ].join("\n"),
  });

  const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    console.error("Mailgun error:", await response.text());
    return false;
  }

  return true;
}

export async function storeLeadInFirestore(lead: LeadPayload): Promise<boolean> {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const apiKey = process.env.FIREBASE_API_KEY;

  if (!projectId || !apiKey) {
    return false;
  }

  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.FIREBASE_ACCESS_TOKEN
        ? { Authorization: `Bearer ${process.env.FIREBASE_ACCESS_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({
      fields: {
        email: { stringValue: lead.email },
        phone: { stringValue: lead.phone ?? "" },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
  });

  if (!response.ok) {
    console.error("Firestore error:", await response.text());
    return false;
  }

  return true;
}
