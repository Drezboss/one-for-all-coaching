import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, User, BookOpen, Mail, MapPin, Calendar } from "lucide-react";
import { siteContent } from "@shared/content";

// Sticky CTA Header Component
function StickyCTAHeader() {
  return (
    <div className="fixed top-0 right-4 z-50 bg-yellow-400 text-black px-4 py-3 rounded-b-lg shadow-lg hover:bg-yellow-300 transition-colors cursor-pointer">
      <Link href="/contact">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="font-bold text-sm">Book a</span>
          </div>
          <div className="font-bold text-sm">Session</div>
          <div className="text-xs text-gray-700 mt-1">Always available</div>
        </div>
      </Link>
    </div>
  );
}

// Session Types Component
function SessionTypes() {
  const sessionTypes = [
    { title: "1-2-1", subtitle: "", icon: User },
    { title: "Group", subtitle: "", icon: Users },
    { title: "Coach", subtitle: "Mentorship", icon: BookOpen }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">⚽</span>
          </div>
          <span className="text-gray-600 font-medium">One For All Coaching</span>
        </div>
        
        <h2 className="text-4xl font-bold text-black mb-12">Session Types</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessionTypes.map((session, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <session.icon className="w-12 h-12 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-black">{session.title}</h3>
                {session.subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{session.subtitle}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Me Section
function AboutMeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Me */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">⚽</span>
              </div>
              <span className="text-gray-600 font-medium">One For All Coaching</span>
            </div>
            
            <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>
            
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-8">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  {siteContent.images.coach.main ? (
                    <img 
                      src={siteContent.images.coach.main}
                      alt="Dave Cornock - Coach"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I'm Dave Cornock, a UEFA B Licensed football coach with 
                  a broad coaching background that spans all levels of the 
                  game.
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full hover:bg-gray-100">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Dave Cornock Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Dave Cornock</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {siteContent.coach.bio}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My journey has taken me from grassroots football, 
                  and local leagues, through the Junior Premier League (JPL) 
                  and Hellenic League, to coaching elite Tier 2 women's 
                  university teams and UDA overseas students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">⚽</span>
          </div>
          <span className="text-gray-300 font-medium">One For All Coaching</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Let's Build a Stronger, Smarter Game—Together
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to take your football journey to the next level? 
          Let's work together to unlock your potential.
        </p>
        
        <div className="w-32 h-32 bg-gray-700 rounded-lg mx-auto mb-12 flex items-center justify-center">
          <div className="w-20 h-20 bg-gray-600 rounded-lg flex items-center justify-center">
            <Users className="w-10 h-10 text-gray-300" />
          </div>
        </div>
        
        <Link href="/contact">
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}

// Ready to Train Section
function ReadyToTrainSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div></div> {/* Empty left column for spacing */}
          <div className="text-right">
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Train?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Book a session or ask any questions you have!
            </p>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <div className="flex items-center justify-end gap-3">
                <span className="text-sm">Info@oneforcoaking.com</span>
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-right text-sm">
                <p>Based in [Your City] —</p>
                <p>Available Online &</p>
                <p>In Person</p>
              </div>
            </div>
            
            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">⚽</span>
              </div>
              <span className="text-gray-600 font-medium">One For All Coaching</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Helping You Become the Best Version of Yourself
            </h1>
            
            <div className="w-full h-64 bg-gray-100 rounded-lg mb-8 flex items-center justify-center overflow-hidden">
              {siteContent.images.coaching.individual ? (
                <img 
                  src={siteContent.images.coaching.individual}
                  alt="Football Coaching"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Users className="w-24 h-24 text-gray-400" />
              )}
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to One For All Coaching — where personal growth meets 
                professional standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer tailored training and development for players and coaches, 
                built around one simple principle: your success is our mission.
              </p>
            </div>
            
            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StickyCTAHeader />
      <HeroSection />
      <SessionTypes />
      <AboutMeSection />
      <CTASection />
      <ReadyToTrainSection />
    </div>
  );
}
