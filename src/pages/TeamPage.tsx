import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
}

const TeamPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Gardener",
      bio: "With over 15 years of experience in horticulture, Sarah founded Green & Clean Services to bring professional garden care to local communities.",
      experience: "15+ years",
      image: require('../assets/images/team-member-1.svg')
    },
    {
      name: "Michael Chen",
      role: "Head of Cleaning Services",
      bio: "Michael specializes in eco-friendly cleaning solutions and has trained dozens of cleaning professionals in best practices.",
      experience: "12+ years",
      image: require('../assets/images/team-member-2.svg')
    },
    {
      name: "Emma Wilson",
      role: "Garden Design Specialist",
      bio: "Emma brings creative flair to our garden design services, with a passion for sustainable landscaping and native plants.",
      experience: "8+ years",
      image: require('../assets/images/team-member-1.svg')
    },
    {
      name: "David Rodriguez",
      role: "Operations Manager",
      bio: "David ensures smooth operations and excellent customer service, coordinating our teams to deliver timely, quality services.",
      experience: "10+ years",
      image: require('../assets/images/team-member-2.svg')
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Meet Our Team</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our dedicated professionals are committed to providing exceptional service with a personal touch
        </p>

        {/* Company Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="text-sm text-gray-500">
                    <Award className="inline h-4 w-4 mr-1" />
                    {member.experience} experience
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on the quality of our work</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable practices in all our services</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
              <p className="text-gray-600">Your satisfaction is our top priority</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;