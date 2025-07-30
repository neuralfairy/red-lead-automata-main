import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TD</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl">Thetelecomdata</span>
                <div className="text-xs text-muted -mt-1">iEMA Solutions</div>
              </div>
            </div>
            <p className="text-sm text-muted">
              Automate personalized email campaigns to increase lead engagement with our advanced iEMA platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm hover:text-primary transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Seattle, WA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@thetelecomdata.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted">
              © {currentYear} Thetelecomdata Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a 
                href="https://salescentri.com?utm_source=TheTelecomData.com&utm_medium=footer&utm_campaign=partner_network" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;