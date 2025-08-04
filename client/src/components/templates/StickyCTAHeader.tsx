import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function StickyCTAHeader() {
  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[60]">
      <Link href="/contact">
        <Button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold shadow-lg">
          Book a Session
        </Button>
      </Link>
    </div>
  );
}