import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Leaf, 
  Sparkles, 
  Star, 
  Award, 
  Users, 
  Clock, 
  Shield,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Lead Gardener",
      image: "/api/placeholder/300/300",
      bio: "With over 8 years of experience in horticulture and landscape design, Sarah leads our gardening team with passion and expertise. She specializes in sustainable gardening practices and native plant landscaping.",
      expertise: ["Landscape Design", "Sustainable Gardening", "Plant Health", "Seasonal Maintenance"],
      certifications: ["Certified Horticulturist", "Landscape Design Certificate"],
      experience: "8+ years",
      email: "sarah@greenandclean.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Cleaning Specialist",
      image: "/api/placeholder/300/300",
      bio: "Michael brings 6 years of professional cleaning experience to our team. He's trained in eco-friendly cleaning methods and specializes in deep cleaning and stain removal techniques.",
      expertise: ["Deep Cleaning", "Eco-Friendly Products", "Stain Removal", "Commercial Cleaning"],
      certifications: ["Professional Cleaning Certification", "Eco-Friendly Cleaning Specialist"],
      experience: "6+ years",
      email: "michael@greenandclean.com",
      phone: "+1 (555) 123-4568"
    },
    {
      name: "Emma Thompson",
      role: "Garden Maintenance Specialist",
      image: "/api/placeholder/300/300",
      bio: "Emma is our go-to expert for all things garden maintenance. From lawn care to seasonal cleanup, she ensures every garden we maintain thrives throughout the year.",
      expertise: ["Lawn Care", "Hedge Trimming", "Seasonal Cleanup", "Irrigation Systems"],
      certifications: ["Lawn Care Specialist", "Irrigation Technician"],
      experience: "5+ years",
      email: "emma@greenandclean.com",
      phone: "+1 (555) 123-4569"
    },
    {
      name: "David Chen",
      role: "Cleaning Team Lead",
      image: "/api/placeholder/300/300",
      bio: "David oversees our cleaning operations with meticulous attention to detail. He's passionate about creating healthy, clean environments for our clients.",
      expertise: ["Residential Cleaning", "Carpet Cleaning", "Window Cleaning", "Team Management"],
      certifications: ["Cleaning Management", "Carpet Cleaning Specialist"],
      experience: "7+ years",
      email: "david@greenandclean.com",
      phone: "+1 (555) 123-4570"
    },
    {
      name: "Lisa Johnson",
      role: "Customer Service Manager",
      image: "/api/placeholder/300/300",
      bio: "Lisa ensures every client receives exceptional service from initial contact to job completion. She's dedicated to building lasting relationships with our community.",
      expertise: ["Customer Relations", "Scheduling", "Quality Assurance", "Client Communication"],
      certifications: ["Customer Service Excellence", "Project Management"],
      experience: "4+ years",
      email: "lisa@greenandclean.com",
      phone: "+1 (555) 123-4571"
    },
    {
      name: "James Wilson",
      role: "Operations Manager",
      image: "/api/placeholder/300/300",
      bio: "James coordinates all our operations to ensure smooth, efficient service delivery. He manages logistics, scheduling, and quality control across all services.",
      expertise: ["Operations Management", "Logistics", "Quality Control", "Team Coordination"],
      certifications: ["Operations Management", "Quality Assurance"],
      experience: "9+ years",
      email: "james@greenandclean.com",
      phone: "+1 (555) 123-4572"
    }
  ];

  const companyStats = [
    { icon: <Users className="w-6 h-6" />, value: "15+", label: "Team Members" },
    { icon: <Clock className="w-6 h-6" />, value: "5+", label: "Years Experience" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Insured & Bonded" },
    { icon: <Star className="w-6 h-6" />, value: "500+", label: "Happy Clients" }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "We use sustainable practices and eco-friendly products to protect our environment."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliable",
      description: "You can count on us to show up on time and deliver quality work every time."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality",
      description: "We take pride in our work and never compromise on quality or attention to detail."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "We're proud to serve our local community and build lasting relationships."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our dedicated team of professionals is committed to providing exceptional 
            gardening and cleaning services. Get to know the people who make it all happen.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the skilled professionals who are passionate about making your home and garden beautiful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {member.role}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {member.experience} experience
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Certifications:</h4>
                    <div className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="flex items-center text-sm text-muted-foreground">
                          <Award className="w-4 h-4 mr-2 text-primary" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our commitment to quality and customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Work With Us?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Competitive wages and benefits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Flexible scheduling options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Professional development opportunities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Supportive team environment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Modern equipment and tools
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Health and safety training
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Current Openings
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-foreground">Garden Maintenance Specialist</h4>
                  <p className="text-sm text-muted-foreground">Full-time, immediate start</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-foreground">Cleaning Team Member</h4>
                  <p className="text-sm text-muted-foreground">Part-time, flexible hours</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-foreground">Customer Service Representative</h4>
                  <p className="text-sm text-muted-foreground">Full-time, office-based</p>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="mailto:careers@greenandclean.com" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send your resume to careers@greenandclean.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to discuss your gardening and cleaning needs. 
            Our team is ready to help transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Today
              </Button>
            </a>
            <a href="mailto:info@greenandclean.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}