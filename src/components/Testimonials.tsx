import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "SJ",
      rating: 5,
      text: "iEMA transformed our email marketing completely. We saw a 280% increase in qualified leads within the first quarter. The automation features are incredibly intuitive.",
      results: "280% increase in leads"
    },
    {
      name: "Michael Chen",
      role: "VP of Sales",
      company: "DataSync Inc",
      avatar: "MC",
      rating: 5,
      text: "The personalization engine is game-changing. Our email open rates improved by 65% and conversion rates doubled. Best investment we've made.",
      results: "65% higher open rates"
    },
    {
      name: "Emily Rodriguez",
      role: "Growth Manager",
      company: "CloudVision",
      avatar: "ER",
      rating: 5,
      text: "Setting up complex automation workflows has never been easier. The customer support team is exceptional, and the ROI speaks for itself.",
      results: "300% ROI improvement"
    }
  ];

  return (
    <section className="section-padding bg-accent/50">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary">
            Customer Success
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Trusted by Industry
            <span className="block text-gradient">Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their email marketing 
            with our iEMA platform and achieved remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="card-gradient border-0 relative animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 space-y-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Quote className="h-5 w-5 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Results Badge */}
                <Badge variant="secondary" className="text-primary">
                  {testimonial.results}
                </Badge>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by 500+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              TechFlow
            </div>
            <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              DataSync
            </div>
            <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              CloudVision
            </div>
            <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              StartupXYZ
            </div>
            <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              InnovateCorp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;