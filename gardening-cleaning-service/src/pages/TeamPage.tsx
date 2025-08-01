import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Star, 
  Award, 
  Leaf, 
  Sparkles, 
  Phone, 
  Mail,
  Calendar,
  CheckCircle
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Thompson',
      role: 'Lead Garden Specialist',
      experience: '8 Years Experience',
      specialties: ['Landscape Design', 'Plant Care', 'Seasonal Maintenance'],
      bio: 'Sarah has transformed hundreds of gardens across the city. Her expertise in native plants and sustainable gardening practices makes her our go-to specialist for complex landscaping projects.',
      rating: 4.9,
      icon: <Leaf className="h-8 w-8 text-primary-600" />
    },
    {
      name: 'Mike Rodriguez',
      role: 'Senior Cleaning Supervisor',
      experience: '6 Years Experience',
      specialties: ['Deep Cleaning', 'Eco-Friendly Methods', 'Quality Control'],
      bio: 'Mike ensures every home receives the highest standard of cleaning. His attention to detail and commitment to using environmentally safe products has earned him outstanding customer reviews.',
      rating: 4.8,
      icon: <Sparkles className="h-8 w-8 text-secondary-600" />
    },
    {
      name: 'Emily Chen',
      role: 'Garden Maintenance Expert',
      experience: '5 Years Experience',
      specialties: ['Lawn Care', 'Pruning', 'Pest Management'],
      bio: 'Emily specializes in keeping gardens healthy and beautiful year-round. Her knowledge of seasonal care and organic treatments helps maintain vibrant outdoor spaces.',
      rating: 4.9,
      icon: <Leaf className="h-8 w-8 text-primary-600" />
    },
    {
      name: 'David Wilson',
      role: 'Home Cleaning Specialist',
      experience: '4 Years Experience',
      specialties: ['Regular Maintenance', 'Move-in/Move-out', 'Commercial Cleaning'],
      bio: 'David brings efficiency and reliability to every cleaning job. His systematic approach ensures consistent results and happy customers every time.',
      rating: 4.7,
      icon: <Sparkles className="h-8 w-8 text-secondary-600" />
    },
    {
      name: 'Lisa Anderson',
      role: 'Customer Relations Manager',
      experience: '7 Years Experience',
      specialties: ['Customer Service', 'Scheduling', 'Quality Assurance'],
      bio: 'Lisa coordinates all our services and ensures smooth communication between our team and customers. Her dedication to customer satisfaction drives our excellent service standards.',
      rating: 5.0,
      icon: <Users className="h-8 w-8 text-primary-600" />
    },
    {
      name: 'Tom Garcia',
      role: 'Operations Coordinator',
      experience: '3 Years Experience',
      specialties: ['Equipment Management', 'Safety Protocols', 'Team Training'],
      bio: 'Tom keeps our operations running smoothly and ensures all team members are trained to the highest standards. His focus on safety and efficiency benefits both our team and customers.',
      rating: 4.8,
      icon: <Award className="h-8 w-8 text-secondary-600" />
    }
  ];

  const companyValues = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary-600" />,
      title: 'Quality First',
      description: 'We never compromise on the quality of our work and always strive for excellence.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority, and we tailor our services to meet your needs.'
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary-600" />,
      title: 'Eco-Friendly',
      description: 'We use environmentally responsible products and practices in all our services.'
    },
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: 'Professional Excellence',
      description: 'Our trained team delivers professional results with attention to detail.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Professional Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are passionate about delivering exceptional 
              gardening and cleaning services. Get to know the team that makes your home beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the professionals who bring excellence to every job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                {/* Avatar Placeholder */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.experience}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(member.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {member.rating}
                    </span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex}
                        className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for passionate, skilled professionals to join our growing team. 
            If you share our commitment to excellence, we'd love to hear from you.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Current Opportunities
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">Garden Maintenance Specialist</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">Residential Cleaning Professional</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">Customer Service Representative</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Apply Now
            </Link>
            <a 
              href="mailto:careers@greenclean.com" 
              className="btn-outline flex items-center justify-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>careers@greenclean.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that professional, caring service makes. 
            Contact us today to schedule your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Service
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;