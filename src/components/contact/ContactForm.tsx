"use client";

import { useState } from "react";
import { PaperPlaneRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xrewnrkj";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-gold-line bg-ink-2 p-8">
        <CheckCircle size={40} weight="fill" className="text-gold" />
        <h3 className="font-display text-2xl text-ivory">Message on its way.</h3>
        <p className="text-muted">
          Thanks for reaching out. I’ll get back to you within a day or two.
          For anything urgent, email{" "}
          <a href={`mailto:${profile.email}`} className="text-gold underline-offset-4 hover:underline">
            {profile.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="input"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@brand.com"
            className="input"
          />
        </Field>
      </div>

      <Field label="Project type" htmlFor="project" optional>
        <input
          id="project"
          name="project"
          type="text"
          placeholder="Social campaign, brand launch, packaging…"
          className="input"
        />
      </Field>

      <Field label="Tell me about it" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A few lines on the brand, goals, and timeline."
          className="input resize-none"
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm text-[#f0a3a3]">
          Something went wrong sending your message. Please email{" "}
          <a href={`mailto:${profile.email}`} className="underline">
            {profile.email}
          </a>{" "}
          instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:bg-gold-strong hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <PaperPlaneRight
          size={16}
          weight="fill"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium text-ivory">
        {label}
        {optional && <span className="text-xs text-faint">(optional)</span>}
      </span>
      {children}
    </label>
  );
}
