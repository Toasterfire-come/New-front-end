import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  TrendingUp, 
  BarChart3, 
  Eye, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Stock Scanner',
      description: 'Filter thousands of stocks with 50+ technical and fundamental criteria'
    },
    {
      icon: Eye,
      title: 'Smart Watchlists',
      description: 'Track your favorite stocks with real-time alerts and portfolio analysis'
    },
    {
      icon: TrendingUp,
      title: 'Market Analytics',
      description: 'Professional-grade charts, indicators, and market sentiment analysis'
    },
    {
      icon: Zap,
      title: 'Real-time Data',
      description: 'Live market data with microsecond latency for institutional-grade trading'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security with 99.9% uptime guarantee'
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'Access stocks, ETFs, and indices from markets worldwide'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Portfolio Manager',
      company: 'Meridian Capital',
      content: 'StockScan Pro has revolutionized how we identify investment opportunities. The screening tools are incredibly powerful.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Day Trader',
      company: 'Independent',
      content: 'The real-time alerts have helped me catch breakouts before they happen. Essential tool for active trading.',
      rating: 5
    },
    {
      name: 'Jennifer Park',
      role: 'Research Analyst',
      company: 'Goldman Sachs',
      content: 'Best stock screening platform I\'ve used. The data accuracy and speed are unmatched.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for beginners',
      features: ['5 watchlist stocks', 'Basic market data', 'Email alerts', 'Mobile app access'],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'For serious traders',
      features: ['Unlimited watchlists', 'Real-time data', 'Advanced screening', 'Portfolio analytics', 'Priority support'],
      cta: 'Start 14-Day Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For institutions',
      features: ['Everything in Pro', 'API access', 'Custom indicators', 'White-label solution', 'Dedicated support'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-600 text-white mb-6 text-sm px-4 py-2">
              🚀 New: AI-Powered Stock Recommendations
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Stock Analysis
              <span className="text-emerald-400 block">Made Simple</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Discover winning stocks with our advanced screening tools, real-time market data, 
              and AI-powered insights trusted by over 100,000 traders worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-300 hover:bg-slate-700 px-8 py-4 text-lg" asChild>
                <Link to="/dashboard">
                  View Live Demo
                </Link>
              </Button>
            </div>
            <div className="mt-8 text-slate-400 text-sm">
              <Users className="w-4 h-4 inline mr-2" />
              Trusted by 100,000+ traders • No credit card required
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Trade Smarter
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional-grade tools and real-time market data to give you the edge you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Professional Traders
            </h2>
            <p className="text-xl text-slate-600">
              See what industry experts are saying about StockScan Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-600">
              Start free, upgrade when you need more power
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-slate-200 relative ${
                plan.popular ? 'ring-2 ring-emerald-500 shadow-xl' : ''
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-slate-900">
                    {plan.price}
                    {plan.period && <span className="text-xl text-slate-600">{plan.period}</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                        : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                    }`}
                    asChild
                  >
                    <Link to={plan.name === 'Enterprise' ? '/contact' : '/signup'}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Trading Smarter?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who use StockScan Pro to identify winning opportunities
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg" asChild>
            <Link to="/signup">
              Get Started Free Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;