import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">Aha Plumbing & Heating</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Soluciones rápidas, limpias y garantizadas en plomería y calefacción. Servicio 24/7 en Surrey y alrededores.
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
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              <li className="text-blue-100">Reparación de Fugas</li>
              <li className="text-blue-100">Calentadores de Agua</li>
              <li className="text-blue-100">Limpieza de Drenajes</li>
              <li className="text-blue-100">Sistemas de Calefacción</li>
              <li className="text-blue-100">Emergencias 24/7</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-bold">Llámenos 24/7</p>
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
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Aha Plumbing & Heating Ltd. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
