import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  ArrowLeft,
  Lock,
  Globe,
  Clock
} from 'lucide-react';

const PayPalCheckout = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    professional: {
      name: 'Professional',
      price: 29,
      period: '/month',
      description: 'Perfect for active traders',
      features: [
        'Unlimited watchlists',
        'Real-time market data',
        'Advanced stock screening',
        'Portfolio analytics',
        'Priority email support',
        'Mobile app access'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 99,
      period: '/month',
      description: 'For institutional users',
      features: [
        'Everything in Professional',
        'API access',
        'Custom indicators',
        'White-label solution',
        'Dedicated account manager',
        'Phone support'
      ]
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to success page
      window.location.href = '/payment-success';
    }, 3000);
  };

  const currentPlan = plans[selectedPlan];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/premium-plans">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Plans
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Complete Your Purchase</h1>
            <p className="text-slate-600">Secure checkout with PayPal</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  Order Summary
                </CardTitle>
                <CardDescription>
                  Review your selected plan and billing details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plan Selection */}
                <div className="space-y-4">
                  <h3 className="font-medium text-slate-900">Select Plan</h3>
                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedPlan === key
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                      onClick={() => setSelectedPlan(key)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-slate-900">{plan.name}</div>
                          <div className="text-sm text-slate-600">{plan.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-900">
                            ${plan.price}
                            <span className="text-sm text-slate-600">{plan.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected Plan Features */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-3">What's Included</h4>
                  <ul className="space-y-2">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Billing Summary */}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>{currentPlan.name} Plan</span>
                    <span>${currentPlan.price}.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Tax</span>
                    <span>${(currentPlan.price * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-slate-900 border-t pt-2">
                    <span>Total</span>
                    <span>${(currentPlan.price * 1.08).toFixed(2)}{currentPlan.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  Payment Method
                </CardTitle>
                <CardDescription>
                  Secure payment powered by PayPal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Security Features */}
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-emerald-800">Secure Payment</span>
                  </div>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li className="flex items-center">
                      <Lock className="w-3 h-3 mr-2" />
                      256-bit SSL encryption
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-3 h-3 mr-2" />
                      PCI DSS compliant
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-3 h-3 mr-2" />
                      30-day money-back guarantee
                    </li>
                  </ul>
                </div>

                {/* PayPal Payment */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg mb-4">
                      PayPal
                    </div>
                    <p className="text-sm text-slate-600">
                      You'll be redirected to PayPal to complete your payment securely
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        Pay with PayPal - ${(currentPlan.price * 1.08).toFixed(2)}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By clicking "Pay with PayPal", you agree to our{' '}
                    <Link to="/terms" className="text-emerald-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-emerald-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                {/* Money Back Guarantee */}
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <Badge className="bg-emerald-100 text-emerald-800 mb-2">
                    30-Day Money-Back Guarantee
                  </Badge>
                  <p className="text-sm text-slate-600">
                    Not satisfied? Cancel anytime within 30 days for a full refund.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <Card className="border-slate-200 bg-white">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <Shield className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="text-sm font-medium text-slate-900">SSL Secured</div>
                  <div className="text-xs text-slate-500">Bank-level encryption</div>
                </div>
                <div className="space-y-2">
                  <Clock className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="text-sm font-medium text-slate-900">Instant Access</div>
                  <div className="text-xs text-slate-500">Start trading immediately</div>
                </div>
                <div className="space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="text-sm font-medium text-slate-900">Money Back</div>
                  <div className="text-xs text-slate-500">30-day guarantee</div>
                </div>
                <div className="space-y-2">
                  <Globe className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="text-sm font-medium text-slate-900">Global Support</div>
                  <div className="text-xs text-slate-500">24/7 assistance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PayPalCheckout;