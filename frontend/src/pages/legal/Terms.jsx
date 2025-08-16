import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  FileText, 
  Shield, 
  CreditCard, 
  Users, 
  AlertTriangle, 
  Scale,
  Mail,
  ExternalLink
} from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: 'Account Terms',
      content: [
        {
          subtitle: 'Account Creation',
          text: 'You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
        },
        {
          subtitle: 'Accurate Information',
          text: 'You agree to provide accurate, current, and complete information during registration and to update such information as necessary to keep it accurate and current.'
        },
        {
          subtitle: 'Account Security',
          text: 'You are responsible for safeguarding your password and for all activities under your account. You must notify us immediately of any unauthorized use of your account.'
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Billing and Payments',
      content: [
        {
          subtitle: 'Subscription Fees',
          text: 'Paid subscriptions are charged on a recurring basis. You authorize us to charge your payment method for all fees associated with your subscription plan.'
        },
        {
          subtitle: 'Payment Processing',
          text: 'All payments are processed securely through third-party payment processors. We do not store your payment information on our servers.'
        },
        {
          subtitle: 'Refund Policy',
          text: 'We offer a 30-day money-back guarantee for new subscriptions. Refunds are processed within 5-7 business days after approval.'
        },
        {
          subtitle: 'Price Changes',
          text: 'We may change subscription prices with at least 30 days notice. Price changes will not affect your current billing cycle but will apply to subsequent renewals.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Acceptable Use',
      content: [
        {
          subtitle: 'Permitted Use',
          text: 'You may use our service for lawful purposes related to stock analysis, market research, and investment decision-making. Commercial use requires an Enterprise subscription.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not: (a) reverse engineer or attempt to extract source code; (b) use automated systems to access our service; (c) interfere with our servers or networks; (d) violate any applicable laws or regulations.'
        },
        {
          subtitle: 'Data Usage',
          text: 'Market data provided through our service is for your personal use only. Redistribution, retransmission, or commercial use of market data requires separate licensing agreements.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        {
          subtitle: 'Our Rights',
          text: 'StockScan Pro and all related content, features, and functionality are owned by us and are protected by copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: 'Your Content',
          text: 'You retain ownership of any content you create using our service, such as custom watchlists and screening criteria. You grant us a license to use this content to provide our services.'
        },
        {
          subtitle: 'Third-Party Content',
          text: 'We may include content from third parties, such as news articles and market data. This content is subject to the intellectual property rights of its respective owners.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Terms of Service
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These Terms of Service govern your use of StockScan Pro and outline the rights 
            and responsibilities of both users and our company.
          </p>
          <div className="text-sm text-slate-500">
            Last updated: March 15, 2025 • Effective Date: March 15, 2025
          </div>
        </div>

        {/* Agreement Notice */}
        <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-white">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Agreement to Terms
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  By accessing or using StockScan Pro, you agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you do not agree to these terms, please do not use our service. 
                  These terms constitute a legally binding agreement between you and StockScan Pro.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Service Description
            </CardTitle>
            <CardDescription>
              What StockScan Pro provides and service limitations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              StockScan Pro is a financial technology platform that provides stock analysis tools, 
              market data, and research capabilities. Our service includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-600">
                <li>• Real-time and historical market data</li>
                <li>• Advanced stock screening tools</li>
                <li>• Portfolio tracking and analytics</li>
                <li>• Technical analysis indicators</li>
              </ul>
              <ul className="space-y-2 text-slate-600">
                <li>• Watchlist management</li>
                <li>• Market news and research</li>
                <li>• Custom alerts and notifications</li>
                <li>• Educational resources and tutorials</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> StockScan Pro provides information and tools for analysis purposes only. 
                We do not provide investment advice, and you are solely responsible for your trading and investment decisions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <Card key={sectionIndex} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((subsection, subsectionIndex) => (
                    <div key={subsectionIndex} className="space-y-3">
                      <h4 className="text-lg font-semibold text-slate-900">
                        {subsection.subtitle}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {subsection.text}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Disclaimers */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center text-red-800">
              <AlertTriangle className="w-6 h-6 mr-3" />
              Important Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Investment Risk</h4>
                <p className="text-sm text-slate-600">
                  All investments involve risk, including potential loss of principal. Past performance 
                  does not guarantee future results. StockScan Pro does not provide investment advice.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Data Accuracy</h4>
                <p className="text-sm text-slate-600">
                  While we strive for accuracy, market data may be delayed or contain errors. 
                  Always verify information before making investment decisions.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Service Availability</h4>
                <p className="text-sm text-slate-600">
                  Our service may be temporarily unavailable due to maintenance, technical issues, 
                  or circumstances beyond our control.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Limitation of Liability</h4>
                <p className="text-sm text-slate-600">
                  Our liability is limited to the amount you paid for the service. 
                  We are not liable for trading losses or consequential damages.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Termination and Suspension
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Your Rights</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Cancel your subscription at any time</li>
                  <li>• Download your data before cancellation</li>
                  <li>• Receive refunds per our refund policy</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Our Rights</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Suspend accounts for policy violations</li>
                  <li>• Terminate service with reasonable notice</li>
                  <li>• Modify or discontinue features</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
              <Scale className="w-5 h-5 mr-3" />
              Governing Law and Dispute Resolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              These Terms are governed by the laws of the State of New York, without regard to conflict of law principles. 
              Any disputes will be resolved through binding arbitration in New York, NY.
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-900 mb-2">Contact for Legal Matters:</h4>
              <p className="text-sm text-slate-600">
                StockScan Pro Legal Department<br />
                123 Financial District, New York, NY 10004<br />
                Email: legal@stockscanpro.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="border-slate-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">
              Changes to Terms of Service
            </h3>
            <p className="text-slate-600 text-center mb-4">
              We reserve the right to modify these Terms at any time. Material changes will be communicated 
              via email or platform notification at least 30 days before taking effect.
            </p>
            <p className="text-sm text-slate-500 text-center">
              Your continued use of StockScan Pro after changes take effect constitutes acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification 
              on any provisions, please contact our legal team.
            </p>
            <div className="space-y-2 text-slate-600">
              <div>Email: legal@stockscanpro.com</div>
              <div>Phone: +1 (555) 123-4567</div>
              <div>Address: 123 Financial District, New York, NY 10004</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;