import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Home, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Users,
  CreditCard,
  Shield,
  Phone,
  FileText,
  Settings,
  ExternalLink,
  Search
} from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      category: 'Marketing & Public',
      icon: Home,
      description: 'Public pages and marketing content',
      pages: [
        { title: 'Homepage', path: '/', description: 'Main landing page with product overview' },
        { title: 'About Us', path: '/about', description: 'Company information and team' },
        { title: 'How It Works', path: '/how-it-works', description: 'Product features and workflow' },
        { title: 'Getting Started', path: '/getting-started', description: 'Onboarding guide for new users' },
        { title: 'Roadmap', path: '/roadmap', description: 'Product development timeline' },
        { title: 'Release Notes', path: '/release-notes', description: 'Latest updates and changelog' }
      ]
    },
    {
      category: 'Core Application',
      icon: BarChart3,
      description: 'Main trading and analysis tools',
      pages: [
        { title: 'Dashboard', path: '/dashboard', description: 'Personalized market overview' },
        { title: 'Stock Scanner', path: '/scanner', description: 'Advanced stock screening tools' },
        { title: 'Market Overview', path: '/market-overview', description: 'Global market statistics' },
        { title: 'Watchlist', path: '/watchlist', description: 'Track favorite stocks' },
        { title: 'Enhanced Watchlist', path: '/enhanced-watchlist', description: 'Advanced watchlist features' },
        { title: 'Portfolio', path: '/portfolio', description: 'Portfolio tracking and analytics' },
        { title: 'Stock Lookup', path: '/stock-lookup', description: 'Individual stock analysis' },
        { title: 'News', path: '/news', description: 'Market news and updates' },
        { title: 'Personalized News', path: '/personalized-news', description: 'Customized news feed' }
      ]
    },
    {
      category: 'Account Management',
      icon: Users,
      description: 'User account and profile settings',
      pages: [
        { title: 'My Account', path: '/account', description: 'Account information and settings' },
        { title: 'User Settings', path: '/user-settings', description: 'Preferences and customization' },
        { title: 'Billing History', path: '/billing-history', description: 'Payment history and invoices' },
        { title: 'Premium Plans', path: '/premium-plans', description: 'Subscription plans and pricing' },
        { title: 'Compare Plans', path: '/compare-plans', description: 'Feature comparison across plans' }
      ]
    },
    {
      category: 'Authentication',
      icon: Shield,
      description: 'Login and registration pages',
      pages: [
        { title: 'Login', path: '/login', description: 'User authentication' },
        { title: 'Sign Up', path: '/signup', description: 'New user registration' }
      ]
    },
    {
      category: 'Payment & Billing',
      icon: CreditCard,
      description: 'Payment processing and transactions',
      pages: [
        { title: 'PayPal Checkout', path: '/paypal-checkout', description: 'Secure payment processing' },
        { title: 'Payment Success', path: '/payment-success', description: 'Successful payment confirmation' },
        { title: 'Payment Cancelled', path: '/payment-cancelled', description: 'Cancelled payment handling' }
      ]
    },
    {
      category: 'Support & Help',
      icon: Phone,
      description: 'Customer support and documentation',
      pages: [
        { title: 'Help Center', path: '/help-center', description: 'Comprehensive support resources' },
        { title: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { title: 'Glossary', path: '/glossary', description: 'Financial terms and definitions' },
        { title: 'Keyboard Shortcuts', path: '/keyboard-shortcuts', description: 'Platform keyboard shortcuts' },
        { title: 'Contact Us', path: '/contact', description: 'Get in touch with support' }
      ]
    },
    {
      category: 'Legal & Privacy',
      icon: FileText,
      description: 'Legal documents and policies',
      pages: [
        { title: 'Privacy Policy', path: '/privacy', description: 'Data privacy and protection policy' },
        { title: 'Terms of Service', path: '/terms', description: 'Platform terms and conditions' },
        { title: 'Security', path: '/security', description: 'Security measures and compliance' },
        { title: 'Accessibility', path: '/accessibility', description: 'Accessibility statement and features' },
        { title: 'Cookie Policy', path: '/cookie-policy', description: 'Cookie usage and preferences' }
      ]
    },
    {
      category: 'System Information',
      icon: Settings,
      description: 'Platform status and information',
      pages: [
        { title: 'System Status', path: '/status', description: 'Real-time system status' },
        { title: 'Market Hours', path: '/market-hours', description: 'Global trading hours and holidays' },
        { title: 'Sitemap', path: '/sitemap', description: 'Complete site navigation map' }
      ]
    }
  ];

  const totalPages = siteStructure.reduce((acc, category) => acc + category.pages.length, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Site Navigation
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900">
            StockScan Pro Sitemap
          </h1>
          <p className="text-xl text-slate-600">
            Complete navigation map of all pages and features available on our platform
          </p>
        </div>

        {/* Overview Stats */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">{totalPages}</div>
                <div className="text-sm text-slate-600">Total Pages</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">{siteStructure.length}</div>
                <div className="text-sm text-slate-600">Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">9</div>
                <div className="text-sm text-slate-600">Core Features</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-amber-600">5</div>
                <div className="text-sm text-slate-600">Legal Pages</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Functionality */}
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for pages, features, or content..."
                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Site Structure */}
        <div className="space-y-8">
          {siteStructure.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <Card key={sectionIndex} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    {section.category}
                    <Badge variant="outline" className="ml-auto">
                      {section.pages.length} pages
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-slate-600 ml-16">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="ml-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
                      >
                        <div className="flex-1">
                          <Link
                            to={page.path}
                            className="font-medium text-slate-900 hover:text-emerald-600 transition-colors group-hover:text-emerald-600"
                          >
                            {page.title}
                          </Link>
                          <div className="text-sm text-slate-600 mt-1">
                            {page.description}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 font-mono">
                            {page.path}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Access */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Quick Access Links
            </CardTitle>
            <CardDescription>
              Direct links to the most commonly used pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Dashboard', path: '/dashboard', icon: BarChart3 },
                { title: 'Stock Scanner', path: '/scanner', icon: Search },
                { title: 'Watchlist', path: '/watchlist', icon: Eye },
                { title: 'Help Center', path: '/help-center', icon: Phone },
                { title: 'Premium Plans', path: '/premium-plans', icon: CreditCard },
                { title: 'Account Settings', path: '/user-settings', icon: Settings },
                { title: 'System Status', path: '/status', icon: TrendingUp },
                { title: 'Contact Support', path: '/contact', icon: Phone }
              ].map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className="flex flex-col items-center p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all group"
                  >
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-200 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-900 text-center group-hover:text-emerald-700 transition-colors">
                      {link.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* XML Sitemap */}
        <Card className="border-slate-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              XML Sitemap for Search Engines
            </CardTitle>
            <CardDescription>
              Machine-readable sitemap for SEO optimization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
              <div>
                <div className="font-medium text-slate-900 mb-1">XML Sitemap</div>
                <div className="text-sm text-slate-600">
                  Structured sitemap for search engine crawlers and indexing
                </div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  /sitemap.xml
                </div>
              </div>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 flex items-center space-x-2 transition-colors"
              >
                <span className="text-sm">View XML</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Footer Navigation
            </CardTitle>
            <CardDescription>
              Additional navigation links typically found in the footer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/dashboard" className="text-slate-600 hover:text-emerald-600">Dashboard</Link></li>
                  <li><Link to="/scanner" className="text-slate-600 hover:text-emerald-600">Stock Scanner</Link></li>
                  <li><Link to="/portfolio" className="text-slate-600 hover:text-emerald-600">Portfolio</Link></li>
                  <li><Link to="/premium-plans" className="text-slate-600 hover:text-emerald-600">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/help-center" className="text-slate-600 hover:text-emerald-600">Help Center</Link></li>
                  <li><Link to="/faq" className="text-slate-600 hover:text-emerald-600">FAQ</Link></li>
                  <li><Link to="/contact" className="text-slate-600 hover:text-emerald-600">Contact Us</Link></li>
                  <li><Link to="/status" className="text-slate-600 hover:text-emerald-600">System Status</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="text-slate-600 hover:text-emerald-600">About Us</Link></li>
                  <li><Link to="/roadmap" className="text-slate-600 hover:text-emerald-600">Roadmap</Link></li>
                  <li><Link to="/release-notes" className="text-slate-600 hover:text-emerald-600">Release Notes</Link></li>
                  <li><Link to="/security" className="text-slate-600 hover:text-emerald-600">Security</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/privacy" className="text-slate-600 hover:text-emerald-600">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-slate-600 hover:text-emerald-600">Terms of Service</Link></li>
                  <li><Link to="/cookie-policy" className="text-slate-600 hover:text-emerald-600">Cookie Policy</Link></li>
                  <li><Link to="/accessibility" className="text-slate-600 hover:text-emerald-600">Accessibility</Link></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Missing Something?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Let us know what pages or features 
              you'd like to see added to StockScan Pro.
            </p>
            <Badge className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors">
              Suggest a Feature
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sitemap;