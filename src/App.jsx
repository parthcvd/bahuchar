import React from 'react';
import { Analytics } from "@vercel/analytics/next"
export default function App() {
  // Sample data for services - Updated with Desi flavor
  const services = [
    { title: "Lagana & Reception Stages", desc: "Grand marigold setups, traditional drapes, and royal entries.", icon: "✨" },
    { title: "Engagement & Vidhi Decor", desc: "Elegant mandaps for vidhi, haldi, and mehendi ceremomies.", icon: "🏵️" },
    { title: "Birthday Bash", desc: "Fun, vibrant, and colorful themes custom-made for all ages.", icon: "🎈" },
    { title: "Puja & Festive Setup", desc: "Devotional decorations for Diwali, Navratri, Ganesh Chaturthi, and home pujas.", icon: "🪔" }
  ];

  // Placeholder images - The instructions below will tell you how to replace these
  const galleryImages = [
    "https://images.unsplash.com/photo-1603228221199-5f212f45f949?q=80&w=600&auto=format&fit=crop", // Teal Mandap
    "dec1.webp", // Red Stage
    "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=600&q=80", // Puja
    "https://images.unsplash.com/photo-1617415497279-994c50257e33?q=80&w=600&auto=format&fit=crop", // Marigold
    "https://plus.unsplash.com/premium_photo-1682098254425-41dfa9296561?q=80&w=600&auto=format&fit=crop", // Entryway
    "https://plus.unsplash.com/premium_photo-1673322079237-79a0225d57b5?q=80&w=600&auto=format&fit=crop"  // Table decor
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-stone-800 font-sans">
      
      {/* Header/Nav (Simple Logo) */}
      {/* Header/Nav (Updated with Custom Logo) */}
      {/* Header/Nav (Slightly larger logo) */}
      <nav className="bg-[#FFFDF5] border-b border-stone-200 py-3 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <a href="#">
            <img 
              src="/logo.png" 
              alt="Bahuchar Decoration Logo" 
              className="h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </nav>

      {/* Hero Section - Much smaller, cleaner, and more professional */}
      <header className="relative bg-[#361313] text-white py-12 px-6 text-center bg-cover bg-center border-b-4 border-[#F79F1F]" style={{ backgroundImage: "linear-gradient(rgba(54,19,19,0.85), rgba(54,19,19,0.85)), url('https://images.unsplash.com/photo-1620391306354-913ac69b82b9?q=80&w=1200&auto=format&fit=crop')" }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold mb-3 tracking-wide text-[#F79F1F]">
            Premium Event Styling & Decor
          </h1>
          <p className="text-sm md:text-base font-light mb-6 text-amber-50">
            Crafting beautiful stages, mandaps, and unforgettable memories in Ahmedabad.
          </p>
          <a href="#contact" className="inline-block bg-[#F79F1F] hover:bg-[#E08A12] text-stone-950 font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md text-sm">
            Book Your Event
          </a>
        </div>
      </header>
      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 relative text-stone-900 after:content-[''] after:block after:w-20 after:h-1.5 after:bg-[#F79F1F] after:mx-auto after:mt-5">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center">
              <div className="text-5xl mb-6 bg-amber-50 rounded-full p-4 border border-amber-100">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 font-serif text-[#A62639]">{service.title}</h3>
              <p className="text-stone-600 text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-stone-100/70 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 relative text-stone-900 after:content-[''] after:block after:w-20 after:h-1.5 after:bg-[#F79F1F] after:mx-auto after:mt-5">Our Work Gallery</h2>
          <p className="text-center text-stone-600 mb-12 max-w-md mx-auto -mt-10">Real photos from our recent wedding stages, mandaps, and events in Ahmedabad.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md bg-white group aspect-[4/5] border-4 border-white">
                <img 
                  src={src} 
                  alt={`Bahuchar Decoration Work ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-5 text-[#A62639]">Book Bahuchar Decoration</h2>
        <p className="text-stone-700 text-lg mb-10 max-w-lg mx-auto">Share your event details. For the quickest response, chat with us directly on WhatsApp.</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          {/* WhatsApp Button (Updated Number) */}
          <a 
            href="https://wa.me/919999999999?text=Hi%20Bahuchar%20Decoration!%20I%20saw%20your%20website%20and%20want%20to%20inquire%20about%20decorations%20for%20my%20event." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-3 text-lg"
          >
            💬 Chat on WhatsApp
          </a>
          
          <a 
            href="tel:+919999999999" 
            className="w-full sm:w-auto bg-[#361313] hover:bg-[#260d0d] text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition text-lg"
          >
            📞 Call Now
          </a>
        </div>

        <div className="mt-16 text-stone-600 bg-white p-6 rounded-xl shadow-inner border border-stone-100 inline-block">
          <p className="font-semibold text-[#A62639]">Office Location</p>
          <p>Bapunagar, Ahmedabad, Gujarat</p>
          <p className="mt-3 font-semibold text-[#A62639]">Follow Us</p>
          <p>Instagram @bahuchar_decoration</p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#361313] text-amber-50 py-8 text-center text-sm border-t-2 border-[#A62639]">
        © {new Date().getFullYear()} Bahuchar Decoration. All Rights Reserved.<br />
        Designed with ❤️ in Ahmedabad.
      </footer>
    </div>
  );
}