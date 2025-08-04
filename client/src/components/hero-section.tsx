import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trophy } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Trophy className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-600">
              ONE FOR ALL Coaching
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-8">
            Helping You<br />
            Become the Best<br />
            Version of<br />
            Yourself
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Welcome to One For All Coaching—where personal growth meets professional standards.
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We offer tailored training and development for players and coaches, built around one simple principle: your journey is unique, and your development should be too.
          </p>
          <Link href="/contact">
            <Button className="bg-gray-800 text-white hover:bg-gray-900 font-semibold text-lg px-8 py-6 h-auto rounded-full transition-all duration-200">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Background shape/image placeholder */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
        <div className="w-full h-full bg-gray-400 rounded-full"></div>
      </div>
    </section>
  );
}

export function ExpectationSection() {
  const expectations = [
    {
      icon: "🎯",
      title: "Personalised Training Plans",
      description: "Tailored to your strengths and goals",
    },
    {
      icon: "💪",
      title: "Technical & Physical Development",
      description: "That matches your playing style",
    },
    {
      icon: "📈",
      title: "Honest Feedback",
      description: "And consistent progression tracking",
    },
    {
      icon: "🧠",
      title: "Mental Focus",
      description: "And confidence-building woven into every session",
    },
  ];

  return (
    <section id="expectations" className="py-20 bg-almost-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <Rocket className="inline-block w-12 h-12 text-lfc-red mr-4" />
            WHAT TO EXPECT
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expectations.map((item, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-lfc-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bright-red transition-colors duration-200">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-200 mb-8">
            Whether you're looking to improve your skills, aiming to stand out at grassroots level, or just want to play with more purpose — we're here to guide you.
          </p>
          <div className="text-2xl font-bold text-lfc-red">
            YOUR JOURNEY. YOUR STANDARD. YOUR BEST VERSION
          </div>
        </div>
      </div>
    </section>
  );
}
