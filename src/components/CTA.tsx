import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section-padding hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
            Ready to Transform Your
            <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Email Marketing?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of companies already using iEMA to automate their email campaigns 
            and increase lead engagement by up to 300%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/pricing">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Schedule a Demo
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span className="text-primary-foreground/90">14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span className="text-primary-foreground/90">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span className="text-primary-foreground/90">Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default CTA;