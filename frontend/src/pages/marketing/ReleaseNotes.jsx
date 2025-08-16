import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Sparkles, 
  Bug, 
  Zap, 
  Shield,
  BarChart3,
  Smartphone,
  Globe,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';

const ReleaseNotes = () => {
  const releases = [
    {
      version: '2.3.0',
      date: 'March 15, 2025',
      type: 'major',
      title: 'AI-Powered Recommendations & Enhanced Charting',
      features: [
        {
          icon: Sparkles,
          type: 'New',
          title: 'AI Stock Recommendations',
          description: 'Machine learning algorithms now analyze market patterns to suggest personalized stock picks based on your trading history and preferences.'
        },
        {
          icon: BarChart3,
          type: 'New',
          title: 'Advanced Technical Indicators',
          description: 'Added 15 new technical indicators including Bollinger Bands, MACD, RSI, and custom indicator builder.'
        },
        {
          icon: Zap,
          type: 'Enhancement',
          title: 'Faster Data Loading',
          description: 'Improved data loading performance by 60% with new caching system and optimized database queries.'
        },
        {
          icon: Bug,
          type: 'Fix',
          title: 'Watchlist Synchronization',
          description: 'Fixed issue where watchlist changes weren\'t syncing properly across devices.'
        }
      ]
    },
    {
      version: '2.2.1',
      date: 'February 28, 2025',
      type: 'patch',
      title: 'Bug Fixes & Performance Improvements',
      features: [
        {
          icon: Bug,
          type: 'Fix',
          title: 'Chart Loading Issues',
          description: 'Resolved intermittent chart loading failures and improved error handling.'
        },
        {
          icon: Zap,
          type: 'Enhancement',
          title: 'Mobile Responsiveness',
          description: 'Improved mobile experience with better touch controls and responsive layouts.'
        },
        {
          icon: Shield,
          type: 'Security',
          title: 'Enhanced Security',
          description: 'Updated authentication system with improved session management and security protocols.'
        }
      ]
    },
    {
      version: '2.2.0',
      date: 'February 10, 2025',
      type: 'major',
      title: 'Portfolio Analytics & Social Features',
      features: [
        {
          icon: BarChart3,
          type: 'New',
          title: 'Portfolio Performance Analytics',
          description: 'Comprehensive portfolio analysis with risk metrics, performance attribution, and benchmark comparisons.'
        },
        {
          icon: Users,
          type: 'New',
          title: 'Community Insights',
          description: 'See what stocks the community is watching and get sentiment analysis from social media and news.'
        },
        {
          icon: Globe,
          type: 'New',
          title: 'International Markets',
          description: 'Added support for European stock exchanges including LSE, Euronext, and DAX.'
        },
        {
          icon: Zap,
          type: 'Enhancement',
          title: 'Real-time Alerts',
          description: 'Improved alert system with customizable triggers and multiple notification channels.'
        }
      ]
    },
    {
      version: '2.1.0',
      date: 'January 20, 2025',
      type: 'major',
      title: 'Enhanced Screening & Mobile Experience',
      features: [
        {
          icon: Smartphone,
          type: 'New',
          title: 'Mobile Web App',
          description: 'Fully responsive mobile experience with touch-optimized controls and offline capabilities.'
        },
        {
          icon: BarChart3,
          type: 'Enhancement',
          title: 'Advanced Stock Screener',
          description: 'Added 25 new screening criteria including ESG scores, analyst ratings, and institutional holdings.'
        },
        {
          icon: Zap,
          type: 'Enhancement',
          title: 'Faster Search',
          description: 'Implemented new search algorithm that returns results 3x faster with improved relevance scoring.'
        },
        {
          icon: Bug,
          type: 'Fix',
          title: 'Data Export Issues',
          description: 'Fixed CSV export functionality and added new export formats including Excel and PDF.'
        }
      ]
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'New':
        return <Sparkles className="w-4 h-4" />;
      case 'Enhancement':
        return <Zap className="w-4 h-4" />;
      case 'Fix':
        return <Bug className="w-4 h-4" />;
      case 'Security':
        return <Shield className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'New':
        return <Badge className="bg-emerald-100 text-emerald-800 text-xs">{type}</Badge>;
      case 'Enhancement':
        return <Badge className="bg-blue-100 text-blue-800 text-xs">{type}</Badge>;
      case 'Fix':
        return <Badge className="bg-amber-100 text-amber-800 text-xs">{type}</Badge>;
      case 'Security':
        return <Badge className="bg-red-100 text-red-800 text-xs">{type}</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{type}</Badge>;
    }
  };

  const getVersionBadge = (type) => {
    switch (type) {
      case 'major':
        return <Badge className="bg-emerald-600 text-white">Major Release</Badge>;
      case 'minor':
        return <Badge className="bg-blue-600 text-white">Minor Release</Badge>;
      case 'patch':
        return <Badge variant="outline">Patch</Badge>;
      default:
        return <Badge variant="outline">Release</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <Badge className="bg-emerald-600 text-white mb-6 px-4 py-2">
            Release Notes
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What's New in StockScan Pro
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay up to date with the latest features, improvements, and bug fixes. 
            We're constantly evolving to provide you with the best trading experience.
          </p>
        </div>

        {/* Current Version Highlight */}
        <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Latest Version: {releases[0].version}</h2>
                <p className="text-slate-600">Released on {releases[0].date}</p>
              </div>
              {getVersionBadge(releases[0].type)}
            </div>
            <p className="text-lg text-slate-700 mb-4">{releases[0].title}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {releases[0].features.slice(0, 2).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-slate-200">
                    <div className="bg-emerald-100 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-slate-900">{feature.title}</span>
                        {getTypeBadge(feature.type)}
                      </div>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Release Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Recent Releases
            </h2>
            <p className="text-lg text-slate-600">
              Detailed changelog of all features and improvements
            </p>
          </div>

          <div className="space-y-8">
            {releases.map((release, releaseIndex) => (
              <div key={releaseIndex} className="relative">
                {/* Timeline connector */}
                {releaseIndex < releases.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-slate-200"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Version Badge */}
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    v{release.version.split('.')[1]}
                  </div>
                  
                  {/* Release Content */}
                  <Card className="flex-1 border-slate-200">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold text-slate-900">
                            Version {release.version}
                          </CardTitle>
                          <CardDescription className="text-slate-600">
                            {release.date} • {release.title}
                          </CardDescription>
                        </div>
                        {getVersionBadge(release.type)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {release.features.map((feature, featureIndex) => {
                          const Icon = feature.icon;
                          return (
                            <div key={featureIndex} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                              <div className="flex items-center space-x-2 flex-shrink-0">
                                {getTypeIcon(feature.type)}
                                {getTypeBadge(feature.type)}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-slate-900 mb-1">{feature.title}</h4>
                                <p className="text-sm text-slate-600">{feature.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Development Activity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">45+</div>
                <div className="text-sm text-slate-600">Features Added</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                <div className="text-sm text-slate-600">Improvements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500 mb-2">85+</div>
                <div className="text-sm text-slate-600">Bugs Fixed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-sm text-slate-600">Security Updates</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get notified about new releases and be the first to try beta features. 
              Your feedback helps us build better tools for traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors">
                Subscribe to Updates
                <ArrowRight className="w-4 h-4 ml-2" />
              </Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-300 px-6 py-3 text-base cursor-pointer hover:bg-slate-700 transition-colors">
                Join Beta Program
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReleaseNotes;