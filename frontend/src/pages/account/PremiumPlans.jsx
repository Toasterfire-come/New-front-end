import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Zap, 
  Crown, 
  Star,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Headphones,
  Globe,
  ArrowRight
} from 'lucide-react';

const PremiumPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [currentPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for beginners exploring the market',
      icon: Star,
      popular: false,
      features: [
        '3 watchlists (10 stocks each)',
        'Basic market data (15-minute delay)',
        'Simple stock screener',
        'Email alerts',
        'Mobile app access',
        'Community support'
      ],
      limitations: [
        'Limited to 3 custom screens',
        'No advanced indicators',
        'No portfolio analytics',
        'Basic customer support'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 29, annual: 290 },
      description: 'For serious traders and active investors',
      icon: Zap,
      popular: true,
      features: [
        'Unlimited watchlists',
        'Real-time market data',
        'Advanced stock screening (50+ filters)',
        'Portfolio analytics & tracking',
        'Technical indicators & charts',
        'Price & volume alerts',
        'Mobile app with all features',
        'Priority email support',
        'Export data (CSV, Excel)',
        'Advanced news filtering'
      ],
      limitations: [
        'No API access',
        'Standard support hours'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 99, annual: 990 },
      description: 'For institutions and professional teams',
      icon: Crown,
      popular: false,
      features: [
        'Everything in Professional',
        'REST API access',
        'Custom indicators & strategies',
        'White-label solutions',
        'Team management (up to 25 users)',
        'Advanced portfolio analytics',
        'Custom data exports',
        'Dedicated account manager',
        '24/7 phone support',
        'Priority feature requests',
        'Custom integrations',
        'SLA guarantee (99.9% uptime)'
      ],
      limitations: []
    }
  ];

  const getPlanPrice = (plan) => {
    const price = plan.price[billingCycle];
    if (price === 0) return 'Free';
    
    if (billingCycle === 'annual') {
      const monthlyEquivalent = price / 12;
      return (
        <>
          <span className="text-4xl font-bold">${monthlyEquivalent.toFixed(0)}</span>
          <span className="text-lg text-slate-600">/month</span>
          <div className="text-sm text-emerald-600 font-medium">
            Billed annually (${price}/year)
          </div>
        </>
      );
    }
    
    return (
      <>
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-lg text-slate-600">/month</span>
      </>
    );
  };

  const getSavings = (plan) => {
    if (plan.price.annual === 0) return null;
    const monthlyCost = plan.price.monthly * 12;
    const savings = monthlyCost - plan.price.annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  const featureCategories = [
    {
      category: 'Market Data',
      icon: BarChart3,
      features: [
        { name: 'Real-time quotes', starter: false, professional: true, enterprise: true },
        { name: 'Historical data (5+ years)', starter: false, professional: true, enterprise: true },
        { name: 'Level 2 market data', starter: false, professional: false, enterprise: true },
        { name: 'Options data', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: 'Analysis Tools',
      icon: Zap,
      features: [
        { name: 'Basic screener', starter: true, professional: true, enterprise: true },
        { name: 'Advanced screener (50+ filters)', starter: false, professional: true, enterprise: true },
        { name: 'Technical indicators', starter: false, professional: true, enterprise: true },
        { name: 'Custom indicators', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: 'Support',
      icon: Headphones,
      features: [
        { name: 'Community support', starter: true, professional: true, enterprise: true },
        { name: 'Email support', starter: false, professional: true, enterprise: true },
        { name: 'Priority support', starter: false, professional: false, enterprise: true },
        { name: '24/7 phone support', starter: false, professional: false, enterprise: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Premium Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Unlock the full potential of StockScan Pro with real-time data, 
            advanced analytics, and professional trading tools.
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const savings = getSavings(plan);
            const isCurrentPlan = plan.id === currentPlan;
            
            return (
              <Card 
                key={plan.id} 
                className={`border-slate-200 relative transition-all hover:shadow-lg ${
                  plan.popular 
                    ? 'ring-2 ring-emerald-500 shadow-xl scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="py-4">
                    <div className="text-center">
                      {getPlanPrice(plan)}
                    </div>
                    {savings && billingCycle === 'annual' && (
                      <div className="text-sm text-emerald-600 font-medium mt-1">
                        Save ${savings.amount} ({savings.percentage}%)
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Features included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start space-x-2 text-sm">
                              <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                                <div className="w-1 h-1 bg-slate-400 rounded-full mx-auto mt-1.5" />
                              </div>
                              <span className="text-slate-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {isCurrentPlan ? (
                    <Button 
                      className="w-full bg-slate-200 text-slate-700 cursor-default" 
                      disabled
                    >
                      Current Plan
                    </Button>
                  ) : (
                    <Button 
                      className={`w-full ${
                        plan.popular
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                      }`}
                      asChild
                    >
                      <Link to="/paypal-checkout">
                        {plan.id === 'starter' ? 'Get Started Free' : `Upgrade to ${plan.name}`}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 text-center">
              Detailed Feature Comparison
            </CardTitle>
            <CardDescription className="text-center">
              Compare features across all plans to find the perfect fit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-900 w-1/3">Features</th>
                    <th className="text-center py-3 px-4 font-medium text-slate-900">Starter</th>
                    <th className="text-center py-3 px-4 font-medium text-slate-900 bg-emerald-50">Professional</th>
                    <th className="text-center py-3 px-4 font-medium text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-slate-50">
                        <td colSpan="4" className="py-3 px-4 font-medium text-slate-900">
                          <div className="flex items-center space-x-2">
                            <category.icon className="w-4 h-4 text-emerald-600" />
                            <span>{category.category}</span>
                          </div>
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-slate-100">
                          <td className="py-3 px-4 text-slate-600">{feature.name}</td>
                          <td className="py-3 px-4 text-center">
                            {feature.starter ? (
                              <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto bg-slate-200 rounded-full" />
                            )}
                          </td>
                          <td className="py-3 px-4 text-center bg-emerald-50">
                            {feature.professional ? (
                              <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto bg-slate-200 rounded-full" />
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {feature.enterprise ? (
                              <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto bg-slate-200 rounded-full" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900 text-center">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Can I change plans anytime?</h4>
                  <p className="text-sm text-slate-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Is there a free trial?</h4>
                  <p className="text-sm text-slate-600">Yes, we offer a 14-day free trial of the Professional plan for new users.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-slate-600">Currently we accept PayPal. More payment options coming soon.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Do you offer refunds?</h4>
                  <p className="text-sm text-slate-600">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Is my data secure?</h4>
                  <p className="text-sm text-slate-600">Absolutely. We use bank-level encryption and security measures to protect your data.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-slate-600">Yes, you can cancel your subscription at any time without penalties.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Sales */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              For large organizations or unique requirements, we offer custom enterprise solutions 
              with dedicated support and specialized features.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8" asChild>
              <Link to="/contact">
                Contact Sales Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PremiumPlans;