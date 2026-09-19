import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { DATA } from "../constants/data";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_gotcha") || "").trim()) return;
    for (const key of ["name", "email", "message"]) {
      const value = String(data.get(key) || "").trim();
      if (!value) {
        setError("Please fill in your name, email, and message.");
        setStatus("error");
        return;
      }
      data.set(key, value);
    }
    pending.current = true;
    setStatus("sending");
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(DATA.contactEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok === false || result?.errors?.length) {
        throw new Error(
          "The form service could not accept your message. Please try again or email me directly below.",
        );
      }
      form.reset();
      setStatus("success");
    } catch (failure) {
      setError(
        failure instanceof DOMException && failure.name === "AbortError"
          ? "The request timed out. Your message may have arrived; please check before sending it again, or email me directly."
          : failure instanceof Error &&
              failure.message.startsWith("The form service")
            ? failure.message
            : "We couldn’t confirm that your message was sent. Your text is still here; try again or email me directly.",
      );
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      pending.current = false;
    }
  }
  return (
    <div className="contact-form-layout">
      <div className="contact-form-intro">
        <h3>Start a conversation.</h3>
        <p>
          Have an opportunity, a project, or a question? Leave a message and an
          email address where I can reach you.
        </p>
        <p className="form-privacy">
          Your details are sent through Formspree so I can reply to your
          inquiry.
        </p>
      </div>
      <form
        className="contact-form"
        action={DATA.contactEndpoint}
        method="POST"
        onSubmit={submit}
        aria-busy={status === "sending"}
      >
        <input
          type="hidden"
          name="_subject"
          value="New inquiry from SRK portfolio"
        />
        <div className="form-trap" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              name="_gotcha"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <fieldset disabled={status === "sending"}>
          <div className="contact-fields">
            <label htmlFor="contact-name">
              Your name
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Name"
              />
            </label>
            <label htmlFor="contact-email">
              Email address
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label htmlFor="contact-message">
            Your message
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={5000}
              rows={5}
              placeholder="Tell me a little about what you have in mind…"
            />
          </label>
          <div className="form-submit-row">
            <span>No mailing lists. Just a conversation.</span>
            <button type="submit">
              {status === "sending" ? "Sending…" : "Send message"}
              <ArrowUpRight size={18} />
            </button>
          </div>
        </fieldset>
        <div
          className="form-status"
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status === "success" ? (
            <span className="form-success">
              <Check size={17} /> Thanks! Your message was submitted
              successfully.
            </span>
          ) : status === "error" ? (
            error
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
