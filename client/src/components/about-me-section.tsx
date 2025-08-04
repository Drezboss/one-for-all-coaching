import { siteContent } from "@shared/content";
import { Trophy } from "lucide-react";

export function AboutMeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
              About Me
            </h2>
            
            <div className="bg-gray-200 rounded-lg h-96 mb-8 flex items-center justify-center">
              <Trophy className="w-32 h-32 text-gray-400" />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-black mb-4">
              {siteContent.coach.name}
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              {siteContent.coach.bio}
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              {siteContent.coach.philosophy}
            </p>
            
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-4">Qualifications & Experience:</h4>
              <ul className="space-y-2 text-gray-700">
                {siteContent.coach.credentials.map((credential, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    {credential}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}