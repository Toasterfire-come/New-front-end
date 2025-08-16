import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  CheckCircle, 
  Clock, 
  Calendar,
  Zap,
  Brain,
  Smartphone,
  Globe,
  Shield,
  BarChart3,
  Users,
  Rocket
} from 'lucide-react';

const Roadmap = () => {
  const quarters = [
    {
      quarter: 'Q1 2025',
      status: 'completed',
      title: 'Foundation & Core Features',
      items: [
        { icon: BarChart3, title: 'Advanced Stock Screener', description: 'Multi-criteria filtering with 50+ parameters', status: 'completed' },
        { icon: Users, title: 'User Dashboard', description: 'Personalized market overview and portfolio tracking', status: 'completed' },
        { icon: Globe, title: 'Real-time Market Data', description: 'Live price feeds and market statistics', status: 'completed' },
        { icon: Shield, title: 'Security Infrastructure', description: 'Enterprise-grade security and data protection', status: 'completed' }
      ]
    },
    {
      quarter: 'Q2 2025',
      status: 'in-progress',
      title: 'Enhanced Analytics & AI',
      items: [
        { icon: Brain, title: 'AI-Powered Recommendations', description: 'Machine learning stock suggestions', status: 'in-progress' },
        { icon: BarChart3, title: 'Advanced Charting', description: 'Professional technical analysis tools', status: 'in-progress' },
        { icon: Zap, title: 'Smart Alerts', description: 'Intelligent notifications and custom triggers', status: 'planned' },
        { icon: Users, title: 'Social Trading Features', description: 'Community insights and sentiment analysis', status: 'planned' }
      ]
    },
    {
      quarter: 'Q3 2025',
      status: 'planned',
      title: 'Mobile & Global Expansion',
      items: [
        { icon: Smartphone, title: 'Native Mobile Apps', description: 'iOS and Android applications', status: 'planned' },
        { icon: Globe, title: 'International Markets', description: 'European and Asian stock exchanges', status: 'planned' },
        { icon: Brain, title: 'Options & Derivatives', description: 'Advanced options analysis tools', status: 'planned' },
        { icon: BarChart3, title: 'Portfolio Analytics', description: 'Risk management and performance attribution', status: 'planned' }
      ]
    },
    {
      quarter: 'Q4 2025',
      status: 'planned',
      title: 'Enterprise & Integration',
      items: [
        { icon: Rocket, title: 'API Platform', description: 'RESTful APIs for third-party integrations', status: 'planned' },
        { icon: Shield, title: 'Enterprise Features', description: 'Team management and admin controls', status: 'planned' },
        { icon: Brain, title: 'Custom AI Models', description: 'Personalized machine learning algorithms', status: 'planned' },
        { icon: Users, title: 'Institutional Tools', description: 'Professional-grade institutional features', status: 'planned' }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-amber-500" />;
      default:
        return <Calendar className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-emerald-100 text-emerald-800">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-amber-100 text-amber-800">In Progress</Badge>;
      default:
        return <Badge variant="outline">Planned</Badge>;
    }
  };

  const getQuarterBadge = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-600';
      case 'in-progress':
        return 'bg-amber-500';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <Badge className="bg-emerald-600 text-white mb-6 px-4 py-2">
            Product Roadmap
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Future of Stock Analysis
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what we're building next. Our roadmap is driven by user feedback and the latest 
            advancements in financial technology and artificial intelligence.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
                <div className="text-slate-600">Features Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500 mb-2">8</div>
                <div className="text-slate-600">In Development</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-400 mb-2">12</div>
                <div className="text-slate-600">Planned Features</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Development Timeline
            </h2>
            <p className="text-lg text-slate-600">
              Our quarterly development milestones and feature releases
            </p>
          </div>

          <div className="space-y-8">
            {quarters.map((quarter, quarterIndex) => (
              <div key={quarterIndex} className="relative">
                {/* Timeline connector */}
                {quarterIndex < quarters.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-slate-200 -z-10"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Quarter Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 ${getQuarterBadge(quarter.status)} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                    {quarterIndex + 1}
                  </div>
                  
                  {/* Quarter Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-2xl font-bold text-slate-900">{quarter.quarter}</h3>
                        {getStatusBadge(quarter.status)}
                      </div>
                      <p className="text-lg text-slate-600">{quarter.title}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {quarter.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <Card key={itemIndex} className="border-slate-200 hover:shadow-md transition-shadow">
                            <CardHeader className="pb-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-emerald-600" />
                                  </div>
                                  <CardTitle className="text-lg font-semibold text-slate-900">
                                    {item.title}
                                  </CardTitle>
                                </div>
                                {getStatusIcon(item.status)}
                              </div>
                              <CardDescription className="text-slate-600 mt-2">
                                {item.description}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <CardContent className="p-12 text-center">
            <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Beyond 2025: Our Vision
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We're working towards creating the most comprehensive and intelligent stock analysis platform, 
              powered by AI and designed for the next generation of investors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-800 rounded-lg p-6">
                <Brain className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">AI-First Platform</h3>
                <p className="text-slate-300 text-sm">
                  Advanced machine learning models for predictive analytics and automated trading strategies.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Globe className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Global Markets</h3>
                <p className="text-slate-300 text-sm">
                  Complete coverage of worldwide stock exchanges and alternative investment platforms.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Users className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
                <p className="text-slate-300 text-sm">
                  Social trading features and community insights to democratize investment knowledge.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Help Shape Our Roadmap
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Your feedback drives our product development. Let us know what features 
              you'd like to see next and how we can better serve your trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors">
                Submit Feature Request
              </Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-700 px-6 py-3 text-base cursor-pointer hover:bg-slate-50 transition-colors">
                Join Beta Program
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;