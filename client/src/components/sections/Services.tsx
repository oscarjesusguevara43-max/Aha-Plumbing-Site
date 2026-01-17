import { Wrench, Flame, Droplets, Clock, ShieldCheck, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import leakImage from "@assets/stock_images/plumbing_emergency_l_440bd515.jpg";
import heaterImage from "@assets/stock_images/water_heater_install_e1559d35.jpg";
import heatingImage from "@assets/stock_images/hvac_heating_system__e8090d9a.jpg";

export default function Services() {
  const services = [
    {
      title: "Reparación de Fugas",
      description: "Detección y reparación rápida de fugas de agua para evitar daños mayores en su hogar.",
      icon: Droplets,
      image: leakImage,
    },
    {
      title: "Calentadores de Agua",
      description: "Instalación, reparación y mantenimiento de calentadores de agua tradicionales y sin tanque.",
      icon: Flame,
      image: heaterImage,
    },
    {
      title: "Sistemas de Calefacción",
      description: "Servicio experto para calderas y sistemas de calefacción central para mantener su hogar cálido.",
      icon: Wrench,
      image: heatingImage,
    },
    {
      title: "Emergencias 24/7",
      description: "Disponibles a cualquier hora, cualquier día. Cuando ocurre un desastre, estamos aquí.",
      icon: Clock,
      image: null, // Style differently
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Revisiones periódicas para asegurar que sus sistemas funcionen eficientemente todo el año.",
      icon: ShieldCheck,
      image: null,
    },
    {
      title: "Instalaciones Generales",
      description: "Desde grifos hasta inodoros y tuberías nuevas, nos encargamos de todas sus instalaciones.",
      icon: PenTool,
      image: null,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
            Soluciones Integrales para su Hogar
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios de plomería y calefacción, respaldados por nuestra experiencia y compromiso con la calidad.
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
