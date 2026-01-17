import { Phone, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/professional_plumber_working_in_a_clean_modern_bathroom.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional Plumber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-white pt-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Clock className="w-4 h-4" /> Servicio de Emergencia 24/7
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Soluciones Rápidas y Confiables en <span className="text-blue-200">Plomería y Calefacción</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            ¿Problemas de plomería o calefacción? En Aha Plumbing & Heating Ltd. ofrecemos soluciones rápidas, limpias y garantizadas en Surrey y alrededores.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-accent/20" asChild>
              <a href="tel:6047800790" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Solicitar Servicio 24/7
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg h-14 px-8 rounded-full backdrop-blur-sm" asChild>
              <a href="#services">Ver Servicios</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-gray-200 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              15+ Años de Experiencia
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              Empresa Familiar
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              100% Garantizado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
