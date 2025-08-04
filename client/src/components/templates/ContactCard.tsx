import { siteContent } from "@shared/content";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export function ContactCard() {
  const { email } = siteContent.contact.contactInfo;
  return (
    <section
      id="contact-card"
      className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 py-16 px-6"
    >
      <div className="max-w-lg mx-auto space-y-6 border border-border rounded-lg p-8 bg-card/50 backdrop-blur-md">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Train?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Book a session or ask any questions you have!
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-2">
            <Mail className="w-4 h-4 mt-0.5 text-primary" />
            <span>{email}</span>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 mt-0.5 text-primary" />
            <span>Based in [Your City] — Available Online & In-Person</span>
          </div>
        </div>

        <Link href="/contact">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}