import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Building, Users, Target, Award, ArrowRight } from 'lucide-react';
import teamImage from '@/assets/team-collaboration.jpg';

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50M+", label: "Emails Sent" },
    { number: "300%", label: "Average ROI Increase" },
    { number: "99.9%", label: "Uptime" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Marketing at TechCorp with 15+ years in email marketing automation.",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Ex-Google engineer specializing in AI and machine learning for marketing platforms.",
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      bio: "Customer experience expert with a track record of 98% customer satisfaction.",
      initials: "ER"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product strategist with expertise in B2B SaaS and marketing technology.",
      initials: "DK"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Everything we do is focused on helping our customers succeed and grow their businesses."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of the curve in email marketing technology."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our platform and customer service."
    },
    {
      icon: Building,
      title: "Transparency",
      description: "We believe in honest communication, transparent pricing, and clear value delivery."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              About Thetelecomdata
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Revolutionizing Email Marketing
              <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                One Campaign at a Time
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              We're on a mission to help B2B companies transform their email marketing 
              with intelligent automation and personalization.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-primary border-primary">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Built by Marketers,
                <span className="block text-gradient">For Marketers</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 in Seattle, Thetelecomdata Solutions was born from a simple observation: 
                  email marketing platforms were either too complex for small businesses or too limited 
                  for growing companies.
                </p>
                <p>
                  Our team of marketing veterans and technology experts came together to create iEMA, 
                  an email marketing automation platform that combines powerful features with intuitive design.
                </p>
                <p>
                  Today, we're proud to serve over 500 companies worldwide, helping them automate their 
                  email marketing and achieve an average of 300% ROI improvement.
                </p>
              </div>
              <Button className="btn-hero">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Thetelecomdata Team" 
                className="w-full rounded-2xl shadow-strong"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Leadership Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Meet the Experts Behind
              <span className="block text-gradient">iEMA Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of experience in marketing technology, 
              customer success, and product innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="card-gradient border-0 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl font-semibold">
                      {member.name}
                    </CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-accent/50">
        <div className="container-padding">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What Drives Us
              <span className="block text-gradient">Every Day</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do, from product development 
              to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="card-gradient border-0 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Our Mission
            </h2>
            <p className="text-2xl leading-relaxed text-primary-foreground/90">
              "To democratize advanced email marketing automation, making powerful 
              marketing tools accessible to businesses of all sizes while driving 
              measurable results and sustainable growth."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;