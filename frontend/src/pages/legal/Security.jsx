import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Shield, 
  Lock, 
  Database, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  Globe,
  Server,
  Key,
  Monitor
} from 'lucide-react';

const Security = () => {
  const securityMeasures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data transmission and storage',
      features: [
        '256-bit AES encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Encrypted database backups',
        'Hardware security modules (HSMs)'
      ]
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Multi-layered authentication and authorization systems',
      features: [
        'Multi-factor authentication (MFA)',
        'Single sign-on (SSO) support',
        'Role-based access controls',
        'Regular access reviews and audits'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with multiple redundancies',
      features: [
        'AWS/Azure secure cloud hosting',
        'DDoS protection and mitigation',
        'Network segmentation and firewalls',
        '99.9% uptime SLA with failover systems'
      ]
    },
    {
      icon: Monitor,
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection',
      features: [
        'Real-time security incident monitoring',
        'Automated threat detection systems',
        'Security information and event management (SIEM)',
        'Regular penetration testing'
      ]
    }
  ];

  const compliance = [
    {
      name: 'SOC 2 Type II',
      description: 'Annual third-party security audits',
      status: 'Certified',
      icon: CheckCircle
    },
    {
      name: 'GDPR',
      description: 'European data protection compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      name: 'PCI DSS',
      description: 'Payment card industry standards',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      name: 'ISO 27001',
      description: 'Information security management',
      status: 'In Progress',
      icon: AlertTriangle
    }
  ];

  const bestPractices = [
    {
      category: 'Account Security',
      practices: [
        'Use a strong, unique password for your StockScan Pro account',
        'Enable two-factor authentication (2FA) in your account settings',
        'Never share your login credentials with others',
        'Log out when using public or shared computers',
        'Regularly review your account activity and alerts'
      ]
    },
    {
      category: 'Safe Browsing',
      practices: [
        'Always access StockScan Pro through our official website',
        'Look for the padlock icon in your browser\'s address bar',
        'Be cautious of phishing emails claiming to be from us',
        'Keep your browser and operating system updated',
        'Use reputable antivirus software'
      ]
    },
    {
      category: 'Data Protection',
      practices: [
        'Don\'t save sensitive data in browser auto-fill',
        'Clear browser cache and cookies on shared devices',
        'Use secure networks when accessing your account',
        'Regularly backup your watchlists and custom screens',
        'Report suspicious activity immediately'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Security & Compliance
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Your Security is Our Priority
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We employ industry-leading security measures, compliance standards, and best practices 
            to protect your data and ensure the integrity of our platform.
          </p>
        </div>

        {/* Security Overview */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                StockScan Pro is built with security at its core, using the same standards trusted by 
                financial institutions and Fortune 500 companies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">256-bit</div>
                <div className="text-sm text-slate-600">AES Encryption</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-slate-600">Monitoring</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-amber-600">SOC 2</div>
                <div className="text-sm text-slate-600">Certified</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Security Measures
            </h2>
            <p className="text-lg text-slate-600">
              Multi-layered security architecture protecting your data at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {measure.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {measure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {measure.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Compliance */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-slate-600">
              We meet or exceed industry standards for security and data protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="border-slate-200 text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      cert.status === 'Certified' || cert.status === 'Compliant' 
                        ? 'bg-emerald-100' 
                        : 'bg-amber-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        cert.status === 'Certified' || cert.status === 'Compliant' 
                          ? 'text-emerald-600' 
                          : 'text-amber-600'
                      }`} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{cert.description}</p>
                    <Badge className={cert.status === 'Certified' || cert.status === 'Compliant' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-amber-100 text-amber-800'
                    }>
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Data Centers */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
              <Globe className="w-6 h-6 mr-3" />
              Global Infrastructure
            </CardTitle>
            <CardDescription>
              Secure data centers with geographic redundancy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Primary (US East)</h3>
                  <p className="text-sm text-slate-600">AWS US-East-1 (Virginia)</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Server className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Backup (US West)</h3>
                  <p className="text-sm text-slate-600">AWS US-West-2 (Oregon)</p>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Standby</Badge>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Server className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">EU Region</h3>
                  <p className="text-sm text-slate-600">AWS EU-West-1 (Ireland)</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Best Practices */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Security Best Practices
            </h2>
            <p className="text-lg text-slate-600">
              Help us keep your account secure by following these recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestPractices.map((category, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Incident Response */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
              Security Incident Response
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              We have a comprehensive incident response plan to quickly identify, contain, and resolve security incidents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Our Commitment</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Detect incidents within 15 minutes</li>
                  <li>• Notify affected users within 72 hours</li>
                  <li>• Provide regular updates during incidents</li>
                  <li>• Conduct post-incident reviews and improvements</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Report Security Issues</h4>
                <p className="text-sm text-slate-600 mb-2">
                  If you discover a security vulnerability, please report it responsibly:
                </p>
                <div className="text-sm text-slate-600">
                  <div>Email: security@stockscanpro.com</div>
                  <div>PGP Key: Available upon request</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Security Team */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <CardContent className="p-8 text-center">
            <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Security Questions or Concerns?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our security team is available to address any questions about our security practices 
              or to receive reports of security issues.
            </p>
            <div className="space-y-2 text-slate-300">
              <div>Security Team: security@stockscanpro.com</div>
              <div>General Inquiries: support@stockscanpro.com</div>
              <div>Phone: +1 (555) 123-4567</div>
            </div>
          </CardContent>
        </Card>

        {/* Security Updates */}
        <Card className="border-slate-200 bg-blue-50">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Stay Informed About Security Updates
            </h3>
            <p className="text-slate-600 mb-4">
              We regularly update our security practices and will notify users of any significant changes 
              that may affect their accounts or data protection.
            </p>
            <Badge className="bg-emerald-600 text-white px-4 py-2 cursor-pointer hover:bg-emerald-700 transition-colors">
              Subscribe to Security Alerts
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Security;