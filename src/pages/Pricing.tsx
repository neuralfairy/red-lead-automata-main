import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started with email automation",
      features: [
        "Up to 1,000 contacts",
        "5,000 emails/month",
        "Basic automation workflows",
        "Email templates library",
        "Basic analytics & reporting",
        "Email support",
        "GDPR compliance",
        "Mobile-responsive templates"
      ],
      cta: "Start Free Trial",
      popular: false,
      savings: null
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses that need advanced features",
      features: [
        "Up to 10,000 contacts",
        "50,000 emails/month",
        "Advanced automation workflows",
        "A/B testing",
        "Advanced analytics & reporting",
        "Phone & email support",
        "Custom integrations",
        "Lead scoring",
        "Behavioral targeting",
        "Send time optimization",
        "Custom fields & tags",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true,
      savings: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with custom requirements",
      features: [
        "Unlimited contacts",
        "Unlimited emails",
        "Custom workflows",
        "Dedicated account manager",
        "Priority support (24/7)",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantee (99.9%)",
        "Custom reporting",
        "White-label options",
        "Advanced team permissions",
        "Custom onboarding"
      ],
      cta: "Contact Sales",
      popular: false,
      savings: "Best Value"
    }
  ];

  const addOns = [
    {
      name: "Additional Contacts",
      price: "$10",
      period: "/1,000 contacts/month",
      description: "Expand your reach beyond plan limits"
    },
    {
      name: "Extra Emails",
      price: "$5",
      period: "/10,000 emails/month",
      description: "Send more emails when you need them"
    },
    {
      name: "Premium Support",
      price: "$50",
      period: "/month",
      description: "Priority phone and chat support"
    },
    {
      name: "Custom Integration",
      price: "$200",
      period: "/one-time",
      description: "Connect any tool with custom API work"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Choose Your
              <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Start with our free trial and scale as you grow. No hidden fees, 
              no long-term contracts. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative ${plan.popular ? 'card-primary scale-105' : 'card-gradient'} border-0 transition-all duration-300 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-yellow-900 px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      {plan.savings}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {plan.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className={`text-4xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {plan.price}
                      <span className={`text-base font-normal ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <Check className={`h-5 w-5 ${plan.popular ? 'text-green-300' : 'text-primary'} flex-shrink-0`} />
                        <span className={`text-sm ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    size="lg" 
                    className={`w-full ${plan.popular ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' : 'btn-hero'}`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Add-On Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize your plan with additional features and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => (
              <Card key={addon.name} className="card-gradient border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {addon.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {addon.price}
                    <span className="text-sm font-normal text-muted-foreground">
                      {addon.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Can I change plans at any time?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Is there a free trial?</h3>
                <p className="text-muted-foreground">Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">What happens if I exceed my email limit?</h3>
                <p className="text-muted-foreground">You can purchase additional emails as needed, or upgrade to a higher plan for better value.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Do you offer refunds?</h3>
                <p className="text-muted-foreground">Yes, we offer a 30-day money-back guarantee for annual plans.</p>
              </div>
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
              Join hundreds of companies already using iEMA to transform their email marketing
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
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;