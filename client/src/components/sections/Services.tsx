import { Wrench, Flame, Droplets, Clock, ShieldCheck, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import leakImage from "@assets/stock_images/plumbing_emergency_l_440bd515.jpg";
import heaterImage from "@assets/stock_images/water_heater_install_e1559d35.jpg";
import heatingImage from "@assets/stock_images/hvac_heating_system__e8090d9a.jpg";

export default function Services() {
  const services = [
    {
      title: "Leak Repair",
      description: "Fast detection and repair of water leaks to prevent major damage to your home.",
      icon: Droplets,
      image: leakImage,
    },
    {
      title: "Water Heaters",
      description: "Installation, repair, and maintenance of traditional and tankless water heaters.",
      icon: Flame,
      image: heaterImage,
    },
    {
      title: "Heating Systems",
      description: "Expert service for boilers and central heating systems to keep your home warm.",
      icon: Wrench,
      image: heatingImage,
    },
    {
      title: "24/7 Emergencies",
      description: "Available any time, any day. When disaster strikes, we are here for you.",
      icon: Clock,
      image: null,
    },
    {
      title: "Preventive Maintenance",
      description: "Periodic checkups to ensure your systems run efficiently all year round.",
      icon: ShieldCheck,
      image: null,
    },
    {
      title: "General Installations",
      description: "From faucets to toilets and new piping, we handle all your installations.",
      icon: PenTool,
      image: null,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
            Comprehensive Solutions for Your Home
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of plumbing and heating services, backed by our experience and commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full flex flex-col">
              {service.image && (
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <CardHeader className={`${service.image ? 'pt-6' : 'pt-8'}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
