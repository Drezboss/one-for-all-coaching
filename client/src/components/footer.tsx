import { Link } from "wouter";
import { Leaf, Sparkles, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const services = [
    { name: "Garden Maintenance", href: "/services" },
    { name: "Home Cleaning", href: "/services" },
    { name: "Landscaping", href: "/services" },
    { name: "Seasonal Cleanup", href: "/services" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Book Now", href: "/bookings" },
  ];

  const supportLinks = [
    { name: "FAQ", href: "/contact" },
    { name: "Get a Quote", href: "/contact" },
    { name: "Service Areas", href: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="text-3xl font-bold text-foreground">
                <div className="flex items-center">
                  <Leaf className="inline-block w-8 h-8 text-green-600 mr-2" />
                  <Sparkles className="inline-block w-6 h-6 text-blue-600 mr-2" />
                </div>
                GREEN & CLEAN
                <span className="block text-lg text-muted-foreground font-normal">GARDENING & CLEANING</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional gardening and cleaning services to keep your home and garden beautiful, 
              healthy, and well-maintained year-round.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@greenandclean.com" className="hover:text-primary transition-colors">
                  info@greenandclean.com
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Garden Street, City, State 12345</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Ready to get started?</p>
              <Link href="/bookings">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                  Book a Service
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Green & Clean. All rights reserved. |{" "}
            <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-200">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-200">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
