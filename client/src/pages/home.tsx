import { Button } from "@/components/ui/button";
import { ContentCard, ImagePlaceholder, SessionType } from "@/components/ui/content-card";
import { StickyNote } from "@/components/ui/sticky-note";
import { Mountain, Mail, Users, User, Target } from "lucide-react";
import { siteContent } from "@shared/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Card 1: Helping You Become the Best Version of Yourself */}
          <ContentCard 
            title="Helping You Become the Best Version of Yourself"
            showContactButton={true}
          >
            <ImagePlaceholder icon={<Mountain className="w-12 h-12 text-gray-400" />} />
            <p className="text-gray-700 text-sm leading-relaxed">
              Welcome to One For All Coaching — where personal growth meets professional standards. 
              We offer tailored training and development for players and coaches, built around one simple...
            </p>
          </ContentCard>

          {/* Card 2: Session Types */}
          <ContentCard 
            title="Session Types"
            showContactButton={true}
          >
            <div className="grid grid-cols-3 gap-3">
              <SessionType icon={<User className="w-6 h-6 text-gray-400" />} label="1-2-1" />
              <SessionType icon={<Users className="w-6 h-6 text-gray-400" />} label="Group" />
              <SessionType icon={<Target className="w-6 h-6 text-gray-400" />} label="Coach Mentorship" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">About Me</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                I'm Dava Cornnock, a UEFA B Licensed football coach with a broad coaching background 
                that spans all levels of the...
              </p>
            </div>
          </ContentCard>

          {/* Card 3: About Me (Dave Cornock) */}
          <ContentCard title="About Me">
            <ImagePlaceholder icon={<Mountain className="w-12 h-12 text-gray-400" />} />
            <h3 className="text-lg font-bold text-gray-900">Dave Cornock</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              I'm Dava Cornnock, a UEFA B Licensed football coach with a broad coaching background 
              that spans all levels of the game. My journey has taken me from grassroots football, 
              and local leagues, through the Junior Premier League (JPL) and Hellenic League, 
              coaching staff at 2 women's university teams and UDA overseas students.
            </p>
          </ContentCard>

          {/* Card 4: Let's Build a Stronger, Smarter Game—Together */}
          <ContentCard 
            title="Let's Build a Stronger, Smarter Game—Together"
            showContactButton={true}
          >
            <ImagePlaceholder icon={<Mountain className="w-12 h-12 text-gray-400" />} />
            <p className="text-gray-700 text-sm leading-relaxed">
              Let's Build a Stronger, Smarter Game — Together,
            </p>
          </ContentCard>

          {/* Card 5: Ready to Train? (with Sticky Note) */}
          <div className="lg:col-span-1 relative">
            <StickyNote>
              Sticky CTA header 'Book a Session', always present.
            </StickyNote>
            
            <ContentCard 
              title="Ready to Train?"
              showContactButton={true}
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                Book a session or ask any questions you have!
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Info@oneforcoaching.com</span>
                </div>
                <p className="text-sm text-gray-700">
                  Based in [Your City] — Available Online & In Person
                </p>
              </div>
            </ContentCard>
          </div>
        </div>
      </div>
    </div>
  );
}
