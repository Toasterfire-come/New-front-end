import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  MessageCircle,
  TrendingUp,
  CreditCard,
  Shield,
  Smartphone,
  Settings,
  Users
} from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      icon: TrendingUp,
      title: 'Getting Started',
      color: 'bg-emerald-100 text-emerald-600',
      questions: [
        {
          id: 'gs1',
          question: 'How do I create my first stock screen?',
          answer: 'To create your first stock screen, navigate to the Stock Scanner page from the main menu. Click "New Screen" and select your filtering criteria such as market cap, price range, volume, and technical indicators. You can save your screen for future use by clicking "Save Screen" and giving it a name.'
        },
        {
          id: 'gs2',
          question: 'What data sources does StockScan Pro use?',
          answer: 'StockScan Pro aggregates data from multiple premium sources including NYSE, NASDAQ, Reuters, and Bloomberg. We provide real-time market data with microsecond latency for institutional-grade accuracy. Our fundamental data is updated daily, while technical indicators are calculated in real-time.'
        },
        {
          id: 'gs3',
          question: 'How often is the market data updated?',
          answer: 'Market data is updated in real-time during trading hours. Price quotes, volume, and technical indicators refresh every second. Fundamental data like earnings, revenue, and financial metrics are updated daily after market close. News and social sentiment data is updated continuously throughout the day.'
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Billing & Plans',
      color: 'bg-blue-100 text-blue-600',
      questions: [
        {
          id: 'bp1',
          question: 'What payment methods do you accept?',
          answer: 'Currently, we accept PayPal as our primary payment method. We\'re working on adding more payment options including credit cards, debit cards, and bank transfers. All transactions are processed securely with 256-bit SSL encryption.'
        },
        {
          id: 'bp2',
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes, you can cancel your subscription at any time from your Account Settings page. There are no cancellation fees or penalties. If you cancel during a billing cycle, you\'ll retain access to premium features until the end of your current billing period.'
        },
        {
          id: 'bp3',
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for all new subscriptions. If you\'re not satisfied with StockScan Pro within the first 30 days, contact our support team for a full refund. Refunds are processed within 5-7 business days.'
        },
        {
          id: 'bp4',
          question: 'What happens if my payment fails?',
          answer: 'If a payment fails, we\'ll automatically retry the charge after 3 days. You\'ll receive email notifications about failed payments. Your account will remain active for 7 days after a failed payment, giving you time to update your payment method. After 7 days, your account will be downgraded to the free tier.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      color: 'bg-purple-100 text-purple-600',
      questions: [
        {
          id: 'sp1',
          question: 'How do you protect my personal data?',
          answer: 'We use industry-standard security measures including 256-bit SSL encryption, secure data centers, and regular security audits. Your personal information is never shared with third parties without your consent. We\'re fully compliant with GDPR and other privacy regulations.'
        },
        {
          id: 'sp2',
          question: 'Is my financial information secure?',
          answer: 'Absolutely. We never store your payment information on our servers. All payments are processed through secure, PCI DSS compliant payment processors like PayPal. We use tokenization and encryption to protect any financial data that passes through our systems.'
        },
        {
          id: 'sp3',
          question: 'Can I delete my account and data?',
          answer: 'Yes, you can permanently delete your account and all associated data from your Account Settings page. This action is irreversible and will remove all your watchlists, screens, and account history. We retain minimal transaction records for legal compliance purposes only.'
        }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile & Technical',
      color: 'bg-amber-100 text-amber-600',
      questions: [
        {
          id: 'mt1',
          question: 'Is there a mobile app available?',
          answer: 'We currently offer a fully responsive mobile web experience that works great on all devices. Native iOS and Android apps are in development and will be available in Q3 2025. You can add our web app to your home screen for an app-like experience.'
        },
        {
          id: 'mt2',
          question: 'What browsers are supported?',
          answer: 'StockScan Pro works best on modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for optimal performance. Internet Explorer is not supported.'
        },
        {
          id: 'mt3',
          question: 'Why are my charts not loading?',
          answer: 'Chart loading issues are usually caused by browser extensions, ad blockers, or slow internet connections. Try disabling browser extensions, clearing your cache, or switching to an incognito/private browsing window. If issues persist, contact our support team.'
        }
      ]
    },
    {
      icon: Settings,
      title: 'Features & Usage',
      color: 'bg-pink-100 text-pink-600',
      questions: [
        {
          id: 'fu1',
          question: 'How many watchlists can I create?',
          answer: 'Free users can create up to 3 watchlists with 10 stocks each. Professional subscribers get unlimited watchlists with up to 500 stocks per list. Enterprise users have no limits on watchlists or stocks.'
        },
        {
          id: 'fu2',
          question: 'Can I export my data?',
          answer: 'Yes, premium subscribers can export their data in multiple formats including CSV, Excel, and PDF. You can export watchlists, screening results, and portfolio data. Go to the export menu on any data table to access download options.'
        },
        {
          id: 'fu3',
          question: 'How do I set up price alerts?',
          answer: 'To set up price alerts, add a stock to your watchlist, then click the bell icon next to the stock. Set your target price and choose notification methods (email, SMS, or push notifications). You can set multiple alerts per stock for different price levels.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Find Quick Answers
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get instant answers to the most common questions about StockScan Pro. 
            Can't find what you're looking for? Contact our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {category.title}
                    <Badge variant="outline" className="ml-auto">
                      {category.questions.length} questions
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div
                        key={faq.id}
                        className="border border-slate-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(faq.id)}
                          className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 flex items-center justify-between transition-colors"
                        >
                          <span className="font-medium text-slate-900 pr-4">
                            {faq.question}
                          </span>
                          {openItems.has(faq.id) ? (
                            <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                          )}
                        </button>
                        {openItems.has(faq.id) && (
                          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                            <p className="text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {searchQuery && filteredCategories.length === 0 && (
          <Card className="border-slate-200">
            <CardContent className="p-12 text-center">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No results found
              </h3>
              <p className="text-slate-600 mb-6">
                We couldn't find any FAQs matching "{searchQuery}". Try different keywords or browse by category.
              </p>
              <Button onClick={() => setSearchQuery('')} variant="outline">
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Contact Support */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-12 text-center">
            <MessageCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4" asChild>
                <Link to="/help-center">
                  Contact Support
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 px-8 py-4" asChild>
                <Link to="/help-center">
                  Browse Help Center
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;