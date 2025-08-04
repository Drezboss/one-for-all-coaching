import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trophy } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-200 rounded-lg h-64 mb-12 flex items-center justify-center">
            <Trophy className="w-24 h-24 text-gray-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 leading-tight">
            Let's Build a<br />
            Stronger,<br />
            Smarter Game—<br />
            Together
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Let's Build a Stronger, Smarter Game — Together,
          </p>
          
          <Link href="/contact">
            <Button className="bg-gray-800 text-white hover:bg-gray-900 font-semibold text-lg px-8 py-6 h-auto rounded-full transition-all duration-200">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}