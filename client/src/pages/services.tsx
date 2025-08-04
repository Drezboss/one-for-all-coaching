import { ContentCard, ImagePlaceholder, SessionType } from "@/components/ui/content-card";
import { StickyNote } from "@/components/ui/sticky-note";
import { Button } from "@/components/ui/button";
import { Mountain, Users, User, Target, Calendar, Clock, Star } from "lucide-react";
import { siteContent } from "@shared/content";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Coaching Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the training approach that fits your goals and schedule
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Individual Coaching */}
          <ContentCard 
            title="1-2-1 Individual Coaching"
            showContactButton={true}
            contactButtonText="Book Session"
          >
            <ImagePlaceholder icon={<User className="w-12 h-12 text-gray-400" />} />
            <p className="text-gray-700 text-sm leading-relaxed">
              Unlock your potential with dedicated one-to-one coaching sessions designed around your unique strengths, goals, and playing style.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Personalised Training Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Video Analysis & Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Progress Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Mental Conditioning</span>
              </div>
            </div>
          </ContentCard>

          {/* Group Sessions */}
          <ContentCard 
            title="Group Sessions"
            showContactButton={true}
            contactButtonText="Join Group"
          >
            <ImagePlaceholder icon={<Users className="w-12 h-12 text-gray-400" />} />
            <p className="text-gray-700 text-sm leading-relaxed">
              Small group training sessions that combine individual development with the dynamic energy of training alongside peers.
            </p>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Friends & Siblings</h4>
                <p className="text-xs text-gray-600">Perfect for friends who want to train together</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Small Team Units</h4>
                <p className="text-xs text-gray-600">Ideal for club teams or school squads</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Skill-Level Groups</h4>
                <p className="text-xs text-gray-600">Players of similar ability levels</p>
              </div>
            </div>
          </ContentCard>

          {/* Coach Mentorship */}
          <div className="lg:col-span-1 relative">
            <StickyNote>
              Coach Mentorship - Monthly check-ins available
            </StickyNote>
            
            <ContentCard 
              title="Coach Mentorship"
              showContactButton={true}
              contactButtonText="Start Mentorship"
            >
              <ImagePlaceholder icon={<Target className="w-12 h-12 text-gray-400" />} />
              <p className="text-gray-700 text-sm leading-relaxed">
                Our mentorship program is designed to support, challenge, and grow coaches through regular 1-to-1 support.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Monthly check-ins and development goals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Session reviews & tactical discussions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Career support and leadership development</span>
                </div>
              </div>
            </ContentCard>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-gray-600">
              Choose the package that works best for your development goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Single Session</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">£45</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 60-minute personalized session</li>
                <li>• Video analysis included</li>
                <li>• Progress report</li>
                <li>• Follow-up recommendations</li>
              </ul>
              <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold">
                Book Now
              </Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5-Session Pack</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">£200</p>
              <p className="text-sm text-gray-500 mb-4">Save £25</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 5 x 60-minute sessions</li>
                <li>• Comprehensive development plan</li>
                <li>• Weekly progress tracking</li>
                <li>• Priority booking</li>
              </ul>
              <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 font-semibold">
                Book Pack
              </Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Program</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">£350</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 8 sessions per month</li>
                <li>• Full development program</li>
                <li>• 24/7 support access</li>
                <li>• Performance analytics</li>
              </ul>
              <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold">
                Start Program
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}