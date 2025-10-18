import React, { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll"; // remove if not using this

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const phoneNumber = "2349065644691"; // Use full international format
    const { name, email, message } = formData;

    const text = encodeURIComponent(
      `Hello Kingsley 👋,\n\nMy name is ${name}.\n📧 Email: ${email}\n📝 Message:\n${message}`
    );

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    // Works better on iPhone — direct redirect
    setTimeout(() => {
      window.location.href = url;
      setIsSending(false);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
              <div className="px-4 w-[600px] max-w-full">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-black/30"
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-black/30"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-black/30"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          >
            {isSending ? "Connecting to Whatsapp..." : "Send Message"}
          </button>
        </form>

        <footer className="mt-10 text-center text-white/60 text-sm">
          ©2025 Made and developed by Dada Kingsley.
        </footer>
      </div>
      </RevealOnScroll>
    </section>
  );
};
