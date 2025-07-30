import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';

const FAQPage = () => {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is iEMA (Email Marketing Automation)?",
          answer: "iEMA is our comprehensive email marketing automation platform that helps B2B companies create, automate, and optimize personalized email campaigns. It combines advanced segmentation, behavioral triggers, and AI-powered personalization to increase lead engagement and drive conversions."
        },
        {
          question: "How long does it take to set up iEMA?",
          answer: "Most customers are up and running within 24-48 hours. Our onboarding team will help you import your contacts, set up your first automation workflows, and integrate with your existing tools. We provide step-by-step guidance and dedicated support throughout the process."
        },
        {
          question: "Do I need technical knowledge to use iEMA?",
          answer: "Not at all! iEMA is designed with a user-friendly drag-and-drop interface that requires no coding or technical expertise. Our visual workflow builder makes it easy to create complex automation sequences, and our template library provides professionally designed email templates you can customize."
        },
        {
          question: "Can I migrate from my current email platform?",
          answer: "Yes, we offer free migration assistance for all plans. Our team will help you export your contacts, email templates, and automation workflows from your current platform and seamlessly import them into iEMA. We support migration from all major email marketing platforms."
        }
      ]
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What types of automation workflows can I create?",
          answer: "iEMA supports unlimited automation possibilities including welcome series, drip campaigns, behavioral triggers, abandoned cart recovery, lead nurturing sequences, customer onboarding, re-engagement campaigns, and custom workflows based on any combination of triggers and conditions."
        },
        {
          question: "How does the AI personalization work?",
          answer: "Our AI engine analyzes subscriber behavior, engagement patterns, and demographic data to automatically personalize content, subject lines, and send times for each individual. It continuously learns and optimizes to improve performance over time, typically increasing engagement rates by 40-60%."
        },
        {
          question: "What integrations are available?",
          answer: "iEMA integrates with 100+ platforms including Salesforce, HubSpot, Pipedrive, Shopify, WordPress, Zapier, Google Analytics, Facebook Ads, LinkedIn, and many more. We also provide a robust API for custom integrations and webhook support for real-time data sync."
        },
        {
          question: "Can I A/B test my email campaigns?",
          answer: "Absolutely! iEMA includes comprehensive A/B testing capabilities. You can test subject lines, email content, send times, sender names, and even entire automation workflows. Our statistical significance tracking ensures you get reliable results to optimize your campaigns."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "Is there a free trial available?",
          answer: "Yes, we offer a 14-day free trial for all plans with full access to features. No credit card is required to start your trial. You can test all automation features, send emails, and explore integrations during your trial period."
        },
        {
          question: "What happens if I exceed my email or contact limits?",
          answer: "If you approach your limits, we'll notify you in advance. You can either upgrade to a higher plan or purchase additional emails/contacts as add-ons. We never stop your campaigns unexpectedly - you'll always have options to continue your email marketing."
        },
        {
          question: "Can I change or cancel my plan anytime?",
          answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Plan changes take effect at your next billing cycle. If you cancel, you'll retain access to your account until the end of your current billing period, and you can always reactivate later."
        },
        {
          question: "Do you offer custom enterprise pricing?",
          answer: "Yes, our Enterprise plan includes custom pricing based on your specific needs, volume requirements, and desired features. Enterprise customers receive dedicated account management, priority support, custom integrations, and SLA guarantees."
        }
      ]
    },
    {
      category: "Technical & Security",
      questions: [
        {
          question: "Is iEMA GDPR compliant?",
          answer: "Yes, iEMA is fully GDPR compliant. We provide built-in consent management, data processing agreements, the right to erasure, data portability, and comprehensive audit trails. We're also SOC 2 Type II certified and follow strict data security protocols."
        },
        {
          question: "What are your deliverability rates?",
          answer: "iEMA maintains industry-leading deliverability rates of 99%+ through our partnership with premium sending infrastructure, automatic bounce handling, spam score checking, and reputation monitoring. We also provide deliverability consulting to optimize your sender reputation."
        },
        {
          question: "How secure is my data?",
          answer: "Your data is protected with enterprise-grade security including AES-256 encryption, secure data centers, regular security audits, two-factor authentication, and role-based access controls. We're SOC 2 Type II certified and maintain strict data handling procedures."
        },
        {
          question: "What kind of customer support do you provide?",
          answer: "We offer 24/7 email support for all plans, phone support for Professional and Enterprise plans, and live chat during business hours. Enterprise customers get dedicated account managers and priority support with guaranteed response times."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      availability: "Mon-Fri, 8AM-6PM PST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      availability: "(555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your detailed questions",
      action: "Send Email",
      availability: "support@thetelecomdata.com"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Frequently Asked
              <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Find answers to common questions about iEMA email marketing automation platform
            </p>
            
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for answers..."
                className="pl-12 py-4 text-lg bg-primary-foreground text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <div className="text-center">
                  <Badge variant="outline" className="text-primary border-primary mb-4">
                    {category.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="card-gradient border-0 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our support team is here to help you succeed with iEMA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card 
                key={option.title}
                className="card-gradient border-0 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                    <option.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {option.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {option.availability}
                  </p>
                  <Button className="btn-hero w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Additional Resources
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore more ways to get the most out of iEMA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-gradient border-0 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-semibold">Documentation</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive guides and tutorials</p>
                  <Button variant="outline" size="sm">
                    View Docs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-semibold">Video Tutorials</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step video guides</p>
                  <Button variant="outline" size="sm">
                    Watch Videos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-semibold">Community Forum</h3>
                  <p className="text-sm text-muted-foreground">Connect with other users</p>
                  <Button variant="outline" size="sm">
                    Join Forum
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-semibold">API Reference</h3>
                  <p className="text-sm text-muted-foreground">Technical documentation</p>
                  <Button variant="outline" size="sm">
                    API Docs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Try iEMA free for 14 days and see why 500+ companies trust us with their email marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;