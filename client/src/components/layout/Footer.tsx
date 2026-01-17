import { Facebook, Instagram, Phone, Mail, CreditCard } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">Aha Plumbing & Heating</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Fast, clean, and guaranteed plumbing and heating solutions. 24/7 service in Surrey and surrounding areas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" onClick={scrollToTop} className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-blue-100">Leak Repair</li>
              <li className="text-blue-100">Water Heaters</li>
              <li className="text-blue-100">Drain Cleaning</li>
              <li className="text-blue-100">Heating Systems</li>
              <li className="text-blue-100">24/7 Emergencies</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-bold">Call Us 24/7</p>
                  <a href="tel:6047800790" className="text-blue-100 hover:text-white">(604) 780-0790</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:info@ahaplumbing.ca" className="text-blue-100 hover:text-white">info@ahaplumbing.ca</a>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <p className="text-sm font-bold mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Accepted Payments
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="text-[10px] border border-white/20 px-2 py-0.5 rounded">Visa</span>
                 <span className="text-[10px] border border-white/20 px-2 py-0.5 rounded">MC</span>
                 <span className="text-[10px] border border-white/20 px-2 py-0.5 rounded">Interac</span>
                 <span className="text-[10px] border border-white/20 px-2 py-0.5 rounded">Cash</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Aha Plumbing & Heating Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
