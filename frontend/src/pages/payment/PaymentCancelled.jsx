import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  XCircle, 
  ArrowLeft, 
  RefreshCw,
  CreditCard,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const PaymentCancelled = () => {
  const troubleshootingSteps = [
    {
      title: 'Check your PayPal account',
      description: 'Ensure your PayPal account has sufficient funds or linked payment methods.'
    },
    {
      title: 'Verify payment limits',
      description: 'Check if you\'ve reached any daily or monthly spending limits on your account.'
    },
    {
      title: 'Clear browser cache',
      description: 'Clear your browser cache and cookies, then try the payment process again.'
    },
    {
      title: 'Try a different browser',
      description: 'Sometimes browser extensions or settings can interfere with payments.'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team instantly',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message about your issue',
      availability: 'Response within 2 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with a payment specialist',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-12 h-12 text-red-600" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Payment Cancelled
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Your payment was not processed. Don't worry, no charges were made to your account.
              </p>
              <Badge variant="outline" className="text-red-600 border-red-200">
                No charges applied
              </Badge>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What Happened */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  What Happened?
                </CardTitle>
                <CardDescription>
                  Common reasons why payments get cancelled
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 mb-4">
                  Payment cancellations can happen for several reasons. Here are the most common causes:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="font-medium text-slate-900 mb-1">Payment Method Issues</div>
                    <div className="text-sm text-slate-600">
                      Insufficient funds, expired cards, or payment limits reached.
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="font-medium text-slate-900 mb-1">User Cancellation</div>
                    <div className="text-sm text-slate-600">
                      You may have cancelled the payment during the checkout process.
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="font-medium text-slate-900 mb-1">Technical Issues</div>
                    <div className="text-sm text-slate-600">
                      Network timeouts or payment processor temporary issues.
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="font-medium text-slate-900 mb-1">Security Measures</div>
                    <div className="text-sm text-slate-600">
                      Your bank or PayPal may have flagged the transaction for verification.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Troubleshooting Steps
                </CardTitle>
                <CardDescription>
                  Try these solutions before contacting support
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {troubleshootingSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 mb-1">{step.title}</div>
                        <div className="text-sm text-slate-600">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <Card className="border-slate-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                What would you like to do?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white p-6 h-auto flex flex-col space-y-2"
                  asChild
                >
                  <Link to="/paypal-checkout">
                    <CreditCard className="w-8 h-8" />
                    <span className="text-lg font-medium">Try Payment Again</span>
                    <span className="text-sm opacity-80">Retry with same plan</span>
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="p-6 h-auto flex flex-col space-y-2"
                  asChild
                >
                  <Link to="/premium-plans">
                    <ArrowLeft className="w-8 h-8" />
                    <span className="text-lg font-medium">Choose Different Plan</span>
                    <span className="text-sm text-slate-500">View all options</span>
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="p-6 h-auto flex flex-col space-y-2"
                  asChild
                >
                  <Link to="/dashboard">
                    <ArrowLeft className="w-8 h-8" />
                    <span className="text-lg font-medium">Continue Free</span>
                    <span className="text-sm text-slate-500">Use free features</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Options */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900 text-center">
                Still Need Help?
              </CardTitle>
              <CardDescription className="text-center">
                Our support team is here to assist you with payment issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {supportOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h4 className="font-medium text-slate-900 mb-2">{option.title}</h4>
                      <p className="text-sm text-slate-600 mb-2">{option.description}</p>
                      <Badge variant="outline" className="text-xs mb-3">
                        {option.availability}
                      </Badge>
                      <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        {option.action}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="border-slate-200 bg-slate-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <div className="font-medium text-slate-900 mb-1">Are there any fees for failed payments?</div>
                  <div className="text-sm text-slate-600">No, we don't charge any fees for cancelled or failed payments.</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900 mb-1">Can I use a different payment method?</div>
                  <div className="text-sm text-slate-600">Currently we support PayPal, but more payment options are coming soon.</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900 mb-1">How long before I can try again?</div>
                  <div className="text-sm text-slate-600">You can retry immediately. There are no waiting periods.</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900 mb-1">What if my payment keeps failing?</div>
                  <div className="text-sm text-slate-600">Contact our support team for personalized assistance.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;