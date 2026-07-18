import { createHmac, timingSafeEqual } from "crypto";

// Dedicated secret preferred; RESEND_API_KEY fallback keeps existing deploys working.
const SECRET = process.env.UNSUBSCRIBE_SECRET || process.env.RESEND_API_KEY || "";

export function signUnsubscribeToken(email: string): string {
  return createHmac("sha256", SECRET)
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 32);
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  if (!SECRET || !token) return false;
  const expected = Buffer.from(signUnsubscribeToken(email));
  const provided = Buffer.from(token);
  return expected.length === provided.length && timingSafeEqual(expected, provided);
}

export function buildUnsubscribeUrl(email: string): string {
  return `https://thefalse.net/unsubscribe?email=${encodeURIComponent(
    email
  )}&token=${signUnsubscribeToken(email)}`;
}
