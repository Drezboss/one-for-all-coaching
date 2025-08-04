import { ContentCard, ImagePlaceholder } from "@/components/ui/content-card";
import { StickyNote } from "@/components/ui/sticky-note";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mountain, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { siteContent } from "@shared/content";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Build Your Next Step Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your football journey? Get in touch and let's discuss how we can help you reach your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Form Card */}
          <div className="lg:col-span-1 relative">
            <StickyNote>
              Get in touch - We'll respond within 24 hours
            </StickyNote>
            
            <ContentCard title="Send Us a Message">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+44 7123 456789"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Service Interest
                  </Label>
                  <select
                    id="service"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">1-2-1 Individual Coaching</option>
                    <option value="group">Group Sessions</option>
                    <option value="mentorship">Coach Mentorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals and how we can help..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 font-semibold py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </ContentCard>
          </div>

          {/* Contact Information Card */}
          <ContentCard title="Get in Touch">
            <ImagePlaceholder icon={<Mountain className="w-12 h-12 text-gray-400" />} />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                  <p className="text-sm text-gray-600">Info@oneforcoaching.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                  <p className="text-sm text-gray-600">+44 7750 887112</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Location</h4>
                  <p className="text-sm text-gray-600">Based in [Your City] — Available Online & In Person</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Availability</h4>
                  <p className="text-sm text-gray-600">Monday - Sunday, 8 AM - 8 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Response Time</h4>
              <p className="text-xs text-gray-600">
                We typically respond to all inquiries within 24 hours. For urgent matters, 
                please call us directly.
              </p>
            </div>
          </ContentCard>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our coaching services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">What age groups do you coach?</h3>
              <p className="text-sm text-gray-600">
                I work with players of all ages, from young children just starting out to adults looking to improve their game. Each session is tailored to the individual's age and skill level.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">How long are the sessions?</h3>
              <p className="text-sm text-gray-600">
                Individual sessions are typically 60 minutes, while group sessions can vary from 60-90 minutes depending on the group size and objectives.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Do you provide online coaching?</h3>
              <p className="text-sm text-gray-600">
                Yes! I offer both in-person and online coaching sessions. Online sessions include video analysis, virtual training plans, and regular check-ins.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">What equipment do I need?</h3>
              <p className="text-sm text-gray-600">
                For in-person sessions, just bring appropriate sports clothing and footwear. For online sessions, a smartphone or computer with camera access is sufficient.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Football Journey?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't wait to begin your development. Contact us today to schedule your first session 
            and take the first step towards achieving your football goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-800 text-white hover:bg-gray-700 font-semibold px-8 py-3">
              Book Your First Session
            </Button>
            <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold px-8 py-3">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
