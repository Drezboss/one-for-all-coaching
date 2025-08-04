import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, Video, TrendingUp, Brain, Clock, MapPin, CheckCircle, Star, Calendar, User, Users, Award } from "lucide-react";
import { siteContent } from "@shared/content";

// Sticky CTA Header (reused)
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
function IndividualCoachingHero() {
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
              💪 1-2-1 Individual Program Learning
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              {siteContent.services.individualCoaching.subtitle}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {siteContent.services.individualCoaching.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                  Book a Session
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                  Meet Your Coach
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {siteContent.images.coaching.individual ? (
              <img 
                src={siteContent.images.coaching.individual}
                alt="Individual Football Coaching"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-24 h-24 text-gray-400" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = siteContent.services.individualCoaching.features;
  const featureIcons = [Target, Video, TrendingUp, Brain];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">⚽</span>
            </div>
            <span className="text-gray-600 font-medium">One For All Coaching</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">What's Included</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Comprehensive individual coaching designed to unlock your potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = featureIcons[index] || CheckCircle;
            return (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">{feature}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Who It's For Section
function WhoItsForSection() {
  const whoItsFor = siteContent.services.individualCoaching.whoItsFor;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Who It's For</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Individual coaching is perfect for players who want dedicated, personalized attention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whoItsFor.map((item, index) => {
            const icons = [Award, Target, Brain];
            const Icon = icons[index];
            return (
              <Card key={index} className="bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-center">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Session Structure Section
function SessionStructureSection() {
  const sessionStructure = [
    {
      phase: "Warm-up & Assessment",
      duration: "15 minutes",
      description: "Dynamic warm-up tailored to your needs with quick skill assessment",
    },
    {
      phase: "Technical Development",
      duration: "30 minutes",
      description: "Focused work on specific technical skills relevant to your position and goals",
    },
    {
      phase: "Tactical Training",
      duration: "25 minutes",
      description: "Game-realistic scenarios and decision-making practice",
    },
    {
      phase: "Physical Conditioning",
      duration: "15 minutes",
      description: "Football-specific fitness work integrated with ball skills",
    },
    {
      phase: "Cool Down & Review",
      duration: "5 minutes",
      description: "Session recap with feedback and planning for next steps",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Session Structure</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Every 90-minute session is structured to maximize your development
          </p>
        </div>

        <div className="space-y-6">
          {sessionStructure.map((session, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">{session.phase}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{session.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:ml-8 flex-1">
                    <p className="text-gray-700">{session.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">⚽</span>
          </div>
          <span className="text-gray-600 font-medium">One For All Coaching</span>
        </div>
        
        <h2 className="text-4xl font-bold text-black mb-8">Ready to Get Started?</h2>
        
        <Card className="bg-gray-50 border border-gray-200 max-w-lg mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Individual Coaching</h3>
              <p className="text-gray-600">90-minute personalized sessions</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Personalized training plan</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Video analysis included</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Progress tracking</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Mental conditioning</span>
              </div>
            </div>
            
            <Link href="/contact">
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 py-4 text-lg">
                Book Your Session
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <p className="text-gray-600 mt-6">
          Contact us for pricing and availability
        </p>
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
          Take Your Game to the Next Level
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to unlock your potential with professional, personalized coaching?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Book a Session
            </Button>
          </Link>
          <Link href="/group-sessions">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
              View Group Sessions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function IndividualCoaching() {
  return (
    <div className="min-h-screen bg-white">
      <StickyCTAHeader />
      <IndividualCoachingHero />
      <FeaturesSection />
      <WhoItsForSection />
      <SessionStructureSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
