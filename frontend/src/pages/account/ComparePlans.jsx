import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star,
  Zap,
  Crown,
  ArrowRight,
  Info,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Headphones,
  Database,
  Code,
  TrendingUp
} from 'lucide-react';

const ComparePlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for beginners',
      icon: Star,
      popular: false,
      highlight: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 29, annual: 290 },
      description: 'For serious traders',
      icon: Zap,
      popular: true,
      highlight: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 99, annual: 990 },
      description: 'For institutions',
      icon: Crown,
      popular: false,
      highlight: false
    }
  ];

  const featureCategories = [
    {
      category: 'Market Data & Research',
      icon: BarChart3,
      features: [
        {
          name: 'Market Data Delay',
          starter: '15-minute delay',
          professional: 'Real-time',
          enterprise: 'Real-time + Level 2',
          info: 'Real-time data provides current market prices for better trading decisions'
        },
        {
          name: 'Historical Data',
          starter: '1 year',
          professional: '5+ years',
          enterprise: '10+ years',
          info: 'Access to historical price data for backtesting and analysis'
        },
        {
          name: 'Number of Markets',
          starter: 'US only',
          professional: 'US + International',
          enterprise: 'Global coverage',
          info: 'Geographic coverage of stock exchanges and markets'
        },
        {
          name: 'News & Research',
          starter: 'Basic news',
          professional: 'Premium news + Analysis',
          enterprise: 'All sources + Custom feeds',
          info: 'Access to market news, research reports, and analyst recommendations'
        },
        {
          name: 'Economic Indicators',
          starter: false,
          professional: true,
          enterprise: true,
          info: 'GDP, inflation, employment data and other economic metrics'
        },
        {
          name: 'Options Data',
          starter: false,
          professional: false,
          enterprise: true,
          info: 'Options chains, implied volatility, and derivatives data'
        }
      ]
    },
    {
      category: 'Screening & Analysis',
      icon: TrendingUp,
      features: [
        {
          name: 'Stock Screener Filters',
          starter: '10 filters',
          professional: '50+ filters',
          enterprise: 'Unlimited + Custom',
          info: 'Number of criteria you can use to filter stocks'
        },
        {
          name: 'Saved Screens',
          starter: '3 screens',
          professional: 'Unlimited',
          enterprise: 'Unlimited + Sharing',
          info: 'Save your favorite screening criteria for quick access'
        },
        {
          name: 'Technical Indicators',
          starter: 'Basic (5)',
          professional: 'Advanced (50+)',
          enterprise: 'All + Custom indicators',
          info: 'Technical analysis tools like moving averages, RSI, MACD'
        },
        {
          name: 'Chart Types',
          starter: 'Line charts only',
          professional: 'All chart types',
          enterprise: 'All + Custom studies',
          info: 'Candlestick, bar charts, point & figure, and more'
        },
        {
          name: 'Backtesting',
          starter: false,
          professional: 'Basic',
          enterprise: 'Advanced + Reports',
          info: 'Test your strategies against historical market data'
        },
        {
          name: 'Strategy Builder',
          starter: false,
          professional: false,
          enterprise: true,
          info: 'Create and test custom trading strategies'
        }
      ]
    },
    {
      category: 'Portfolio & Tracking',
      icon: Database,
      features: [
        {
          name: 'Watchlists',
          starter: '3 lists (10 stocks each)',
          professional: 'Unlimited',
          enterprise: 'Unlimited + Team sharing',
          info: 'Track your favorite stocks and monitor performance'
        },
        {
          name: 'Portfolio Tracking',
          starter: 'Basic tracking',
          professional: 'Advanced analytics',
          enterprise: 'Institutional-grade',
          info: 'Monitor your investments with performance analytics'
        },
        {
          name: 'Alerts & Notifications',
          starter: 'Email only',
          professional: 'Email + SMS + Push',
          enterprise: 'All methods + API',
          info: 'Get notified when stocks hit your target prices or conditions'
        },
        {
          name: 'Risk Analysis',
          starter: false,
          professional: 'Basic risk metrics',
          enterprise: 'Advanced risk management',
          info: 'Value at Risk, beta analysis, correlation studies'
        },
        {
          name: 'Performance Attribution',
          starter: false,
          professional: false,
          enterprise: true,
          info: 'Understand what drives your portfolio performance'
        }
      ]
    },
    {
      category: 'Platform & Access',
      icon: Smartphone,
      features: [
        {
          name: 'Web Platform',
          starter: true,
          professional: true,
          enterprise: true,
          info: 'Access via any web browser'
        },
        {
          name: 'Mobile Apps',
          starter: 'Basic features',
          professional: 'Full features',
          enterprise: 'Full + Premium features',
          info: 'iOS and Android applications'
        },
        {
          name: 'API Access',
          starter: false,
          professional: false,
          enterprise: true,
          info: 'Programmatic access to data and features'
        },
        {
          name: 'Data Export',
          starter: false,
          professional: 'CSV, Excel',
          enterprise: 'All formats + API',
          info: 'Download your data in various formats'
        },
        {
          name: 'White-label Solution',
          starter: false,
          professional: false,
          enterprise: true,
          info: 'Customize the platform with your branding'
        }
      ]
    },
    {
      category: 'Support & Training',
      icon: Headphones,
      features: [
        {
          name: 'Support Channels',
          starter: 'Community forum',
          professional: 'Email + Chat',
          enterprise: 'All + Phone + Dedicated AM',
          info: 'How you can get help when you need it'
        },
        {
          name: 'Response Time',
          starter: 'Best effort',
          professional: '< 24 hours',
          enterprise: '< 4 hours + SLA',
          info: 'How quickly we respond to your support requests'
        },
        {
          name: 'Training & Onboarding',
          starter: 'Self-service',
          professional: 'Video tutorials',
          enterprise: 'Personal training sessions',
          info: 'Help getting started and learning advanced features'
        },
        {
          name: 'Account Management',
          starter: false,
          professional: false,
          enterprise: 'Dedicated manager',
          info: 'Personal point of contact for your account'
        }
      ]
    },
    {
      category: 'Team & Collaboration',
      icon: Users,
      features: [
        {
          name: 'User Seats',
          starter: '1 user',
          professional: '1 user',
          enterprise: 'Up to 25 users',
          info: 'Number of people who can access the account'
        },
        {
          name: 'Team Sharing',
          starter: false,
          professional: false,
          enterprise: 'Watchlists, screens, reports',
          info: 'Share analysis and research with team members'
        },
        {
          name: 'Admin Controls',
          starter: false,
          professional: false,
          enterprise: 'User management + permissions',
          info: 'Control who has access to what features'
        },
        {
          name: 'Usage Analytics',
          starter: false,
          professional: false,
          enterprise: 'Team usage reports',
          info: 'Track how your team uses the platform'
        }
      ]
    }
  ];

  const getPlanPrice = (plan) => {
    const price = plan.price[billingCycle];
    if (price === 0) return 'Free';
    
    if (billingCycle === 'annual') {
      const monthlyEquivalent = price / 12;
      return `$${monthlyEquivalent.toFixed(0)}/mo`;
    }
    
    return `$${price}/mo`;
  };

  const renderFeatureValue = (value, planId) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-slate-300 mx-auto" />
      );
    }
    
    return (
      <span className={`text-sm ${planId === 'professional' ? 'font-medium' : ''}`}>
        {value}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Compare Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Find Your Perfect Plan
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare all features across our plans to choose the one that best fits your trading needs and budget.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1 rounded-lg flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                billingCycle === 'annual'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual
              <Badge className="ml-2 bg-emerald-600 text-white text-xs">Save 17%</Badge>
            </button>
          </div>
        </div>

        {/* Plans Header */}
        <Card className="border-slate-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-6 px-6 w-1/4">
                      <div className="text-lg font-semibold text-slate-900">Plans</div>
                      <div className="text-sm text-slate-600">Features comparison</div>
                    </th>
                    {plans.map((plan, index) => {
                      const Icon = plan.icon;
                      return (
                        <th key={plan.id} className={`text-center py-6 px-4 relative ${plan.highlight ? 'bg-emerald-50' : ''}`}>
                          {plan.popular && (
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs">
                              Most Popular
                            </Badge>
                          )}
                          <div className="space-y-4">
                            <div className="flex flex-col items-center space-y-2">
                              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                                <Icon className="w-6 h-6 text-emerald-600" />
                              </div>
                              <div className="text-lg font-semibold text-slate-900">{plan.name}</div>
                              <div className="text-sm text-slate-600">{plan.description}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-slate-900">{getPlanPrice(plan)}</div>
                              {billingCycle === 'annual' && plan.price.annual > 0 && (
                                <div className="text-xs text-slate-500">
                                  ${plan.price.annual}/year
                                </div>
                              )}
                            </div>
                            <Button 
                              className={`w-full ${
                                plan.popular 
                                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                                  : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                              }`}
                              asChild
                            >
                              <Link to={plan.id === 'starter' ? '/signup' : '/paypal-checkout'}>
                                {plan.id === 'starter' ? 'Get Started' : 'Choose Plan'}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Feature Comparison */}
        <div className="space-y-8">
          {featureCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
                    <Icon className="w-5 h-5 mr-3 text-emerald-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-4 px-6 w-1/4">
                              <div className="flex items-start space-x-2">
                                <div>
                                  <div className="font-medium text-slate-900">{feature.name}</div>
                                  {feature.info && (
                                    <div className="text-xs text-slate-500 mt-1 flex items-start space-x-1">
                                      <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                      <span>{feature.info}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              {renderFeatureValue(feature.starter, 'starter')}
                            </td>
                            <td className="py-4 px-4 text-center bg-emerald-50">
                              {renderFeatureValue(feature.professional, 'professional')}
                            </td>
                            <td className="py-4 px-4 text-center">
                              {renderFeatureValue(feature.enterprise, 'enterprise')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust StockScan Pro for their market analysis and trading decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900 text-center">
              Have Questions?
            </CardTitle>
            <CardDescription className="text-center">
              Common questions about our plans and features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Can I switch plans anytime?</h4>
                  <p className="text-sm text-slate-600">Yes, you can upgrade or downgrade at any time. Changes take effect at your next billing cycle.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Is there a setup fee?</h4>
                  <p className="text-sm text-slate-600">No setup fees for any plan. You only pay the monthly or annual subscription fee.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">What happens to my data if I downgrade?</h4>
                  <p className="text-sm text-slate-600">Your data is preserved. You'll just lose access to premium features until you upgrade again.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Do you offer custom plans?</h4>
                  <p className="text-sm text-slate-600">Yes, for large teams or unique requirements, we can create custom enterprise solutions.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Is the data real-time?</h4>
                  <p className="text-sm text-slate-600">Professional and Enterprise plans include real-time data. Starter has 15-minute delays.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Can I try before I buy?</h4>
                  <p className="text-sm text-slate-600">Yes! We offer a 14-day free trial of the Professional plan for new users.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComparePlans;