import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, Clock, MapPin, Users, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const bookingFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(10, "Please enter your full address"),
  serviceType: z.enum(["gardening", "cleaning", "both"], {
    required_error: "Please select a service type",
  }),
  specificService: z.string().min(1, "Please select a specific service"),
  propertySize: z.enum(["small", "medium", "large", "custom"], {
    required_error: "Please select property size",
  }),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  preferredTime: z.enum(["morning", "afternoon", "evening", "flexible"], {
    required_error: "Please select a preferred time",
  }),
  frequency: z.enum(["one-time", "weekly", "bi-weekly", "monthly"], {
    required_error: "Please select service frequency",
  }),
  specialInstructions: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to our terms and conditions",
  }),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function Bookings() {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
  });

  const serviceType = watch("serviceType");

  const gardeningServices = [
    { value: "lawn-mowing", label: "Lawn Mowing & Maintenance", price: "$45-75" },
    { value: "hedge-trimming", label: "Hedge Trimming & Pruning", price: "$60-120" },
    { value: "garden-design", label: "Garden Design & Landscaping", price: "$500+" },
    { value: "seasonal-cleanup", label: "Seasonal Cleanup", price: "$80-150" },
    { value: "irrigation", label: "Irrigation System Setup", price: "$200-500" },
    { value: "tree-care", label: "Tree Care & Maintenance", price: "$100-300" }
  ];

  const cleaningServices = [
    { value: "regular-cleaning", label: "Regular Home Cleaning", price: "$120-200" },
    { value: "deep-cleaning", label: "Deep Cleaning", price: "$200-350" },
    { value: "carpet-cleaning", label: "Carpet & Upholstery Cleaning", price: "$150-300" },
    { value: "window-cleaning", label: "Window Cleaning", price: "$80-150" },
    { value: "move-in-out", label: "Move-in/Move-out Cleaning", price: "$250-500" },
    { value: "commercial-cleaning", label: "Commercial Cleaning", price: "$300+" }
  ];

  const timeSlots = [
    { value: "morning", label: "Morning (8AM-12PM)" },
    { value: "afternoon", label: "Afternoon (12PM-4PM)" },
    { value: "evening", label: "Evening (4PM-8PM)" },
    { value: "flexible", label: "Flexible - Any time" }
  ];

  const propertySizes = [
    { value: "small", label: "Small (< 1000 sq ft)", description: "Studio, 1-2 bedroom" },
    { value: "medium", label: "Medium (1000-2000 sq ft)", description: "2-3 bedroom house" },
    { value: "large", label: "Large (2000+ sq ft)", description: "3+ bedroom house" },
    { value: "custom", label: "Custom/Commercial", description: "Large property or business" }
  ];

  const frequencies = [
    { value: "one-time", label: "One-time service" },
    { value: "weekly", label: "Weekly" },
    { value: "bi-weekly", label: "Bi-weekly" },
    { value: "monthly", label: "Monthly" }
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Booking data:", data);
    
    toast({
      title: "Booking request submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const getAvailableServices = () => {
    if (serviceType === "gardening") return gardeningServices;
    if (serviceType === "cleaning") return cleaningServices;
    if (serviceType === "both") return [...gardeningServices, ...cleaningServices];
    return [];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book Your Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Schedule your gardening or cleaning service with our easy online booking system. 
            Choose your preferred date and time, and we'll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>Available 7 days a week</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Local service area</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span>Professional team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Service Booking Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to schedule your service. We'll contact you to confirm your appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            {...register("firstName")}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            {...register("lastName")}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="address">Service Address *</Label>
                        <Input
                          id="address"
                          {...register("address")}
                          className={errors.address ? "border-red-500" : ""}
                          placeholder="Enter your full address"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Service Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select onValueChange={(value) => setValue("serviceType", value as any)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gardening">Gardening Services</SelectItem>
                              <SelectItem value="cleaning">Cleaning Services</SelectItem>
                              <SelectItem value="both">Both Services</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.serviceType && (
                            <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="specificService">Specific Service *</Label>
                          <Select onValueChange={(value) => setValue("specificService", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select specific service" />
                            </SelectTrigger>
                            <SelectContent>
                              {getAvailableServices().map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label} - {service.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.specificService && (
                            <p className="text-red-500 text-sm mt-1">{errors.specificService.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="propertySize">Property Size *</Label>
                          <Select onValueChange={(value) => setValue("propertySize", value as any)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select property size" />
                            </SelectTrigger>
                            <SelectContent>
                              {propertySizes.map((size) => (
                                <SelectItem key={size.value} value={size.value}>
                                  {size.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.propertySize && (
                            <p className="text-red-500 text-sm mt-1">{errors.propertySize.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="frequency">Service Frequency *</Label>
                          <Select onValueChange={(value) => setValue("frequency", value as any)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              {frequencies.map((freq) => (
                                <SelectItem key={freq.value} value={freq.value}>
                                  {freq.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.frequency && (
                            <p className="text-red-500 text-sm mt-1">{errors.frequency.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Schedule</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                          {errors.preferredDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="preferredTime">Preferred Time *</Label>
                          <Select onValueChange={(value) => setValue("preferredTime", value as any)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time.value} value={time.value}>
                                  {time.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.preferredTime && (
                            <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div>
                      <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                      <Textarea
                        id="specialInstructions"
                        rows={3}
                        {...register("specialInstructions")}
                        placeholder="Any special requirements, access instructions, or additional details..."
                      />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        onCheckedChange={(checked) => setValue("agreeToTerms", checked as boolean)}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          terms and conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          cancellation policy
                        </a>
                        *
                      </Label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Book Service
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Booking Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Service Area</p>
                      <p className="text-sm text-muted-foreground">30-mile radius</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Team Size</p>
                      <p className="text-sm text-muted-foreground">2-4 professionals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:bookings@greenandclean.com" className="text-primary hover:underline">
                      bookings@greenandclean.com
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our team is available Monday-Friday 8AM-6PM and Saturday 9AM-4PM to assist with your booking.
                  </p>
                </CardContent>
              </Card>

              {/* Pricing Guide */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pricing Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Lawn Mowing</span>
                      <span className="text-sm font-medium">$45-75</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Hedge Trimming</span>
                      <span className="text-sm font-medium">$60-120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Regular Cleaning</span>
                      <span className="text-sm font-medium">$120-200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Deep Cleaning</span>
                      <span className="text-sm font-medium">$200-350</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        *Prices vary based on property size and specific requirements
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Booking?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help you schedule the perfect service for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call for Assistance
              </Button>
            </a>
            <a href="mailto:bookings@greenandclean.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}