import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Search, TrendingUp, TrendingDown, BarChart3, DollarSign, Volume, Calendar } from 'lucide-react';
import { stockData } from '../../data/mockData';

const StockLookup = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStock, setSelectedStock] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.length >= 1) {
      const results = stockData.filter(stock => 
        stock.symbol.toLowerCase().includes(value.toLowerCase()) ||
        stock.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const selectStock = (stock) => {
    setSelectedStock({
      ...stock,
      // Add additional mock data for detailed view
      yearHigh: stock.price * 1.25,
      yearLow: stock.price * 0.75,
      pe: 15.4 + Math.random() * 10,
      eps: stock.price / (15 + Math.random() * 10),
      dividend: Math.random() > 0.5 ? (Math.random() * 3).toFixed(2) : null,
      beta: (0.8 + Math.random() * 0.8).toFixed(2),
      avgVolume: stock.volume * (0.8 + Math.random() * 0.4),
      description: `${stock.name} operates in the ${stock.sector} sector and is a leading company in its industry.`
    });
    setSearchResults([]);
    setSearchTerm(stock.symbol);
  };

  const mockNews = [
    {
      title: `${selectedStock?.symbol || 'STOCK'} Reports Strong Q3 Earnings`,
      time: '2 hours ago',
      source: 'MarketWatch'
    },
    {
      title: `Analyst Upgrades ${selectedStock?.symbol || 'STOCK'} to Buy Rating`,
      time: '1 day ago',
      source: 'Bloomberg'
    },
    {
      title: `${selectedStock?.name || 'Company'} Announces Strategic Partnership`,
      time: '3 days ago',
      source: 'Reuters'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Stock Lookup</h1>
            <p className="text-slate-300 text-lg">Search and analyze any stock in real-time</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
            <Search className="w-5 h-5 text-slate-600" />
            <span>Search Stocks</span>
          </CardTitle>
          <CardDescription>Enter a stock symbol or company name</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search AAPL, Apple Inc., Microsoft..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 text-lg h-12 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
            
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-lg mt-1 max-h-64 overflow-y-auto shadow-lg z-10">
                {searchResults.map((stock) => (
                  <button
                    key={stock.symbol}
                    onClick={() => selectStock(stock)}
                    className="w-full p-4 text-left hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">{stock.symbol}</div>
                        <div className="text-sm text-slate-600 truncate">{stock.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-slate-900">${stock.price.toFixed(2)}</div>
                        <Badge
                          variant={stock.changePercent >= 0 ? 'default' : 'destructive'}
                          className={stock.changePercent >= 0 ? 
                            'bg-emerald-100 text-emerald-800 text-xs' : 
                            'bg-red-100 text-red-800 text-xs'
                          }
                        >
                          {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                        </Badge>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stock Details */}
      {selectedStock && (
        <div className="space-y-8">
          {/* Stock Header */}
          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                    <span>{selectedStock.symbol}</span>
                    {selectedStock.changePercent >= 0 ? (
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <TrendingDown className="w-6 h-6 text-red-600" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-lg">{selectedStock.name}</CardDescription>
                  <Badge variant="outline" className="mt-2">{selectedStock.sector}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-slate-900">${selectedStock.price.toFixed(2)}</div>
                  <div className={`flex items-center justify-end space-x-2 ${
                    selectedStock.changePercent >= 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    <span className="text-lg font-medium">
                      {selectedStock.changePercent >= 0 ? '+' : ''}${selectedStock.change.toFixed(2)}
                    </span>
                    <Badge
                      variant={selectedStock.changePercent >= 0 ? 'default' : 'destructive'}
                      className={selectedStock.changePercent >= 0 ? 
                        'bg-emerald-100 text-emerald-800' : 
                        'bg-red-100 text-red-800'
                      }
                    >
                      {selectedStock.changePercent >= 0 ? '+' : ''}{selectedStock.changePercent.toFixed(2)}%
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">52 Week High</p>
                    <p className="text-2xl font-bold text-slate-900">${selectedStock.yearHigh.toFixed(2)}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">52 Week Low</p>
                    <p className="text-2xl font-bold text-slate-900">${selectedStock.yearLow.toFixed(2)}</p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Volume</p>
                    <p className="text-2xl font-bold text-slate-900">{(selectedStock.volume / 1000000).toFixed(1)}M</p>
                  </div>
                  <Volume className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Market Cap</p>
                    <p className="text-2xl font-bold text-slate-900">{selectedStock.marketCap}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-slate-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Company Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{selectedStock.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">P/E Ratio</span>
                        <span className="font-medium">{selectedStock.pe.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">EPS</span>
                        <span className="font-medium">${selectedStock.eps.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Beta</span>
                        <span className="font-medium">{selectedStock.beta}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Avg Volume</span>
                        <span className="font-medium">{(selectedStock.avgVolume / 1000000).toFixed(1)}M</span>
                      </div>
                      {selectedStock.dividend && (
                        <div className="flex justify-between">
                          <span className="text-slate-600">Dividend Yield</span>
                          <span className="font-medium">{selectedStock.dividend}%</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-slate-600">Sector</span>
                        <span className="font-medium">{selectedStock.sector}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="financials">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Financial Metrics</CardTitle>
                  <CardDescription>Key financial ratios and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-slate-500">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                    <h3 className="text-lg font-semibold mb-2">Detailed Financials</h3>
                    <p>Advanced financial data available in Pro plan</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="news">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Latest News</CardTitle>
                  <CardDescription>Recent news about {selectedStock.symbol}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNews.map((article, index) => (
                      <div key={index} className="border-b border-slate-200 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-slate-900 hover:text-emerald-600 cursor-pointer">
                          {article.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-slate-500 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.time}</span>
                          <span>•</span>
                          <span>{article.source}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analysis">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Technical Analysis</CardTitle>
                  <CardDescription>Chart patterns and technical indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-slate-500">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                    <h3 className="text-lg font-semibold mb-2">Advanced Charts</h3>
                    <p>Professional charting tools available in Pro plan</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* No Stock Selected */}
      {!selectedStock && (
        <Card className="border-slate-200">
          <CardContent className="text-center py-16">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">Search for a Stock</h3>
            <p className="text-slate-500">Enter a stock symbol or company name to get detailed information</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StockLookup;