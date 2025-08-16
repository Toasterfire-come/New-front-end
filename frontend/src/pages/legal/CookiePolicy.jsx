import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Target, 
  Shield,
  CheckCircle,
  X,
  Info
} from 'lucide-react';

const CookiePolicy = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      required: true,
      description: 'Necessary for basic website functionality',
      purpose: 'These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in or filling in forms.',
      examples: [
        'Authentication and session management',
        'Security and fraud prevention',
        'Load balancing and performance',
        'Basic functionality and navigation'
      ],
      retention: 'Session or up to 1 year'
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      required: false,
      description: 'Help us understand how visitors use our site',
      purpose: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most popular and see how visitors move around the site.',
      examples: [
        'Page views and user interactions',
        'Feature usage and performance metrics',
        'Error tracking and debugging',
        'A/B testing and optimization'
      ],
      retention: 'Up to 2 years'
    },
    {
      icon: Target,
      title: 'Marketing Cookies',
      required: false,
      description: 'Used to deliver relevant advertisements',
      purpose: 'These cookies may be set by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.',
      examples: [
        'Personalized advertising',
        'Cross-site tracking for ads',
        'Campaign effectiveness measurement',
        'Social media integration'
      ],
      retention: 'Up to 1 year'
    },
    {
      icon: Settings,
      title: 'Preference Cookies',
      required: false,
      description: 'Remember your choices and personalize your experience',
      purpose: 'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.',
      examples: [
        'Language and region preferences',
        'Theme and display settings',
        'Customized dashboard layouts',
        'Notification preferences'
      ],
      retention: 'Up to 1 year'
    }
  ];

  const thirdPartyCookies = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and user behavior tracking',
      type: 'Analytics',
      link: 'https://policies.google.com/privacy'
    },
    {
      name: 'PayPal',
      purpose: 'Payment processing and fraud prevention',
      type: 'Essential',
      link: 'https://www.paypal.com/privacy'
    },
    {
      name: 'Hotjar',
      purpose: 'User experience analytics and feedback',
      type: 'Analytics',
      link: 'https://www.hotjar.com/privacy'
    },
    {
      name: 'Intercom',
      purpose: 'Customer support and communication',
      type: 'Preferences',
      link: 'https://www.intercom.com/privacy'
    }
  ];

  const handleCookieToggle = (type) => {
    if (type !== 'essential') {
      setCookieSettings(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  const acceptAllCookies = () => {
    setCookieSettings({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
  };

  const acceptEssentialOnly = () => {
    setCookieSettings({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Cookie Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Cookie Policy & Settings
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn about how StockScan Pro uses cookies and similar technologies to enhance 
            your browsing experience and provide personalized features.
          </p>
          <div className="text-sm text-slate-500">
            Last updated: March 15, 2025 • Effective Date: March 15, 2025
          </div>
        </div>

        {/* Cookie Settings Panel */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
              <Cookie className="w-6 h-6 mr-3" />
              Cookie Preferences
            </CardTitle>
            <CardDescription>
              Manage your cookie preferences and control how we use cookies on your device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(cookieSettings).map(([type, enabled]) => {
                const cookieType = cookieTypes.find(ct => ct.title.toLowerCase().includes(type));
                const Icon = cookieType?.icon || Settings;
                
                return (
                  <div
                    key={type}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      enabled 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 ${enabled ? 'text-emerald-600' : 'text-slate-400'}`} />
                      {type !== 'essential' ? (
                        <button
                          onClick={() => handleCookieToggle(type)}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            enabled ? 'bg-emerald-600' : 'bg-slate-300'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            enabled ? 'transform translate-x-5' : 'transform translate-x-1'
                          }`} />
                        </button>
                      ) : (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      )}
                    </div>
                    <div className="text-sm font-medium text-slate-900 capitalize">{type}</div>
                    <div className="text-xs text-slate-500">
                      {type === 'essential' && 'Always Active'}
                      {type === 'analytics' && (enabled ? 'Enabled' : 'Disabled')}
                      {type === 'marketing' && (enabled ? 'Enabled' : 'Disabled')}
                      {type === 'preferences' && (enabled ? 'Enabled' : 'Disabled')}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={acceptAllCookies} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Accept All Cookies
              </Button>
              <Button onClick={acceptEssentialOnly} variant="outline">
                Accept Essential Only
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* What Are Cookies */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Cookies are small text files that are stored on your device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to site owners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">How Cookies Work</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Stored locally on your device</li>
                  <li>• Sent back to our servers on subsequent visits</li>
                  <li>• Help us recognize you and your preferences</li>
                  <li>• Enable personalized experiences</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Similar Technologies</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Local Storage and Session Storage</li>
                  <li>• Web beacons and pixel tags</li>
                  <li>• Browser fingerprinting techniques</li>
                  <li>• Mobile app identifiers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Types Detail */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-slate-600">
              Detailed information about each category of cookies and their purposes
            </p>
          </div>

          <div className="space-y-6">
            {cookieTypes.map((cookieType, index) => {
              const Icon = cookieType.icon;
              const isEnabled = cookieSettings[cookieType.title.toLowerCase().split(' ')[0]];
              
              return (
                <Card key={index} className="border-slate-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
                        <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        {cookieType.title}
                        {cookieType.required && (
                          <Badge className="ml-2 bg-amber-100 text-amber-800">Required</Badge>
                        )}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        {isEnabled ? (
                          <Badge className="bg-emerald-100 text-emerald-800">Enabled</Badge>
                        ) : (
                          <Badge variant="outline">Disabled</Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-slate-600">
                      {cookieType.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Purpose</h4>
                      <p className="text-sm text-slate-600">{cookieType.purpose}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Examples</h4>
                        <ul className="space-y-1">
                          {cookieType.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center text-sm text-slate-600">
                              <div className="w-1 h-1 bg-emerald-600 rounded-full mr-2" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Data Retention</h4>
                        <p className="text-sm text-slate-600">{cookieType.retention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Third-Party Cookies */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Third-Party Cookies
            </CardTitle>
            <CardDescription>
              Cookies set by external services we use to enhance our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {thirdPartyCookies.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium text-slate-900">{service.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {service.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{service.purpose}</p>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
                  >
                    Privacy Policy
                    <Info className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Managing Cookies */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Managing Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Browser Settings</h4>
                <p className="text-sm text-slate-600 mb-2">
                  You can control cookies through your browser settings:
                </p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Block all cookies</li>
                  <li>• Block third-party cookies only</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set preferences per website</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">StockScan Pro Settings</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Use our cookie preference panel to:
                </p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Enable/disable cookie categories</li>
                  <li>• View detailed cookie information</li>
                  <li>• Save your preferences</li>
                  <li>• Update settings anytime</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of StockScan Pro. 
                Essential cookies cannot be disabled as they are necessary for basic website operation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Consent */}
        <Card className="border-slate-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Cookie Consent & Legal Basis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Consent Required</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Analytics and performance cookies</li>
                  <li>• Marketing and advertising cookies</li>
                  <li>• Non-essential preference cookies</li>
                  <li>• Third-party social media cookies</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">No Consent Needed</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Strictly necessary cookies</li>
                  <li>• Authentication and security cookies</li>
                  <li>• Load balancing and performance cookies</li>
                  <li>• Basic functionality cookies</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              We obtain your consent before setting non-essential cookies and respect your choices. 
              You can withdraw consent at any time by updating your cookie preferences.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <CardContent className="p-8 text-center">
            <Cookie className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact our Privacy Team.
            </p>
            <div className="space-y-2 text-slate-300">
              <div>Privacy Team: privacy@stockscanpro.com</div>
              <div>Data Protection Officer: dpo@stockscanpro.com</div>
              <div>Phone: +1 (555) 123-4567</div>
            </div>
          </CardContent>
        </Card>

        {/* Updates to Policy */}
        <Card className="border-slate-200 bg-slate-100">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Updates to This Cookie Policy
            </h3>
            <p className="text-slate-600">
              We may update this Cookie Policy from time to time to reflect changes in technology, 
              law, or our business practices. We will notify you of significant changes through 
              our platform or by email.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;