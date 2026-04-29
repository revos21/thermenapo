export default async (req) => {
  try {
    const payload = await req.json();

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey || !toEmail) {
      return new Response(
        JSON.stringify({
          ok: true,
          skipped: true,
          reason: "Missing RESEND_API_KEY or CONTACT_TO_EMAIL",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = payload?.payload?.data || {};
    const formName = payload?.payload?.form_name || "contact";
    const name = data.name || "(kein Name)";
    const email = data.email || "(keine E-Mail)";
    const message = data.message || "(keine Nachricht)";

    const subject = `Neue Kontaktanfrage (${formName})`;
    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Formular:</strong> ${formName}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${String(message).replace(/\n/g, "<br>")}</p>
    `;

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        html,
        reply_to: data.email || undefined,
      }),
    });

    if (!resendResp.ok) {
      const errorBody = await resendResp.text();
      return new Response(
        JSON.stringify({ ok: false, error: errorBody }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: error?.message || "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
