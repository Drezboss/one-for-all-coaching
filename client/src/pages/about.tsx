import { ContentCard, ImagePlaceholder } from "@/components/ui/content-card";
import { StickyNote } from "@/components/ui/sticky-note";
import { Button } from "@/components/ui/button";
import { Mountain, Trophy, Award, Target, Users, Star } from "lucide-react";
import { siteContent } from "@shared/content";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Dave Cornock
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your dedicated coach with the experience, qualifications, and passion to help you unlock your potential on and off the pitch.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Card */}
          <div className="lg:col-span-1 relative">
            <StickyNote>
              UEFA B Licensed Coach - Professional Experience
            </StickyNote>
            
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
          </div>

          {/* Philosophy Card */}
          <ContentCard title="My Philosophy">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Individual Focus</h4>
                  <p className="text-xs text-gray-600">
                    Every player is unique with their own strengths, challenges, and goals. Our approach is tailored to bring out the best in each individual.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Trophy className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Technical Excellence</h4>
                  <p className="text-xs text-gray-600">
                    Building solid technical foundations while developing tactical understanding that will serve players throughout their football journey.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Holistic Development</h4>
                  <p className="text-xs text-gray-600">
                    Football is a vehicle for personal growth. We focus on confidence, discipline, and life skills that extend beyond the pitch.
                  </p>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Credentials Card */}
          <ContentCard title="Credentials & Experience">
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold text-gray-900 text-sm">UEFA B License</span>
                </div>
                <p className="text-xs text-gray-600">Qualified with UEFA B License, bringing professional standards to every training session</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold text-gray-900 text-sm">FA Level 2 Coaching Badge</span>
                </div>
                <p className="text-xs text-gray-600">Certified by the Football Association with advanced coaching qualifications</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold text-gray-900 text-sm">Semi-professional Experience</span>
                </div>
                <p className="text-xs text-gray-600">Played at semi-professional level, bringing real game experience to coaching</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold text-gray-900 text-sm">DBS Checked & Safeguarding</span>
                </div>
                <p className="text-xs text-gray-600">Fully vetted and certified for working with young players</p>
              </div>
            </div>
          </ContentCard>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coaching Achievements
            </h2>
            <p className="text-gray-600">
              Dedicated to helping players at all levels reach their potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Player Development</h3>
              <p className="text-sm text-gray-600">
                Dedicated to helping players at all levels reach their potential through personalized coaching approaches
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Individual Focus</h3>
              <p className="text-sm text-gray-600">
                Every session is tailored to the specific needs and goals of each player
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">UEFA B Licensed</h3>
              <p className="text-sm text-gray-600">
                Qualified with UEFA B License, bringing professional standards to every training session
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Grassroots Excellence</h3>
              <p className="text-sm text-gray-600">
                Passionate about developing football at the grassroots level across all age groups
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's work together to unlock your potential and achieve your football goals. 
            Whether you're just starting out or looking to take your game to the next level, 
            I'm here to support your development every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-800 text-white hover:bg-gray-700 font-semibold px-8 py-3">
              Book a Session
            </Button>
            <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
