import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Laura M.",
      location: "Surrey, BC",
      text: "I called about a water leak and they arrived in less than 30 minutes. Very professional and friendly. 100% recommended!",
      rating: 5,
    },
    {
      name: "Carlos R.",
      location: "Langley, BC",
      text: "Excellent service. They installed my new water heater quickly and left everything spotless. The price was very fair.",
      rating: 5,
    },
    {
      name: "Sarah J.",
      location: "Delta, BC",
      text: "I had a heating emergency in the middle of winter and Aha Plumbing saved me. They arrived late at night and fixed everything.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-foreground/80 font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-blue-100 text-lg">
            Our customers' satisfaction is our best introduction.
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
