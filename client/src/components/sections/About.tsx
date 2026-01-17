import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="bg-primary text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-6xl font-heading font-bold mb-2">15+</h3>
                  <p className="text-xl font-medium opacity-90 mb-8">Years of Experience</p>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed italic">
                      "We are a family business with over 15 years of experience in plumbing and heating. Our commitment is to provide honest, professional, and punctual service to every customer."
                    </p>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">
              Your Trusted Plumbing Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Aha Plumbing & Heating, we understand that plumbing issues can be stressful. That's why we're dedicated to offering a service that not only fixes the problem but also gives you peace of mind.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Local and family owned",
                "Licensed and Certified",
                "Clean and respectful service",
                "Transparent pricing",
                "Immediate availability"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="#contact" onClick={scrollToContact}>Contact Us Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
