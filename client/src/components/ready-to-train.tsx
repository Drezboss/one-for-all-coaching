import { Mail } from "lucide-react";

export function ReadyToTrain() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8">
            Ready to Train?
          </h2>
          
          <p className="text-xl text-gray-700 mb-4">
            Book a session or ask any questions you have!
          </p>
          
          <div className="flex items-center gap-2 text-lg text-gray-600 mb-8">
            <Mail className="w-5 h-5" />
            <a href="mailto:info@onetocoaching.com" className="hover:text-gray-800 transition-colors">
              Info@onetocoaching.com
            </a>
          </div>
          
          <p className="text-lg text-gray-700 mb-2">
            Based in [Your City] —
          </p>
          <p className="text-lg text-gray-700">
            Available Online & In Person
          </p>
        </div>
      </div>
    </section>
  );
}