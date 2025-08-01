import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Star,
  Scissors,
  Droplets,
  Sun,
  Home,
  Car,
  Calendar,
  Phone,
  Mail
} from "lucide-react";

export default function Services() {
  const gardeningServices = [
    {
      title: "Lawn Mowing & Maintenance",
      description: "Regular lawn care to keep your grass healthy and well-manicured",
      price: "From $45",
      duration: "1-2 hours",
      features: [
        "Lawn mowing and edging",
        "Grass clipping removal",
        "Lawn fertilization",
        "Seasonal maintenance"
      ],
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Hedge Trimming & Pruning",
      description: "Professional trimming and pruning to maintain healthy, beautiful shrubs and trees",
      price: "From $60",
      duration: "2-3 hours",
      features: [
        "Hedge trimming and shaping",
        "Tree and shrub pruning",
        "Dead branch removal",
        "Plant health assessment"
      ],
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Garden Design & Landscaping",
      description: "Transform your outdoor space with custom garden design and landscaping",
      price: "From $500",
      duration: "1-3 days",
      features: [
        "Custom garden design",
        "Plant selection and installation",
        "Pathway and feature construction",
        "Irrigation system setup"
      ],
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Seasonal Cleanup",
      description: "Comprehensive seasonal maintenance to prepare your garden for each season",
      price: "From $80",
      duration: "3-4 hours",
      features: [
        "Leaf and debris removal",
        "Garden bed preparation",
        "Mulching and composting",
        "Winter protection setup"
      ],
      icon: <Leaf className="w-6 h-6" />
    }
  ];

  const cleaningServices = [
    {
      title: "Regular Home Cleaning",
      description: "Weekly or bi-weekly cleaning to maintain a clean and healthy home",
      price: "From $120",
      duration: "2-4 hours",
      features: [
        "Dusting and vacuuming",
        "Bathroom and kitchen cleaning",
        "Floor mopping and polishing",
        "Trash removal"
      ],
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning service for move-in/out or seasonal deep cleaning",
      price: "From $200",
      duration: "4-6 hours",
      features: [
        "Complete home deep cleaning",
        "Inside appliance cleaning",
        "Window and blind cleaning",
        "Baseboard and detail cleaning"
      ],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Carpet & Upholstery Cleaning",
      description: "Professional carpet and furniture cleaning for a fresh, allergen-free home",
      price: "From $150",
      duration: "2-3 hours",
      features: [
        "Steam carpet cleaning",
        "Upholstery cleaning",
        "Stain removal treatment",
        "Deodorizing and sanitizing"
      ],
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Window Cleaning",
      description: "Crystal clear windows inside and out for maximum natural light",
      price: "From $80",
      duration: "1-2 hours",
      features: [
        "Interior and exterior windows",
        "Window frame cleaning",
        "Screen cleaning",
        "Hard water stain removal"
      ],
      icon: <Sun className="w-6 h-6" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Our certified professionals have years of experience in gardening and cleaning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Insured",
      description: "Complete peace of mind with comprehensive insurance coverage"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliable Service",
      description: "Punctual, dependable service with flexible scheduling options"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our services"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional gardening and cleaning services tailored to your needs. 
            From regular maintenance to special projects, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bookings">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Book a Service
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="gardening" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="gardening" className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Gardening
                </TabsTrigger>
                <TabsTrigger value="cleaning" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Cleaning
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="gardening" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Garden Maintenance Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Keep your garden beautiful and healthy with our comprehensive gardening services
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {gardeningServices.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-600 rounded-lg text-white">
                            {service.icon}
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                        <Badge variant="secondary" className="bg-green-600 text-white">
                          {service.price}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/bookings">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Book This Service
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cleaning" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Home Cleaning Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Professional cleaning services to keep your home spotless and healthy
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {cleaningServices.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-600 rounded-lg text-white">
                            {service.icon}
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          {service.price}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/bookings">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Book This Service
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Green & Clean?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service with every visit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No hidden fees, no surprises. Get a detailed quote before we start any work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">One-Time Service</CardTitle>
                <CardDescription>
                  Perfect for occasional needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-4">
                  From $45
                </div>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Single service visit</li>
                  <li>• Flexible scheduling</li>
                  <li>• No commitment</li>
                  <li>• Pay per service</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-600">
              <CardHeader>
                <Badge className="w-fit mx-auto mb-2 bg-green-600">Most Popular</Badge>
                <CardTitle className="text-2xl">Regular Maintenance</CardTitle>
                <CardDescription>
                  Weekly or bi-weekly service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-4">
                  From $120
                </div>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Consistent service schedule</li>
                  <li>• Priority booking</li>
                  <li>• 10% discount</li>
                  <li>• Monthly billing</li>
                </ul>
                <Link href="/bookings">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Premium Package</CardTitle>
                <CardDescription>
                  Complete home and garden care
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-4">
                  From $200
                </div>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Both gardening & cleaning</li>
                  <li>• Customized schedule</li>
                  <li>• 15% discount</li>
                  <li>• Priority support</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We'll help you choose 
            the perfect service plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bookings">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Book Online
              </Button>
            </Link>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
              </Link>
              <Link href="mailto:info@greenandclean.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}