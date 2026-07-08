"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Sending...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/abhijeetacharya02@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New message from ${formData.name} via Portfolio`, // Custom subject for FormSubmit
        }),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully! 🎉 (Note: First time users may need to click an activation link sent to your email)");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("Failed to send message. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus("Failed to send message. Please check your connection.");
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "abhijeetacharya02@gmail.com",
      link: "mailto:abhijeetacharya02@gmail.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 79992 73675",
      link: "tel:+917999273675"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Jabalpur, Madhya Pradesh, India",
      link: "#"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/abhijeet-acharya",
      link: "https://linkedin.com/in/abhijeet-acharya"
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss AI engineering opportunities? I'd love to hear from you.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/30">
              <h3 className="text-2xl font-bold text-[#ffe6c7] mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#001a28] border border-[#3a86ff]/10 hover:border-[#3a86ff]/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{info.label}</p>
                      <p className="text-[#ffe6c7] font-medium group-hover:text-[#3a86ff] transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 rounded-2xl border border-[#3a86ff]/30">
              <h4 className="text-lg font-bold text-[#ffe6c7] mb-4">Find Me Online</h4>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", href: "https://github.com/Abhijeet-Zone", icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/> },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhijeet-acharya-89756b358/", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#001a28] border border-[#3a86ff]/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#3a86ff] hover:border-[#3a86ff]/60 hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/30">
            <h3 className="text-2xl font-bold text-[#ffe6c7] mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Abhijeet Acharya" },
                { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                { name: "subject", label: "Subject", type: "text", placeholder: "Project Collaboration / Opportunity" },
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-[#001a28] border border-[#3a86ff]/20 rounded-xl px-4 py-3 text-[#ffe6c7] placeholder-gray-600 focus:outline-none focus:border-[#3a86ff]/60 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Abhijeet, I'd like to discuss..."
                  required
                  rows={5}
                  className="w-full bg-[#001a28] border border-[#3a86ff]/20 rounded-xl px-4 py-3 text-[#ffe6c7] placeholder-gray-600 focus:outline-none focus:border-[#3a86ff]/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/30 transition-all duration-300"
              >
                Send Message ✈️
              </button>
              {formStatus && (
                <p className={`text-center text-sm font-medium ${formStatus.includes('successfully') ? 'text-[#06ffa5]' : 'text-red-400'}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
