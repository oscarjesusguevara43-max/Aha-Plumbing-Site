import { MapPin, Phone, Mail, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(10, { message: "Phone required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">
              We Are Here To Help
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have an emergency or need a quote? Call us or send us a message. We respond 24/7.
            </p>

            <div className="grid gap-6">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0 text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Location</h3>
                    <p className="text-muted-foreground">6330 134a St, Surrey, BC V3W 1J5, Canada</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0 text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Phone</h3>
                    <p className="text-muted-foreground mb-1">Calls and WhatsApp</p>
                    <a href="tel:6047800790" className="text-xl font-bold text-primary hover:text-accent transition-colors">
                      (604) 780-0790
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0 text-accent">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Hours</h3>
                    <p className="text-muted-foreground">Monday to Sunday</p>
                    <p className="font-bold text-primary">Open 24 Hours</p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0 text-accent">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-primary text-lg">Payment Methods</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-200 rounded text-xs font-bold text-gray-700">VISA</span>
                    <span className="px-3 py-1 bg-gray-200 rounded text-xs font-bold text-gray-700">MASTERCARD</span>
                    <span className="px-3 py-1 bg-gray-200 rounded text-xs font-bold text-gray-700">AMEX</span>
                    <span className="px-3 py-1 bg-gray-200 rounded text-xs font-bold text-gray-700">INTERAC</span>
                    <span className="px-3 py-1 bg-gray-200 rounded text-xs font-bold text-gray-700">E-TRANSFER</span>
                    <span className="px-3 py-1 bg-gray-200 rounded text-xs font-bold text-gray-700">CASH</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(604) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

        </div>
        
        {/* Map Embed */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-md h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.687258832454!2d-122.84880992325368!3d49.11145247921319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9c66a87b7a1%3A0x6b77c5c0c6c7b0b0!2s6330%20134a%20St%2C%20Surrey%2C%20BC%20V3W%201J5%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Aha Plumbing Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
