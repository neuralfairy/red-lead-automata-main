import Layout from '@/components/Layout';
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
  Plug,
  Bot,
  TrendingUp,
  Globe
} from 'lucide-react';
import automationImage from '@/assets/automation-workflow.jpg';

const FeaturesPage = () => {
  const features = [
    {
      icon: Mail,
      title: "Advanced Email Automation",
      description: "Create sophisticated drip campaigns with conditional logic, behavioral triggers, and time-based sequences.",
      details: "Build complex workflows that adapt to subscriber behavior in real-time."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track performance with comprehensive dashboards showing open rates, click-through rates, and conversion metrics.",
      details: "Get actionable insights with heat maps, A/B testing results, and engagement scoring."
    },
    {
      icon: Users,
      title: "Smart Segmentation",
      description: "Automatically segment your audience based on demographics, behavior, purchase history, and engagement patterns.",
      details: "Dynamic segments that update automatically as subscriber behavior changes."
    },
    {
      icon: Zap,
      title: "Trigger-Based Actions",
      description: "Set up automated responses based on specific user actions, website behavior, and engagement triggers.",
      details: "React instantly to subscriber actions with personalized follow-up sequences."
    },
    {
      icon: Target,
      title: "AI-Powered Personalization",
      description: "Deliver personalized content using machine learning algorithms that optimize for each individual subscriber.",
      details: "Increase engagement with content that adapts to individual preferences and behavior patterns."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, GDPR-ready data protection, and advanced encryption.",
      details: "Keep your data secure with industry-leading security measures and compliance standards."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure perfect rendering across all devices with responsive email templates and mobile-first design.",
      details: "Automatically optimize content for mobile devices with smart responsive design."
    },
    {
      icon: Calendar,
      title: "Smart Send Time Optimization",
      description: "Optimize send times based on recipient time zones, historical engagement data, and behavior patterns.",
      details: "Automatically determine the best time to send emails for maximum engagement."
    },
    {
      icon: Plug,
      title: "CRM Integration",
      description: "Seamlessly integrate with popular CRMs like Salesforce, HubSpot, and Pipedrive for unified data management.",
      details: "Sync contact data, track conversions, and maintain consistent customer profiles across platforms."
    },
    {
      icon: Bot,
      title: "Chatbot Integration",
      description: "Connect email campaigns with chatbot conversations for omnichannel customer experiences.",
      details: "Create seamless experiences that bridge email and chat interactions."
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Built-in A/B testing, landing page integration, and conversion tracking to maximize ROI.",
      details: "Test everything from subject lines to send times and optimize for better results."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create campaigns in multiple languages with automatic translation and localization features.",
      details: "Reach global audiences with localized content and culturally appropriate messaging."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              iEMA Features
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Powerful Features for
              <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Email Marketing Success
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Discover the comprehensive suite of tools that make iEMA the most advanced 
              email marketing automation platform for B2B companies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="card-gradient hover:scale-105 transition-all duration-300 border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    {feature.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-primary border-primary">
                See It In Action
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Experience iEMA's
                <span className="block text-gradient">Automation Power</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                See how easy it is to create complex automation workflows that respond 
                to subscriber behavior and drive results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Drag-and-drop workflow builder</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Advanced conditional logic</span>
                </div>
              </div>
              <Button className="btn-hero">
                Request Live Demo
              </Button>
            </div>
            <div className="relative">
              <img 
                src={automationImage} 
                alt="Email Automation Workflow" 
                className="w-full rounded-2xl shadow-strong"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Integrations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Connect with Your
              <span className="block text-gradient">Favorite Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              iEMA integrates seamlessly with the tools you already use, 
              creating a unified marketing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Salesforce', 'HubSpot', 'Pipedrive', 'Zapier', 'Shopify', 'WordPress', 'Slack', 'Google Analytics', 'Facebook', 'LinkedIn', 'Mailchimp', 'ActiveCampaign'].map((tool) => (
              <div key={tool} className="flex items-center justify-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <span className="font-medium text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;