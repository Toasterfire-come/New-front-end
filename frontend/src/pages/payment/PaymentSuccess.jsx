import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Download, 
  Mail, 
  Calendar,
  CreditCard,
  ArrowRight,
  Smartphone,
  BarChart3,
  Users
} from 'lucide-react';

const PaymentSuccess = () => {
  const [orderNumber] = useState(`SS${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti effect after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextSteps = [
    {
      icon: BarChart3,
      title: 'Explore the Dashboard',
      description: 'Get familiar with your personalized market overview and portfolio tracking tools.',
      action: 'Go to Dashboard',
      link: '/dashboard'
    },
    {
      icon: Users,
      title: 'Join the Community',
      description: 'Connect with other traders and access exclusive insights and discussions.',
      action: 'View Community',
      link: '/community'
    },
    {
      icon: Smartphone,
      title: 'Download Mobile App',
      description: 'Take StockScan Pro with you anywhere with our mobile applications.',
      action: 'Get Apps',
      link: '/mobile'
    }
  ];

  const features = [
    'Unlimited stock watchlists',
    'Real-time market data',
    'Advanced screening tools',
    'Portfolio analytics',
    'Priority support',
    'Mobile app access'
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-pulse">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Success Header */}
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-emerald-600" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Payment Successful! 🎉
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Welcome to StockScan Pro! Your account has been upgraded and you now have access to all premium features.
              </p>
              <Badge className="bg-emerald-600 text-white text-lg px-6 py-2">
                Order #{orderNumber}
              </Badge>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Order Details
                </CardTitle>
                <CardDescription>
                  Your purchase summary and account information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-600">Plan</div>
                      <div className="font-medium text-slate-900">Professional</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Billing Cycle</div>
                      <div className="font-medium text-slate-900">Monthly</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Amount Paid</div>
                      <div className="font-medium text-slate-900">$31.32</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Payment Method</div>
                      <div className="font-medium text-slate-900">PayPal</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Next billing date:</span>
                    <span className="font-medium text-slate-900">
                      {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Account status:</span>
                    <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium text-slate-900 mb-3">Features Included:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/billing-history">
                      <Download className="w-4 h-4 mr-2" />
                      Download Receipt
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* What's Next */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  What's Next?
                </CardTitle>
                <CardDescription>
                  Get started with your new premium features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 mb-1">{step.title}</h4>
                          <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                            <Link to={step.link}>
                              {step.action}
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Email Confirmation */}
          <Card className="border-slate-200 bg-blue-50">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Confirmation Email Sent
              </h3>
              <p className="text-slate-600 mb-4">
                We've sent a confirmation email with your receipt and account details to your registered email address.
              </p>
              <p className="text-sm text-slate-500">
                Don't see it? Check your spam folder or{' '}
                <button className="text-blue-600 hover:underline">
                  resend confirmation
                </button>
              </p>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="border-slate-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Need Help Getting Started?
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Our support team is here to help you make the most of your StockScan Pro subscription.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="px-8" asChild>
                  <Link to="/help-center">
                    Visit Help Center
                  </Link>
                </Button>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8" asChild>
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;