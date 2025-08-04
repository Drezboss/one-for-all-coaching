import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Medal, Trophy, Users, Target, CheckCircle, Star, Award, Calendar, Mail } from "lucide-react";
import { siteContent } from "@shared/content";

// Sticky CTA Header (reused from home)
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

// Hero Section
function AboutHeroSection() {
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
              About Me
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {siteContent.about.hero.description}
              </p>
            </div>
          </div>
          
          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {siteContent.images.coach.main ? (
              <img 
                src={siteContent.images.coach.main}
                alt="Dave Cornock - Coach"
                className="w-full h-full object-cover"
              />
            ) : (
              <Users className="w-24 h-24 text-gray-400" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Coach Profile Section
function CoachProfileSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Photo and Basic Info */}
          <div>
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  {siteContent.images.coach.sideline ? (
                    <img 
                      src={siteContent.images.coach.sideline}
                      alt="Dave Cornock on sidelines"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">{siteContent.coach.name}</h3>
                <p className="text-gray-600 mb-6">{siteContent.coach.title}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{siteContent.site.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Biography */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Dave Cornock</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {siteContent.coach.bio}
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
                  "{siteContent.coach.quote}"
                </blockquote>
                <p className="text-gray-700 leading-relaxed">
                  {siteContent.coach.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Credentials & Qualifications Section
function CredentialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">⚽</span>
            </div>
            <span className="text-gray-600 font-medium">One For All Coaching</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">Credentials & Qualifications</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Professional qualifications and certifications that ensure the highest standards of coaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.coach.credentials.map((credential, index) => (
            <Card key={index} className="bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-black mb-2">{credential}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Philosophy Section
function PhilosophySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Coaching Philosophy</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            My approach to developing players and fostering growth both on and off the pitch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.about.philosophy.map((item, index) => {
            const icons = [Target, Trophy, Users];
            const Icon = icons[index];
            return (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
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
          Ready to Start Your Football Journey?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Get in touch and let's discuss how we can help you reach your goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get In Touch
            </Button>
          </Link>
          <Link href="/individual-coaching">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <StickyCTAHeader />
      <AboutHeroSection />
      <CoachProfileSection />
      <CredentialsSection />
      <PhilosophySection />
      <CTASection />
    </div>
  );
}
