import { useState } from "react";
import { Trophy, ChevronDown, ChevronUp, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What age groups do you coach?",
    answer: "I coach players from ages 6 to 18, with programs tailored to different developmental stages. Each age group has specific training focuses that align with their physical and cognitive development.",
    category: "General"
  },
  {
    question: "How long are the training sessions?",
    answer: "Individual coaching sessions are typically 60-90 minutes, while group sessions run for 90-120 minutes. The duration depends on the age group and the specific training focus for that session.",
    category: "Training"
  },
  {
    question: "What equipment do players need to bring?",
    answer: "Players should bring football boots, shin guards, water bottle, and appropriate training clothing. I provide all training equipment including balls, cones, and other training aids.",
    category: "Equipment"
  },
  {
    question: "Do you offer trial sessions?",
    answer: "Yes, I offer a free trial session for new players. This allows both the player and parents to experience my coaching style and see if it's the right fit before committing to regular sessions.",
    category: "General"
  },
  {
    question: "What qualifications do you have?",
    answer: "I hold UEFA coaching licenses and have extensive experience in youth development. I'm also certified in sports psychology and child development, ensuring a holistic approach to player development.",
    category: "Qualifications"
  },
  {
    question: "How do you handle different skill levels in group sessions?",
    answer: "Group sessions are structured to accommodate different skill levels through differentiated coaching. Players are grouped appropriately, and exercises are modified to challenge each player at their current level while promoting growth.",
    category: "Training"
  },
  {
    question: "What happens in bad weather?",
    answer: "Training continues in most weather conditions as it builds mental toughness. However, sessions may be rescheduled or moved indoors during extreme weather (heavy rain, snow, or lightning) for safety reasons.",
    category: "Weather"
  },
  {
    question: "How do you track player progress?",
    answer: "I maintain detailed progress reports for each player, tracking technical skills, tactical understanding, physical development, and mental attributes. Parents receive regular updates and can request detailed assessments.",
    category: "Progress"
  },
  {
    question: "Do you help with match preparation?",
    answer: "Yes, I provide match preparation sessions that focus on tactical understanding, set pieces, and mental preparation. I can also attend matches to provide halftime feedback and post-match analysis.",
    category: "Matches"
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 24 hours notice for session cancellations. Late cancellations may incur a charge. In case of illness or emergency, I'm flexible and will work to reschedule sessions when possible.",
    category: "Policies"
  },
  {
    question: "Do you offer holiday camps?",
    answer: "Yes, I run intensive holiday camps during school breaks. These camps focus on specific skills and provide an excellent opportunity for accelerated development in a fun, intensive environment.",
    category: "Camps"
  },
  {
    question: "How do you communicate with parents?",
    answer: "I maintain regular communication through WhatsApp groups, email updates, and monthly progress reports. I'm always available for phone calls or meetings to discuss your child's development.",
    category: "Communication"
  }
];

const categories = ["All", "General", "Training", "Equipment", "Qualifications", "Weather", "Progress", "Matches", "Policies", "Camps", "Communication"];

export default function QA() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-almost-black">
      {/* Header */}
      <div className="bg-almost-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="w-12 h-12 text-lfc-red" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our football coaching services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? "bg-lfc-red hover:bg-bright-red" 
                    : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <Card key={index} className="bg-almost-black border-gray-700 hover:border-gray-600 transition-colors">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-lg">
                    {faq.question}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      {faq.category}
                    </Badge>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <Card className="bg-almost-black border-gray-700 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl mb-2">
                Still Have Questions?
              </CardTitle>
              <p className="text-gray-400">
                Can't find what you're looking for? Get in touch with me directly.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-lfc-red" />
                  <span className="text-gray-300 font-medium">Phone</span>
                  <span className="text-gray-400 text-sm">Call for immediate assistance</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-lfc-red" />
                  <span className="text-gray-300 font-medium">Email</span>
                  <span className="text-gray-400 text-sm">Send detailed questions</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-lfc-red" />
                  <span className="text-gray-300 font-medium">Location</span>
                  <span className="text-gray-400 text-sm">Visit our training ground</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-lfc-red hover:bg-bright-red text-white px-8 py-3">
                  Contact Me Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <h3 className="text-white text-xl font-semibold mb-4">
            Ready to Get Started?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/individual-coaching">
              <Button variant="outline" className="border-lfc-red text-lfc-red hover:bg-lfc-red hover:text-white">
                1-2-1 Coaching
              </Button>
            </Link>
            <Link href="/group-sessions">
              <Button variant="outline" className="border-lfc-red text-lfc-red hover:bg-lfc-red hover:text-white">
                Group Sessions
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-lfc-red hover:bg-bright-red text-white">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}