import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function CTABlock() {
  return (
    <section
      id="cta"
      className="bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 py-20 px-6 border-b border-border"
    >
      <div className="max-w-lg mx-auto text-left space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Let's Build a Stronger,
          <br />
          Smarter Game—<br className="block md:hidden" /> Together
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Ready to elevate your performance? Reach out today and start your journey toward becoming a smarter, stronger player.
        </p>

        <Link href="/contact">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}