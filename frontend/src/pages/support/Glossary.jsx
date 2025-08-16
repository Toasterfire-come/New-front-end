import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { 
  Search, 
  BookOpen, 
  TrendingUp,
  BarChart3,
  DollarSign,
  Activity,
  Globe
} from 'lucide-react';

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');

  const glossaryTerms = [
    // A
    { term: 'Ask Price', definition: 'The lowest price at which a seller is willing to sell a security.', category: 'Trading' },
    { term: 'Alpha', definition: 'A measure of investment performance that indicates how much better or worse a stock has performed relative to a benchmark index.', category: 'Analysis' },
    { term: 'Average Volume', definition: 'The mean number of shares traded in a security over a specific period, typically calculated over 30 days.', category: 'Volume' },
    
    // B
    { term: 'Beta', definition: 'A measure of how much a stock price moves relative to the overall market. A beta of 1.0 means the stock moves with the market.', category: 'Analysis' },
    { term: 'Bid Price', definition: 'The highest price a buyer is willing to pay for a security at a given time.', category: 'Trading' },
    { term: 'Bull Market', definition: 'A period of rising stock prices, typically characterized by optimism and investor confidence.', category: 'Market' },
    { term: 'Bollinger Bands', definition: 'A technical analysis tool consisting of a moving average with two standard deviation lines above and below it.', category: 'Technical' },
    
    // C
    { term: 'Candlestick Chart', definition: 'A type of price chart that displays the high, low, open, and closing prices of a security for a specific period.', category: 'Charting' },
    { term: 'Circuit Breaker', definition: 'A regulatory mechanism that temporarily halts trading when a stock or market index moves beyond predetermined thresholds.', category: 'Regulation' },
    { term: 'Current Ratio', definition: 'A financial ratio that measures a company\'s ability to pay short-term obligations, calculated as current assets divided by current liabilities.', category: 'Fundamental' },
    
    // D
    { term: 'Day Trading', definition: 'The practice of buying and selling securities within the same trading day, with all positions closed before market close.', category: 'Trading' },
    { term: 'Dividend Yield', definition: 'The annual dividend payment divided by the stock price, expressed as a percentage.', category: 'Fundamental' },
    { term: 'DOJI', definition: 'A candlestick pattern where the opening and closing prices are nearly equal, indicating market indecision.', category: 'Technical' },
    
    // E
    { term: 'Earnings Per Share (EPS)', definition: 'A company\'s profit divided by the number of outstanding shares, indicating profitability per share.', category: 'Fundamental' },
    { term: 'Exchange-Traded Fund (ETF)', definition: 'An investment fund that trades on stock exchanges like individual stocks but holds a diversified portfolio.', category: 'Investment' },
    { term: 'Ex-Dividend Date', definition: 'The date on or after which buyers of a stock are not entitled to receive the next dividend payment.', category: 'Dividend' },
    
    // F
    { term: 'Fibonacci Retracement', definition: 'A technical analysis tool that uses horizontal lines to indicate areas of support or resistance based on Fibonacci ratios.', category: 'Technical' },
    { term: 'Float', definition: 'The number of shares of a company that are available for trading by the general public.', category: 'Shares' },
    { term: 'Fundamental Analysis', definition: 'An investment analysis method that evaluates a security by examining financial statements, management, and economic factors.', category: 'Analysis' },
    
    // G
    { term: 'Gap', definition: 'A break in a security\'s price chart where the price jumps up or down from the previous trading session\'s close.', category: 'Technical' },
    { term: 'Going Long', definition: 'Buying a security with the expectation that its price will rise.', category: 'Trading' },
    { term: 'Growth Stock', definition: 'A stock of a company expected to grow earnings at an above-average rate compared to other companies.', category: 'Investment' },
    
    // M
    { term: 'MACD', definition: 'Moving Average Convergence Divergence - a trend-following momentum indicator that shows relationships between two moving averages.', category: 'Technical' },
    { term: 'Market Cap', definition: 'Market Capitalization - the total value of a company\'s shares, calculated as share price multiplied by number of shares outstanding.', category: 'Valuation' },
    { term: 'Moving Average', definition: 'A technical indicator that smooths price data by constantly updating the average price over a specific time period.', category: 'Technical' },
    
    // P
    { term: 'P/E Ratio', definition: 'Price-to-Earnings ratio - a valuation metric calculated by dividing stock price by earnings per share.', category: 'Valuation' },
    { term: 'Pivot Point', definition: 'A technical analysis indicator used to determine the overall trend of the market over different time frames.', category: 'Technical' },
    { term: 'Pre-Market Trading', definition: 'Trading that occurs before regular market hours, typically between 4:00 AM and 9:30 AM EST.', category: 'Trading' },
    
    // R
    { term: 'Relative Strength Index (RSI)', definition: 'A momentum oscillator that measures the speed and magnitude of price changes, ranging from 0 to 100.', category: 'Technical' },
    { term: 'Resistance Level', definition: 'A price level where a stock has difficulty breaking above, often due to selling pressure.', category: 'Technical' },
    { term: 'Revenue', definition: 'The total amount of income generated by a company from its business operations before expenses.', category: 'Fundamental' },
    
    // S
    { term: 'Short Selling', definition: 'Selling borrowed shares with the intention of buying them back later at a lower price.', category: 'Trading' },
    { term: 'Stop Loss', definition: 'An order to sell a security when it reaches a predetermined price to limit potential losses.', category: 'Trading' },
    { term: 'Support Level', definition: 'A price level where a stock tends to find buying interest and bounces higher.', category: 'Technical' },
    
    // V
    { term: 'Volume', definition: 'The number of shares traded in a security during a specific time period.', category: 'Volume' },
    { term: 'Volatility', definition: 'The degree of variation in a security\'s price over time, often measured by standard deviation.', category: 'Risk' },
    { term: 'VWAP', definition: 'Volume-Weighted Average Price - a trading benchmark that gives the average price weighted by volume.', category: 'Technical' }
  ];

  const categories = [
    { name: 'All', color: 'bg-slate-100 text-slate-600' },
    { name: 'Trading', color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Technical', color: 'bg-blue-100 text-blue-600' },
    { name: 'Fundamental', color: 'bg-purple-100 text-purple-600' },
    { name: 'Analysis', color: 'bg-amber-100 text-amber-600' },
    { name: 'Market', color: 'bg-pink-100 text-pink-600' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    
    const matchesLetter = selectedLetter === '' || 
      item.term.charAt(0).toUpperCase() === selectedLetter;
    
    return matchesSearch && matchesCategory && matchesLetter;
  });

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const termsByLetter = alphabet.map(letter => ({
    letter,
    count: glossaryTerms.filter(term => term.term.charAt(0).toUpperCase() === letter).length
  }));

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Financial Glossary
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Trading & Investment Terms
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive dictionary of financial terms, trading concepts, and market terminology 
            to help you understand the world of stock analysis.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search terms and definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Statistics */}
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">{glossaryTerms.length}+</div>
                <div className="text-sm text-slate-600">Total Terms</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-slate-600">Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">{termsByLetter.filter(l => l.count > 0).length}</div>
                <div className="text-sm text-slate-600">Letters Covered</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-amber-600">Updated</div>
                <div className="text-sm text-slate-600">March 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  className={`cursor-pointer px-4 py-2 text-sm ${
                    selectedCategory === category.name
                      ? 'bg-emerald-600 text-white'
                      : category.color
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                  {category.name === 'All' && ` (${glossaryTerms.length})`}
                  {category.name !== 'All' && ` (${glossaryTerms.filter(t => t.category === category.name).length})`}
                </Badge>
              ))}
            </div>
          </div>

          {/* Alphabet Filter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Browse Alphabetically</h3>
            <div className="flex flex-wrap gap-1">
              <Badge
                className={`cursor-pointer px-3 py-1 text-sm ${
                  selectedLetter === '' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
                onClick={() => setSelectedLetter('')}
              >
                All
              </Badge>
              {termsByLetter.map((item, index) => (
                <Badge
                  key={index}
                  className={`cursor-pointer px-3 py-1 text-sm ${
                    item.count === 0 
                      ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                      : selectedLetter === item.letter 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  onClick={() => item.count > 0 && setSelectedLetter(item.letter)}
                >
                  {item.letter}
                  {item.count > 0 && ` (${item.count})`}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Definitions
              {(searchQuery || selectedCategory !== 'All' || selectedLetter) && (
                <span className="text-lg font-normal text-slate-600 ml-2">
                  ({filteredTerms.length} results)
                </span>
              )}
            </h2>
            
            {(searchQuery || selectedCategory !== 'All' || selectedLetter) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedLetter('');
                }}
                className="text-emerald-600 hover:text-emerald-700 text-sm"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredTerms.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredTerms.map((item, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-slate-900">
                        {item.term}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {item.definition}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-slate-200">
              <CardContent className="p-12 text-center">
                <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No terms found
                </h3>
                <p className="text-slate-600 mb-6">
                  No terms match your current search and filter criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedLetter('');
                  }}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Clear all filters
                </button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Request Term */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Missing a Term?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Can't find a financial term you're looking for? Let us know and we'll add it to our glossary.
            </p>
            <Badge className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors">
              Suggest a Term
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Glossary;