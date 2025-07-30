import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-email-automation.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-primary-foreground">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container-padding section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>Trusted by 500+ B2B Companies</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Automate Your Email Marketing with
                <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  iEMA Platform
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                Transform your lead engagement with personalized email campaigns that convert. 
                Increase ROI by up to 300% with our advanced automation platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">300%</div>
                <div className="text-sm text-primary-foreground/80">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-sm text-primary-foreground/80">Campaigns Sent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-primary-foreground/80">Uptime</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Email Marketing Automation Dashboard" 
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-3xl blur-2xl"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;