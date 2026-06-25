import { isValidEmail, notifyViaMailgun, storeLeadInFirestore } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    let email: string | undefined;
    let phone: string | undefined;

    const contentType = request.headers.get("content-type") ?? "";

    if (contentType.includes("application/json")) {
      const body = (await request.json()) as { email?: string; phone?: string };
      email = body.email?.trim();
      phone = body.phone?.trim();
    } else {
      const formData = await request.formData();
      email = String(formData.get("email") ?? "").trim();
      phone = String(formData.get("phone") ?? "").trim() || undefined;
    }

    if (!email || !isValidEmail(email)) {
      return Response.json(
        { success: false, error: "Adresse email invalide." },
        { status: 400 },
      );
    }

    const lead = { email, phone: phone || undefined };

    const storedInFirestore = await storeLeadInFirestore(lead);
    const notifiedViaMailgun = await notifyViaMailgun(lead);

    if (!storedInFirestore && !notifiedViaMailgun) {
      console.info("[RDV Lead]", lead);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return Response.json(
      { success: false, error: "Erreur serveur. Réessayez plus tard." },
      { status: 500 },
    );
  }
}
