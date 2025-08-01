import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Star, Users, Clock, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Garden Maintenance",
      description: "Professional garden care including mowing, trimming, weeding, and seasonal maintenance.",
      features: ["Lawn mowing & edging", "Hedge trimming", "Weed control", "Seasonal cleanup"],
      color: "green"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Home Cleaning",
      description: "Thorough domestic cleaning services for a spotless and healthy home environment.",
      features: ["Regular cleaning", "Deep cleaning", "Window cleaning", "Carpet cleaning"],
      color: "blue"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Green & Clean transformed our neglected garden into a beautiful outdoor space. Their attention to detail is outstanding!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      content: "Reliable, professional, and thorough. The cleaning service is exceptional and the team is always punctual.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Local Resident",
      content: "I've been using their services for over a year now. Consistent quality and friendly staff. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Customers" },
    { icon: <Clock className="w-6 h-6" />, value: "5+", label: "Years Experience" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Satisfaction Rate" },
    { icon: <CheckCircle className="w-6 h-6" />, value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Leaf className="w-12 h-12 text-green-600 mr-4" />
              <Sparkles className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Professional
              <span className="text-green-600"> Gardening </span>
              &
              <span className="text-blue-600"> Cleaning </span>
              Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your home and garden with our expert team. We provide reliable, 
              professional services to keep your space beautiful and well-maintained.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bookings">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  Book a Service
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive gardening and cleaning solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <CardTitle className="ml-3 text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/services">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Green & Clean
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a local family-owned business dedicated to providing exceptional 
                gardening and cleaning services to our community. With over 5 years of 
                experience, we've built a reputation for reliability, quality, and 
                customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of certified professionals uses eco-friendly products and 
                sustainable practices to ensure your home and garden not only look 
                beautiful but also contribute to a healthier environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/team">
                  <Button variant="outline" className="px-6">
                    Meet Our Team
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 px-6">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-muted-foreground">Eco-Friendly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Book your first service today and experience the difference our professional 
            team can make for your home and garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bookings">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Book Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
