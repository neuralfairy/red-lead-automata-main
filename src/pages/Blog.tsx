import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CalendarDays, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: "10 Email Marketing Automation Strategies That Drive 300% ROI",
      excerpt: "Discover the proven strategies that top-performing companies use to maximize their email marketing ROI with intelligent automation.",
      author: "Sarah Johnson",
      authorInitials: "SJ",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Strategy",
      tags: ["Automation", "ROI", "Strategy"],
      featured: true
    },
    {
      title: "The Complete Guide to Email Segmentation for B2B Companies",
      excerpt: "Learn how to segment your email list effectively to deliver personalized content that converts prospects into customers.",
      author: "Michael Chen",
      authorInitials: "MC",
      date: "December 12, 2024",
      readTime: "12 min read",
      category: "Guide",
      tags: ["Segmentation", "B2B", "Personalization"]
    },
    {
      title: "GDPR Compliance in Email Marketing: What You Need to Know",
      excerpt: "Stay compliant while maintaining effective email marketing campaigns with our comprehensive GDPR guide.",
      author: "Emily Rodriguez",
      authorInitials: "ER",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Compliance",
      tags: ["GDPR", "Compliance", "Legal"]
    },
    {
      title: "A/B Testing Your Email Campaigns: Best Practices for 2024",
      excerpt: "Master the art of email A/B testing with these proven techniques that will improve your open rates and conversions.",
      author: "David Kim",
      authorInitials: "DK",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Optimization",
      tags: ["A/B Testing", "Optimization", "Analytics"]
    },
    {
      title: "How to Create Compelling Email Subject Lines That Get Opened",
      excerpt: "Craft subject lines that stand out in crowded inboxes and drive higher open rates with these psychology-backed techniques.",
      author: "Sarah Johnson",
      authorInitials: "SJ",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Content",
      tags: ["Subject Lines", "Copywriting", "Open Rates"]
    },
    {
      title: "The Future of Email Marketing: AI and Machine Learning Trends",
      excerpt: "Explore how artificial intelligence is revolutionizing email marketing and what it means for your campaigns.",
      author: "Michael Chen",
      authorInitials: "MC",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Future"]
    }
  ];

  const categories = ["All", "Strategy", "Guide", "Optimization", "Technology", "Compliance"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              iEMA Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Email Marketing
              <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Insights & Strategies
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Stay ahead of the curve with expert insights, proven strategies, and the latest trends 
              in email marketing automation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/50">
        <div className="container-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-hero" : "btn-outline"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <Badge variant="outline" className="text-primary border-primary mb-8">
              Featured Article
            </Badge>
            
            <Card className="card-gradient border-0 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-gradient-primary"></div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">{posts[0].category}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{posts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{posts[0].readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                      {posts[0].title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {posts[0].tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                          {posts[0].authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{posts[0].author}</div>
                        <div className="text-sm text-muted-foreground">Marketing Expert</div>
                      </div>
                    </div>
                    
                    <Button className="btn-hero">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights and actionable strategies to help you master email marketing automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card 
                key={post.title}
                className="card-gradient border-0 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-primary"></div>
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs font-semibold">
                          {post.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{post.author}</div>
                        <div className="text-xs text-muted-foreground">{post.date}</div>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-hero">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-padding">
          <Card className="card-primary border-0 max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center space-y-6 text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">
                Never Miss an Update
              </h3>
              <p className="text-primary-foreground/90 text-lg">
                Subscribe to our newsletter and get the latest email marketing insights 
                delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-primary-foreground"
                />
                <Button 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-primary-foreground/70">
                Unsubscribe at any time. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;