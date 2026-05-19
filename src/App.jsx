import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [showFullGallery, setShowFullGallery] = useState(false);

  const services = [
    { 
      title: "Wedding & Reception", 
      desc: "Grand marigold setups, traditional drapes, and royal entries.", 
      bgImage: "/stage4.webp" 
    },
    { 
      title: "Engagement & Vidhi", 
      desc: "Elegant mandaps for vidhi, haldi, and mehendi ceremomies.", 
      bgImage: "/dec1.webp" 
    },
    { 
      title: "Baby Shower", 
      desc: "Fun, vibrant, and colorful themes custom-made for all ages.", 
      bgImage: "/baby1.png" 
    },
    { 
      title: "Puja & Festive", 
      desc: "Devotional decorations for Diwali, Navratri, and home pujas.", 
      bgImage: "/puja.webp" 
    }
  ];

  const galleryImages = [
    "/img12.webp", 
    "/img6.webp",
    "/baby1.png", 
    "/img3.jpg", 
    "/img2.jpg",
    "/img9.jpg",
    "img13.webp",
    "img1.jpg"
  ];

  const displayedImages = showFullGallery ? galleryImages : galleryImages.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF5] to-[#F0EBE1] text-stone-800 font-sans overflow-x-hidden">
      
      {/* Header/Nav */}
      <nav className="bg-[#FFFDF5]/90 backdrop-blur-md border-b border-stone-200 py-3 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <a href="#">
            <img 
              src="/logo.png" 
              alt="Bahuchar Mandap Service Logo" 
              className="h-20 md:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-[#361313] text-white py-12 px-6 text-center bg-cover bg-center border-b-4 border-[#F79F1F]" style={{ backgroundImage: "linear-gradient(rgba(54,19,19,0.85), rgba(54,19,19,0.85)), url('https://images.unsplash.com/photo-1620391306354-913ac69b82b9?q=80&w=1200&auto=format&fit=crop')" }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold mb-3 tracking-wide text-[#F79F1F]">
            Premium Event Styling & Decor
          </h1>
          <p className="text-sm md:text-base font-light mb-6 text-amber-50">
            Crafting beautiful stages, mandaps,royal enteries and unforgettable memories in Ahmedabad.
          </p>
          <a href="#contact" className="inline-block bg-[#F79F1F] hover:bg-[#E08A12] text-stone-950 font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md text-sm">
            Book Your Event
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 md:mb-16 relative text-stone-900 after:content-[''] after:block after:w-16 md:after:w-20 after:h-1.5 after:bg-[#F79F1F] after:mx-auto after:mt-4 md:after:mt-5">
          What We Do
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-xl aspect-[4/5] cursor-pointer">
              
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                style={{ backgroundImage: `url('${service.bgImage}')` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-6 text-left">
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 font-serif text-[#F79F1F] drop-shadow-lg leading-tight">
                  {service.title}
                </h3>
                <p className="text-stone-200 text-xs md:text-sm leading-snug drop-shadow-md line-clamp-2 md:line-clamp-none">
                  {service.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-stone-900 px-4 md:px-6 border-y border-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 md:mb-16 relative text-amber-50 after:content-[''] after:block after:w-16 md:after:w-20 after:h-1.5 after:bg-[#F79F1F] after:mx-auto after:mt-4 md:after:mt-5">
            Our Work Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {displayedImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg bg-stone-800 group aspect-[4/5] border-2 border-stone-700 hover:border-[#F79F1F] transition-colors duration-300">
                <img 
                  src={src} 
                  alt={`Bahuchar Mandap Service Work ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
                />
              </div>
            ))}
          </div>

          {galleryImages.length > 4 && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowFullGallery(!showFullGallery)}
                className="bg-transparent border-2 border-[#F79F1F] text-[#F79F1F] hover:bg-[#F79F1F] hover:text-[#1A0909] font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md"
              >
                {showFullGallery ? "Show Less" : "See More Work"}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 md:px-6 relative bg-gradient-to-b from-stone-900 to-[#1A0909] border-t border-stone-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#F79F1F] to-transparent opacity-70"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#2A0E0E] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#F79F1F]/20 relative">
            
            <div className="p-8 md:p-12 flex-1 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F79F1F 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
               
               <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#F79F1F] leading-tight">
                    Let's Plan Your <br/>Perfect Event
                  </h2>
                  <p className="text-amber-50/70 text-base mb-8 max-w-sm font-light leading-relaxed">
                    Reach out to us for customized mandaps, grand reception stages, corporate events and beautiful festive decor. 
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/917777987717?text=Hi%20Bahuchar%20Mandap%20Service!%20I%20want%20to%20inquire%20about%20decorations." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:-translate-y-1 text-sm md:text-base">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M12.031 21c-1.618 0-3.197-.433-4.582-1.254l-5.076 1.332 1.358-4.95A9.878 9.878 0 012.392 12c0-5.46 4.444-9.904 9.904-9.904S22.2 6.54 22.2 12s-4.444 9.9-9.904 9.9c-.088 0-.176-.002-.265-.005zm0-18.005c-4.468 0-8.1 3.631-8.1 8.1 0 1.776.574 3.447 1.621 4.821l-.813 2.96 3.033-.795A8.04 8.04 0 0012.03 19.2c4.467 0 8.1-3.632 8.1-8.1 0-4.468-3.633-8.1-8.1-8.1z" clipRule="evenodd" /></svg>
                      Chat on WhatsApp
                    </a>
                    
                    <a href="tel:+917777987717" className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#F79F1F] text-[#F79F1F] hover:bg-[#F79F1F] hover:text-[#2A0E0E] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 text-sm md:text-base">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                      Call Now
                    </a>
                  </div>
               </div>
            </div>

            <div className="bg-[#1F0A0A] p-8 md:p-12 md:w-2/5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#F79F1F]/20 relative">
               <div className="mb-8">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="text-[#F79F1F] text-lg">❁</span>
                   <h4 className="text-[#F79F1F] text-xs uppercase tracking-[0.15em] font-semibold">Location</h4>
                 </div>
                 <p className="text-amber-50/90 font-serif text-lg leading-snug pl-6">Naroda, <br/>Ahmedabad, Gujarat 382330</p>
               </div>
               
               <div>
                 <div className="flex items-center gap-2 mb-3">
                   <span className="text-[#F79F1F] text-lg">❁</span>
                   <h4 className="text-[#F79F1F] text-xs uppercase tracking-[0.15em] font-semibold">Follow Our Work</h4>
                 </div>
                 <a href="https://instagram.com/bahuchar_mandap_service" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-amber-50/90 font-serif text-lg leading-snug pl-6 hover:text-[#F79F1F] transition-colors group">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-[#F79F1F] group-hover:scale-110 transition-transform"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                   @bahuchar_mandap_service
                 </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A0909] text-amber-50/80 py-12 text-center border-t-[6px] border-[#F79F1F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F79F1F 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-[#F79F1F] font-serif text-2xl font-bold mb-2 tracking-wide">Bahuchar Mandap Service</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-amber-200/60">Premium Event Styling</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#F79F1F]/50"></div>
            <span className="text-[#F79F1F] text-lg">❁</span>
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#F79F1F]/50"></div>
          </div>

          <div className="flex justify-center gap-6 sm:gap-10 mb-10">
            <a href="https://instagram.com/bahuchar_mandap_service" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#361313] border border-[#F79F1F]/30 flex items-center justify-center group-hover:bg-[#F79F1F] group-hover:text-[#1A0909] transition-colors duration-300 shadow-lg">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </div>
              <span className="text-xs font-medium text-amber-100/70 group-hover:text-[#F79F1F] transition-colors">Instagram</span>
            </a>

            <a href="https://wa.me/917777987717" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#361313] border border-[#F79F1F]/30 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300 shadow-lg">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path fillRule="evenodd" d="M12.031 21c-1.618 0-3.197-.433-4.582-1.254l-5.076 1.332 1.358-4.95A9.878 9.878 0 012.392 12c0-5.46 4.444-9.904 9.904-9.904S22.2 6.54 22.2 12s-4.444 9.9-9.904 9.9c-.088 0-.176-.002-.265-.005zm0-18.005c-4.468 0-8.1 3.631-8.1 8.1 0 1.776.574 3.447 1.621 4.821l-.813 2.96 3.033-.795A8.04 8.04 0 0012.03 19.2c4.467 0 8.1-3.632 8.1-8.1 0-4.468-3.633-8.1-8.1-8.1zm4.49 11.233c-.246-.123-1.457-.719-1.683-.801-.225-.082-.389-.123-.553.123-.164.246-.635.801-.778.965-.143.164-.287.184-.533.061-2.128-1.066-3.328-1.921-4.225-3.486-.143-.246.072-.236.315-.722.082-.164.123-.287.041-.533-.041-.246-.553-1.334-.758-1.826-.2-.482-.403-.416-.553-.423h-.471c-.205 0-.533.082-.82.389-.287.307-1.086 1.066-1.086 2.597 0 1.53 1.111 3.011 1.266 3.216.154.205 2.193 3.348 5.313 4.697 1.956.843 2.766.757 3.277.635.594-.142 1.457-.595 1.662-1.168.205-.574.205-1.066.143-1.168-.061-.102-.225-.164-.471-.287z" clipRule="evenodd" /></svg>
              </div>
              <span className="text-xs font-medium text-amber-100/70 group-hover:text-[#25D366] transition-colors">WhatsApp</span>
            </a>

            <a href="tel:+917777987717" className="group flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#361313] border border-[#F79F1F]/30 flex items-center justify-center group-hover:bg-[#F79F1F] group-hover:text-[#1A0909] transition-colors duration-300 shadow-lg">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <span className="text-xs font-medium text-amber-100/70 group-hover:text-[#F79F1F] transition-colors">Call Us</span>
            </a>
          </div>

          <div className="pt-6 border-t border-stone-800">
            <p className="text-xs text-amber-50/40">© {new Date().getFullYear()} Bahuchar Mandap Service. All Rights Reserved.</p>
            <p className="text-xs text-amber-50/30 mt-1 italic">Crafted with care in Ahmedabad.</p>
          </div>
        </div>
      </footer>
<Analytics />
    </div>
  );
}