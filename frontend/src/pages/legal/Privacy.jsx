import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Shield, Lock, Eye, Database, Globe, Mail } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, and contact information when you create an account',
            'Payment information processed securely through our payment providers',
            'Profile information you choose to provide',
            'Communication preferences and settings'
          ]
        },
        {
          subtitle: 'Usage Data',
          items: [
            'Pages visited, features used, and time spent on our platform',
            'Stock searches, watchlists, and screening criteria',
            'Device information including IP address, browser type, and operating system',
            'Cookies and similar tracking technologies for functionality and analytics'
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Provision',
          items: [
            'Provide and maintain your StockScan Pro account and services',
            'Process transactions and send related information',
            'Respond to your comments, questions, and customer service requests',
            'Send technical notices, updates, and administrative messages'
          ]
        },
        {
          subtitle: 'Improvement and Personalization',
          items: [
            'Understand usage patterns to improve our platform',
            'Develop new features and functionality',
            'Personalize your experience and recommendations',
            'Conduct analytics and research to enhance our services'
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        {
          subtitle: 'We Do Not Sell Your Data',
          items: [
            'We never sell, rent, or trade your personal information to third parties',
            'We do not share your trading data or investment information',
            'Your watchlists and portfolio information remain private',
            'Market data providers only receive anonymized usage statistics'
          ]
        },
        {
          subtitle: 'Limited Sharing',
          items: [
            'Service providers who help us operate our platform (under strict confidentiality)',
            'Legal compliance when required by law or to protect rights and safety',
            'Business transfers (with notice and continued privacy protection)',
            'With your explicit consent for specific purposes'
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        {
          subtitle: 'Technical Safeguards',
          items: [
            '256-bit SSL encryption for all data transmission',
            'Encrypted data storage with regular security audits',
            'Multi-factor authentication and access controls',
            'Regular penetration testing and vulnerability assessments'
          ]
        },
        {
          subtitle: 'Operational Security',
          items: [
            'Employee access limited to necessary job functions only',
            'Regular security training for all staff members',
            'Incident response procedures and breach notification protocols',
            'Compliance with SOC 2 Type II and other security standards'
          ]
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
            Privacy Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're committed to protecting your personal information and being transparent 
            about how we collect, use, and safeguard your data.
          </p>
          <div className="text-sm text-slate-500">
            Last updated: March 15, 2025 • Effective Date: March 15, 2025
          </div>
        </div>

        {/* Key Principles */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Our Privacy Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Data Protection</h3>
                  <p className="text-sm text-slate-600">
                    We use industry-leading security measures to protect your personal and financial information.
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Transparency</h3>
                  <p className="text-sm text-slate-600">
                    We're clear about what data we collect, how we use it, and who we share it with.
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Your Control</h3>
                  <p className="text-sm text-slate-600">
                    You have control over your data with options to access, modify, or delete your information.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
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
                      <ul className="space-y-2 ml-4">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3 text-slate-600">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Your Rights */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              Your Rights and Choices
            </CardTitle>
            <CardDescription>
              You have several rights regarding your personal information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Access and Portability</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Request a copy of your personal data</li>
                  <li>• Export your watchlists and portfolio data</li>
                  <li>• Access your account activity and usage history</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Correction and Deletion</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Update or correct your personal information</li>
                  <li>• Delete your account and associated data</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Cookies and Tracking Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
              and provide personalized features. You can control cookie settings through your browser preferences.
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-900 mb-2">Types of Cookies We Use:</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• <strong>Essential:</strong> Required for basic platform functionality</li>
                <li>• <strong>Analytics:</strong> Help us understand how you use our platform</li>
                <li>• <strong>Preferences:</strong> Remember your settings and customizations</li>
                <li>• <strong>Marketing:</strong> Deliver relevant content and measure campaign effectiveness</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* International Transfers */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              International Data Transfers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              StockScan Pro operates globally, and your information may be transferred to and processed in 
              countries outside your residence. We ensure appropriate safeguards are in place for all international transfers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-2">GDPR Compliance</h4>
                <p className="text-sm text-slate-600">
                  For EU residents, we comply with GDPR requirements and use Standard Contractual Clauses 
                  for data transfers outside the EU.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-2">Data Protection</h4>
                <p className="text-sm text-slate-600">
                  All international transfers maintain the same level of protection as outlined in this policy 
                  through legal agreements and technical safeguards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <Mail className="w-12 h-12 text-emerald-400 mx-auto" />
              <h2 className="text-2xl font-bold">Questions About Privacy?</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                If you have questions about this Privacy Policy or how we handle your data, 
                our Data Protection Officer is here to help.
              </p>
              <div className="space-y-2 text-slate-300">
                <div>Email: privacy@stockscanpro.com</div>
                <div>Address: StockScan Pro, 123 Financial District, New York, NY 10004</div>
                <div>Phone: +1 (555) 123-4567</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="border-slate-200 bg-blue-50">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Changes to This Privacy Policy
            </h3>
            <p className="text-slate-600">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by email or through our platform at least 30 days before they take effect.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;