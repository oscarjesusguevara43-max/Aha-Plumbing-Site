import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Laura M.",
      location: "Surrey, BC",
      text: "Llamé por una fuga de agua y llegaron en menos de 30 minutos. Muy profesionales y amables. ¡Recomendados 100%!",
      rating: 5,
    },
    {
      name: "Carlos R.",
      location: "Langley, BC",
      text: "Excelente servicio. Instalaron mi nuevo calentador de agua rápidamente y dejaron todo impecable. El precio fue muy justo.",
      rating: 5,
    },
    {
      name: "Sarah J.",
      location: "Delta, BC",
      text: "Tuve una emergencia con la calefacción en pleno invierno y Aha Plumbing me salvó. Llegaron tarde en la noche y lo arreglaron todo.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-foreground/80 font-bold tracking-wider uppercase text-sm">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-blue-100 text-lg">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={index} className="bg-white/10 border-white/10 text-white backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed opacity-90">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-blue-200">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
