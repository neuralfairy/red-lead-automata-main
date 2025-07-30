import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  Building,
  Users
} from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@thetelecomdata.com",
      availability: "24/7 response within 2 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "(555) 123-4567",
      availability: "Mon-Fri, 8AM-6PM PST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Available on our platform",
      availability: "Mon-Fri, 8AM-6PM PST"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demo",
      contact: "calendly.com/thetelecomdata",
      availability: "Flexible scheduling"
    }
  ];

  const offices = [
    {
      city: "Seattle, WA",
      address: "123 Innovation Drive, Suite 400",
      zipCode: "Seattle, WA 98101",
      isHeadquarters: true
    },
    {
      city: "San Francisco, CA",
      address: "456 Market Street, Floor 12",
      zipCode: "San Francisco, CA 94105",
      isHeadquarters: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Let's Discuss Your
              <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Email Marketing Goals
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Ready to transform your email marketing? Our team of experts is here to help 
              you get started with iEMA and achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the way that works best for you to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="card-gradient border-0 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                    <method.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                  <p className="font-medium text-primary">
                    {method.contact}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {method.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
                  Send us a Message
                </Badge>
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours 
                  during business hours.
                </p>
              </div>

              <Card className="card-gradient border-0">
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Scheduling a demo</SelectItem>
                        <SelectItem value="pricing">Pricing information</SelectItem>
                        <SelectItem value="features">Feature questions</SelectItem>
                        <SelectItem value="integration">Integration support</SelectItem>
                        <SelectItem value="migration">Platform migration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your email marketing goals and how we can help..."
                      rows={4}
                    />
                  </div>

                  <Button className="btn-hero w-full">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and 
                    consent to receive marketing communications.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
                  Our Offices
                </Badge>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Visit Us
                </h3>
                <p className="text-muted-foreground">
                  We have offices in multiple locations to better serve our customers.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office) => (
                  <Card key={office.city} className="card-gradient border-0">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{office.city}</h4>
                          {office.isHeadquarters && (
                            <Badge variant="secondary" className="text-xs">
                              Headquarters
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <div className="text-sm">
                            <p>{office.address}</p>
                            <p>{office.zipCode}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            Mon-Fri, 8AM-6PM PST
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="card-primary border-0">
                <CardContent className="p-6 text-primary-foreground">
                  <h4 className="font-semibold text-lg mb-4">Why Choose iEMA?</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-80">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-80">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">300%</div>
                      <div className="text-sm opacity-80">Avg ROI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Prefer to Start with a
              <span className="block text-gradient">Free Trial?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              No commitment required. Get full access to iEMA for 14 days 
              and see the results for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="btn-outline">
                Download Free Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;