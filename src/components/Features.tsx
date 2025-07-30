import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  BarChart3, 
  Users, 
  Zap, 
  Target, 
  Shield, 
  Smartphone, 
  Calendar,
  ArrowRight 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: "Smart Email Automation",
      description: "Create sophisticated drip campaigns that adapt to user behavior and engagement patterns.",
      badge: "Core Feature"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track open rates, click-through rates, and conversion metrics with real-time reporting.",
      badge: "Analytics"
    },
    {
      icon: Users,
      title: "Lead Segmentation",
      description: "Automatically segment your audience based on demographics, behavior, and engagement.",
      badge: "Targeting"
    },
    {
      icon: Zap,
      title: "Trigger-Based Actions",
      description: "Set up automated responses based on specific user actions and engagement triggers.",
      badge: "Automation"
    },
    {
      icon: Target,
      title: "Personalization Engine",
      description: "Deliver personalized content that resonates with each individual prospect.",
      badge: "AI-Powered"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and GDPR-ready data protection.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure perfect rendering across all devices with responsive email templates.",
      badge: "Mobile"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Optimize send times based on recipient time zones and engagement patterns.",
      badge: "Optimization"
    }
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary">
            iEMA Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Everything You Need for
            <span className="block text-gradient">Email Marketing Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive iEMA platform provides all the tools you need to create, 
            automate, and optimize your email marketing campaigns for maximum ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-gradient hover:scale-105 transition-all duration-300 border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="btn-hero">
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;