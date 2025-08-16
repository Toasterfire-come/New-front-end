import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Monitor, 
  Keyboard,
  Mouse,
  Smartphone,
  CheckCircle,
  Target,
  Mail
} from 'lucide-react';

const Accessibility = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Features for users with visual impairments',
      items: [
        'High contrast mode for better visibility',
        'Scalable text up to 200% without horizontal scrolling',
        'Alternative text for all images and charts',
        'Screen reader compatibility (NVDA, JAWS, VoiceOver)',
        'Color-blind friendly design with patterns and labels',
        'Focus indicators for keyboard navigation'
      ]
    },
    {
      icon: Ear,
      title: 'Auditory Accessibility',
      description: 'Support for users with hearing impairments',
      items: [
        'Closed captions for all video content',
        'Visual alerts in addition to audio notifications',
        'Text-based alternatives to audio information',
        'Sign language interpretation for webinars',
        'Adjustable audio controls for all media',
        'Silent mode with visual feedback only'
      ]
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Features for users with motor impairments',
      items: [
        'Full keyboard navigation support',
        'Adjustable click/tap areas (minimum 44px)',
        'Drag and drop alternatives',
        'Customizable keyboard shortcuts',
        'Voice control compatibility',
        'Sticky keys and modifier key support'
      ]
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Support for users with cognitive differences',
      items: [
        'Clear, consistent navigation structure',
        'Plain language and simplified interfaces',
        'Error prevention and helpful error messages',
        'Adequate time limits with extension options',
        'Reduced motion options for animations',
        'Consistent layout and predictable behavior'
      ]
    }
  ];

  const technologies = [
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility without mouse dependency'
    },
    {
      icon: Monitor,
      title: 'Screen Readers',
      description: 'Compatible with NVDA, JAWS, VoiceOver, and other assistive technologies'
    },
    {
      icon: Mouse,
      title: 'Alternative Input',
      description: 'Support for switch devices, eye tracking, and voice control'
    },
    {
      icon: Smartphone,
      title: 'Mobile Accessibility',
      description: 'Touch-friendly design with gesture alternatives'
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines compliance',
      status: 'Compliant',
      level: 'AA Level'
    },
    {
      name: 'Section 508',
      description: 'US Federal accessibility requirements',
      status: 'Compliant',
      level: 'Full Compliance'
    },
    {
      name: 'ADA Title III',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant',
      level: 'Digital Accessibility'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard',
      status: 'In Progress',
      level: 'Harmonized Standard'
    }
  ];

  const quickGuides = [
    {
      title: 'Keyboard Shortcuts',
      shortcuts: [
        'Tab - Navigate forward through interactive elements',
        'Shift + Tab - Navigate backward',
        'Enter/Space - Activate buttons and links',
        'Arrow keys - Navigate within components',
        'Esc - Close dialogs and menus',
        'Alt + numbers - Navigate to main sections'
      ]
    },
    {
      title: 'Screen Reader Tips',
      shortcuts: [
        'H - Jump between headings',
        'L - Navigate through links',
        'B - Move between buttons',
        'T - Navigate data tables',
        'F - Jump between form fields',
        'R - Navigate by regions/landmarks'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Accessibility Statement
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Accessible by Design
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            StockScan Pro is committed to ensuring digital accessibility for all users, 
            regardless of ability. We continuously work to improve accessibility and usability for everyone.
          </p>
        </div>

        {/* Commitment */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <Target className="w-16 h-16 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-bold text-slate-900">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We believe that everyone should have equal access to financial tools and market data. 
                Our platform is designed and tested to meet international accessibility standards.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-emerald-600">WCAG 2.1</div>
                  <div className="text-sm text-slate-600">AA Compliant</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">508</div>
                  <div className="text-sm text-slate-600">Section 508</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-purple-600">ADA</div>
                  <div className="text-sm text-slate-600">Title III</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-amber-600">Testing</div>
                  <div className="text-sm text-slate-600">User Testing</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Accessibility Features
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive accessibility support across all areas of need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Assistive Technology Support */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Assistive Technology Support
            </h2>
            <p className="text-lg text-slate-600">
              Compatible with a wide range of assistive technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="border-slate-200 text-center">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{tech.title}</h3>
                    <p className="text-sm text-slate-600">{tech.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Standards Compliance */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Standards & Compliance
            </CardTitle>
            <CardDescription>
              Meeting and exceeding accessibility standards worldwide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-semibold text-slate-900">{standard.name}</h4>
                      <Badge className={standard.status === 'Compliant' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-amber-100 text-amber-800'
                      }>
                        {standard.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{standard.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {standard.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference Guides */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Quick Reference Guides
            </h2>
            <p className="text-lg text-slate-600">
              Essential shortcuts and tips for accessible navigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickGuides.map((guide, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guide.shortcuts.map((shortcut, shortcutIndex) => {
                      const [key, description] = shortcut.split(' - ');
                      return (
                        <li key={shortcutIndex} className="flex items-start space-x-3 text-sm">
                          <kbd className="px-2 py-1 text-xs font-mono bg-slate-100 border border-slate-300 rounded">
                            {key}
                          </kbd>
                          <span className="text-slate-600">{description}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testing and Feedback */}
        <Card className="border-slate-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Testing & Continuous Improvement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              We regularly test our platform with real users who rely on assistive technologies 
              and conduct automated accessibility audits to ensure ongoing compliance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-medium text-slate-900">Automated Testing</h4>
                <p className="text-sm text-slate-600">Daily accessibility scans and reports</p>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-slate-900">Manual Testing</h4>
                <p className="text-sm text-slate-600">Regular testing with assistive technologies</p>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-slate-900">User Feedback</h4>
                <p className="text-sm text-slate-600">Community input and accessibility reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Known Issues */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Known Issues & Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              We are transparent about areas where we're still improving. Here are known accessibility 
              issues we're actively working to resolve:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Complex chart interactions may require alternative input methods (Target: Q2 2025)</li>
              <li>• Some third-party market data widgets have limited screen reader support (In progress)</li>
              <li>• Mobile app accessibility features are in development (Target: Q3 2025)</li>
              <li>• Enhanced voice control support planned for advanced features (Target: Q4 2025)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Feedback and Support */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Accessibility Feedback & Support
            </h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              We welcome feedback about the accessibility of StockScan Pro. If you encounter 
              any barriers or have suggestions for improvement, please let us know.
            </p>
            <div className="space-y-3 text-slate-600 mb-6">
              <div>Accessibility Team: accessibility@stockscanpro.com</div>
              <div>Phone: +1 (555) 123-4567 (TTY available)</div>
              <div>Response time: Within 2 business days</div>
            </div>
            <Badge className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors">
              Contact Accessibility Team
            </Badge>
          </CardContent>
        </Card>

        {/* Alternative Formats */}
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Alternative Formats
            </h3>
            <p className="text-slate-600 mb-4">
              This accessibility statement is available in alternative formats upon request, 
              including large print, audio, and plain text versions.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="cursor-pointer hover:bg-slate-50">
                Large Print Version
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-slate-50">
                Audio Version
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-slate-50">
                Plain Text Version
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Accessibility;