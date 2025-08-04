import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="bg-yellow-300 p-4 rounded-lg shadow-lg">
        <p className="text-black font-bold text-center mb-2">
          'Book a<br />Session',<br />always<br />present.
        </p>
        <Link href="/contact">
          <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold rounded">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}