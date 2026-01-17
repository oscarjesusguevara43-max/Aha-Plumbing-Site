import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-bold font-heading flex items-center gap-2"
        >
           <span className={`${isScrolled ? "text-primary" : "text-white"} transition-colors`}>
             Aha Plumbing & Heating
           </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full"
            asChild
          >
            <a href="tel:6047800790" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (604) 780-0790
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-foreground font-medium py-2 border-b border-gray-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
            <a href="tel:6047800790">Call Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
