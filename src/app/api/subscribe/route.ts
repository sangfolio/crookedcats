import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EO_BASE = "https://api.emailoctopus.com";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const rawEmail = (body as { email?: unknown })?.email;
  if (typeof rawEmail !== "string" || !EMAIL_REGEX.test(rawEmail.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }
  const email = rawEmail.trim().toLowerCase();

  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;
  if (!apiKey || !listId) {
    console.warn(
      "[subscribe] EmailOctopus not configured — email accepted but NOT persisted:",
      email,
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(`${EO_BASE}/lists/${listId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    const data = await res.json().catch(() => null);
    // Already subscribed — treat as success, don't make them feel bad.
    if (res.status === 409 || data?.error?.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      return NextResponse.json({ ok: true });
    }

    console.error("[subscribe] EmailOctopus error", res.status, data);
    return NextResponse.json(
      { error: "We couldn't subscribe you right now. Please try again later." },
      { status: 502 },
    );
  } catch (err) {
    console.error("[subscribe] Unexpected error", err);
    return NextResponse.json(
      { error: "We couldn't subscribe you right now. Please try again later." },
      { status: 502 },
    );
  }
}
