import { siteContent } from "@shared/content";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function HeroBlock() {
  return (
    <section
      id="hero"
      className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 py-20 px-6 border-b border-border"
    >
      <div className="max-w-xl mx-auto text-left space-y-6">
        {/* Site name */}
        <div className="text-sm font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">
          {siteContent.site.name}
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Helping You Become the
          <br />
          <span className="text-primary">Best Version</span>
          <br />
          of Yourself
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          {siteContent.home.whyChoose.description}
        </p>

        {/* Call to action */}
        <Link href="/contact">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}