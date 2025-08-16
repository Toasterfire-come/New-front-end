import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone,
  Mail,
  Video,
  FileText,
  HelpCircle,
  TrendingUp,
  Users,
  Settings,
  CreditCard,
  Shield,
  Smartphone
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: TrendingUp,
      title: 'Getting Started',
      description: 'Learn the basics of using StockScan Pro',
      articles: 25,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: BookOpen,
      title: 'Stock Screening',
      description: 'Advanced filtering and search techniques',
      articles: 18,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Profile settings and account preferences',
      articles: 12,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Billing & Payments',
      description: 'Subscription plans and payment issues',
      articles: 15,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Using StockScan Pro on mobile devices',
      articles: 8,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Data protection and account security',
      articles: 10,
      color: 'bg-red-100 text-red-600'
    }
  ];

  const popularArticles = [
    {
      title: 'How to create your first stock screen',
      category: 'Getting Started',
      views: '12.5K views',
      readTime: '5 min read'
    },
    {
      title: 'Setting up price alerts and notifications',
      category: 'Features',
      views: '8.3K views',
      readTime: '3 min read'
    },
    {
      title: 'Understanding technical indicators',
      category: 'Advanced',
      views: '7.1K views',
      readTime: '8 min read'
    },
    {
      title: 'Managing your watchlists effectively',
      category: 'Organization',
      views: '6.9K views',
      readTime: '4 min read'
    },
    {
      title: 'Troubleshooting common login issues',
      category: 'Account',
      views: '5.2K views',
      readTime: '2 min read'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team instantly',
      availability: 'Available 24/7',
      responseTime: 'Usually responds in minutes',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Always available',
      responseTime: 'Response within 2 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with a specialist',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate assistance',
      action: 'Call Now'
    }
  ];

  const quickActions = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'User Manual',
      description: 'Complete documentation',
      link: '/manual'
    },
    {
      icon: Settings,
      title: 'Feature Requests',
      description: 'Suggest new features',
      link: '/feedback'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Common questions answered',
      link: '/faq'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            How can we help you today?
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to your questions, browse our documentation, or get in touch with our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to={action.link}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{action.title}</h3>
                    <p className="text-sm text-slate-600">{action.description}</p>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Categories */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600">
              Find help articles organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-xs">
                      {category.articles} articles
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Popular Articles
            </h2>
            <p className="text-lg text-slate-600">
              Most viewed help articles this week
            </p>
          </div>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 rounded-lg px-4 -mx-4 cursor-pointer transition-colors">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900 mb-1">{article.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span>{article.views}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <BookOpen className="w-5 h-5 text-slate-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Channels */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-slate-600">
              Contact our support team through your preferred channel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {channel.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">
                        <strong>Availability:</strong> {channel.availability}
                      </div>
                      <div className="text-sm text-slate-600">
                        <strong>Response Time:</strong> {channel.responseTime}
                      </div>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Status & Updates */}
        <Card className="border-slate-200 bg-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              System Status & Updates
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-600">All systems operational</span>
            </div>
            <p className="text-slate-600 mb-6">
              Stay updated on system status, maintenance windows, and service announcements.
            </p>
            <Button variant="outline" asChild>
              <Link to="/status">
                View System Status
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpCenter;