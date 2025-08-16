import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Bell, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Eye
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Discover Stocks',
      description: 'Use our advanced screening tools to find stocks that match your criteria. Filter by price, volume, market cap, and 50+ technical indicators.',
      features: ['50+ screening filters', 'Real-time market data', 'Custom search queries']
    },
    {
      step: 2,
      icon: Eye,
      title: 'Analyze & Watch',
      description: 'Add interesting stocks to your watchlist and dive deep into professional-grade analysis tools and charts.',
      features: ['Advanced charting', 'Technical indicators', 'Fundamental analysis']
    },
    {
      step: 3,
      icon: Bell,
      title: 'Get Alerted',
      description: 'Set up intelligent alerts for price movements, volume spikes, and technical breakouts to never miss an opportunity.',
      features: ['Price alerts', 'Volume notifications', 'Technical signals']
    },
    {
      step: 4,
      icon: TrendingUp,
      title: 'Track Performance',
      description: 'Monitor your watchlists and portfolios with real-time updates and performance analytics.',
      features: ['Portfolio tracking', 'Performance metrics', 'Risk analysis']
    }
  ];

  const features = [
    {
      icon: Filter,
      title: 'Advanced Stock Screener',
      description: 'Filter through thousands of stocks with over 50 criteria including technical indicators, fundamental metrics, and market data.'
    },
    {
      icon: BarChart3,
      title: 'Professional Charts',
      description: 'Interactive charts with technical indicators, drawing tools, and multiple timeframes for in-depth technical analysis.'
    },
    {
      icon: Zap,
      title: 'Real-time Data',
      description: 'Live market data with microsecond latency ensures you have the most current information for trading decisions.'
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'Access sentiment data and community discussions to understand market psychology and social trends.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <Badge className="bg-emerald-600 text-white mb-6 px-4 py-2">
            How It Works
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Stock Analysis
            <span className="block text-emerald-600">Made Simple</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how StockScan Pro transforms complex market data into actionable insights 
            that help you make smarter trading decisions.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Four Simple Steps to Success
            </h2>
            <p className="text-lg text-slate-600">
              Get started with professional stock analysis in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1 border-slate-200">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-slate-900">
                          {step.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-slate-600 text-base">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Powerful Features for Every Trader
            </h2>
            <p className="text-lg text-slate-600">
              Professional-grade tools designed for traders of all levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Data Sources */}
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Trusted Data Sources
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We aggregate data from multiple exchanges and financial institutions 
              to provide you with the most comprehensive and accurate market information.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['NYSE', 'NASDAQ', 'Reuters', 'Bloomberg'].map((source, index) => (
                <div key={index} className="bg-slate-100 rounded-lg p-4">
                  <div className="text-lg font-semibold text-slate-700">{source}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who use StockScan Pro to identify winning opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700 px-8 py-4 text-lg" asChild>
              <Link to="/dashboard">
                View Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;