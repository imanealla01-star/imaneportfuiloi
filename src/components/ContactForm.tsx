"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Nom complet
        </label>
        <input
          type="text"
          id="contact-name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all duration-300 outline-none"
          placeholder="Votre nom"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Adresse e-mail
        </label>
        <input
          type="email"
          id="contact-email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all duration-300 outline-none"
          placeholder="votre@email.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Sujet
        </label>
        <input
          type="text"
          id="contact-subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all duration-300 outline-none"
          placeholder="Objet de votre message"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all duration-300 outline-none resize-none"
          placeholder="Décrivez votre demande ou projet..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        id="contact-submit"
        className="w-full py-4 rounded-2xl text-white font-semibold gradient-cta shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </>
        )}
      </button>

      {/* Success message */}
      {status === "success" && (
        <div className="p-4 rounded-xl bg-mint-50 border border-mint text-deep-ocean text-sm font-medium flex items-center gap-2">
          <svg
            className="w-5 h-5 text-ocean"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Votre message a été envoyé avec succès. Je vous répondrai dans les
          plus brefs délais.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
          Une erreur est survenue. Veuillez réessayer ou me contacter
          directement par email.
        </div>
      )}
    </form>
  );
}
