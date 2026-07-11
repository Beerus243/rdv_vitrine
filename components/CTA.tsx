"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";
import { getLeadApiEndpoint, landingConfig } from "@/lib/landing-config";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const { waitlist } = landingConfig;
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(getLeadApiEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone: phone || undefined }),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? waitlist.messages.error);
      }

      setStatus("success");
      setMessage(waitlist.messages.success);
      setEmail("");
      setPhone("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : waitlist.messages.error,
      );
    }
  }

  return (
    <section id={waitlist.sectionId} className="bg-brand section-block">
      <div className="section-container mx-auto max-w-xl text-center">
        <Reveal className="section-header">
          <h2 className="section-title-on-dark">{waitlist.title}</h2>
          <p className="mt-3 text-on-dark-muted">{waitlist.description}</p>
        </Reveal>

        <Reveal delay={100}>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 text-left sm:mt-8 sm:gap-4"
          noValidate
        >
          <div>
            <label htmlFor="email" className="sr-only">
              {waitlist.fields.email.label}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required={waitlist.fields.email.required}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={waitlist.fields.email.placeholder}
              className="input-field"
              disabled={status === "loading"}
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              {waitlist.fields.phone.label}
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required={waitlist.fields.phone.required}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={waitlist.fields.phone.placeholder}
              className="input-field"
              disabled={status === "loading"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-on-brand w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading"
              ? waitlist.button.loadingLabel
              : waitlist.button.label}
          </button>
        </form>
        </Reveal>

        {message && (
          <p
            role="status"
            className={`status-message mt-4 text-sm font-medium ${status === "error" ? "text-red-100" : "text-on-dark-muted"}`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
