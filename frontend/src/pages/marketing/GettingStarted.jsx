import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  Settings, 
  Search, 
  Eye, 
  Bell,
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Play,
  Book,
  Video
} from 'lucide-react';

const GettingStarted = () => {
  const quickStart = [
    {
      step: 1,
      icon: UserPlus,
      title: 'Create Your Account',
      description: 'Sign up for free and complete your profile setup in under 2 minutes.',
      action: 'Sign Up Now',
      link: '/signup'
    },
    {
      step: 2,
      icon: Settings,
      title: 'Configure Preferences',
      description: 'Set your trading preferences, risk tolerance, and notification settings.',
      action: 'View Settings',
      link: '/user-settings'
    },
    {
      step: 3,
      icon: Search,
      title: 'Start Screening',
      description: 'Use our stock screener to find stocks that match your investment criteria.',
      action: 'Open Scanner',
      link: '/scanner'
    },
    {
      step: 4,
      icon: Eye,
      title: 'Build Watchlists',
      description: 'Add interesting stocks to your watchlist for detailed monitoring.',
      action: 'Create Watchlist',
      link: '/watchlist'
    }
  ];

  const tutorials = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides covering all major features',
      duration: '2-5 min each',
      topics: ['Stock Screening Basics', 'Advanced Filtering', 'Setting Up Alerts', 'Reading Charts']
    },
    {
      icon: Book,
      title: 'User Guide',
      description: 'Comprehensive written documentation with screenshots',
      duration: '15 min read',
      topics: ['Platform Overview', 'Feature Explanations', 'Best Practices', 'Troubleshooting']
    },
    {
      icon: Play,
      title: 'Interactive Demo',
      description: 'Hands-on walkthrough with sample data and guided tours',
      duration: '10 min',
      topics: ['Live Demo', 'Sample Portfolios', 'Feature Highlights', 'Q&A Session']
    }
  ];

  const commonTasks = [
    {
      icon: Search,
      title: 'Screen for Growth Stocks',
      description: 'Find stocks with strong revenue growth and momentum',
      steps: ['Open Stock Scanner', 'Filter by Revenue Growth > 15%', 'Add Volume > 1M shares', 'Sort by Price Performance']
    },
    {
      icon: Bell,
      title: 'Set Price Alerts',
      description: 'Get notified when stocks hit your target prices',
      steps: ['Add stock to watchlist', 'Click alert icon', 'Set price threshold', 'Choose notification method']
    },
    {
      icon: BarChart3,
      title: 'Analyze Stock Charts',
      description: 'Use technical analysis to time your trades',
      steps: ['Open stock detail page', 'Select chart timeframe', 'Add technical indicators', 'Identify patterns']
    },
    {
      icon: TrendingUp,
      title: 'Track Portfolio Performance',
      description: 'Monitor your investments and analyze returns',
      steps: ['Add positions to portfolio', 'Set cost basis', 'Monitor daily P&L', 'Review performance metrics']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <Badge className="bg-emerald-600 text-white mb-6 px-4 py-2">
            Getting Started Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Welcome to StockScan Pro
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get up and running in minutes with our comprehensive onboarding guide. 
            From setup to your first successful trade, we'll guide you every step of the way.
          </p>
        </div>

        {/* Quick Start */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Quick Start in 4 Steps
            </h2>
            <p className="text-lg text-slate-600">
              Complete these steps to start using StockScan Pro effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickStart.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                      <Link to={step.link}>
                        {step.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-slate-600">
              Choose your preferred way to learn the platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => {
              const Icon = tutorial.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {tutorial.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {tutorial.description}
                    </CardDescription>
                    <Badge variant="outline" className="w-fit mt-2">
                      {tutorial.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {tutorial.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Common Tasks */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Common Tasks
            </h2>
            <p className="text-lg text-slate-600">
              Learn how to perform the most popular actions on the platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonTasks.map((task, index) => {
              const Icon = task.icon;
              return (
                <Card key={index} className="border-slate-200">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-slate-900">
                          {task.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 text-sm">
                          {task.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {task.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-6 h-6 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                            {stepIndex + 1}
                          </div>
                          {step}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Support Section */}
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Need Help?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Choose from multiple support options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4" asChild>
                <Link to="/help-center">
                  Visit Help Center
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 px-8 py-4" asChild>
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GettingStarted;