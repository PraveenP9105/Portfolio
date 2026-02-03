import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        import.meta.env.VITE_CONTACT_API_URL,
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Leave a Message
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number (Optional)"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

          {status && <p className="text-sm text-gray-600">{status}</p>}

        </form>
      </div>
    </section>
  );
}