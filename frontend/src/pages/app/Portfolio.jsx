import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Briefcase, 
  PieChart, 
  Plus,
  Settings,
  BarChart3
} from 'lucide-react';

const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState('main');

  const portfolios = [
    {
      id: 'main',
      name: 'Main Portfolio',
      value: 247892.50,
      change: 5632.10,
      changePercent: 2.34,
      positions: 12
    },
    {
      id: 'growth',
      name: 'Growth Portfolio', 
      value: 89234.20,
      change: -1245.67,
      changePercent: -1.38,
      positions: 8
    },
    {
      id: 'dividend',
      name: 'Dividend Portfolio',
      value: 156789.30,
      change: 2456.78,
      changePercent: 1.59,
      positions: 15
    }
  ];

  const holdings = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 150,
      avgCost: 175.50,
      currentPrice: 182.52,
      value: 27378,
      change: 1052,
      changePercent: 4.00,
      weight: 11.05
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      shares: 75,
      avgCost: 365.20,
      currentPrice: 378.85,
      value: 28414,
      change: 1024,
      changePercent: 3.74,
      weight: 11.47
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      shares: 100,
      avgCost: 138.45,
      currentPrice: 142.69,
      value: 14269,
      change: 424,
      changePercent: 3.06,
      weight: 5.76
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      shares: 50,
      avgCost: 235.60,
      currentPrice: 248.42,
      value: 12421,
      change: 641,
      changePercent: 5.44,
      weight: 5.01
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      shares: 80,
      avgCost: 148.30,
      currentPrice: 151.94,
      value: 12155,
      change: 291,
      changePercent: 2.45,
      weight: 4.90
    }
  ];

  const sectorAllocation = [
    { sector: 'Technology', percentage: 42.5, value: 105327 },
    { sector: 'Financial Services', percentage: 18.2, value: 45117 },
    { sector: 'Healthcare', percentage: 15.8, value: 39167 },
    { sector: 'Consumer Discretionary', percentage: 12.1, value: 29995 },
    { sector: 'Energy', percentage: 7.3, value: 18094 },
    { sector: 'Consumer Staples', percentage: 4.1, value: 10163 }
  ];

  const currentPortfolio = portfolios.find(p => p.id === selectedPortfolio);

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Portfolio Management</h1>
            <p className="text-slate-300 text-lg">Track and analyze your investment performance</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Position
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-300 hover:bg-slate-700">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Portfolio Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <Card 
            key={portfolio.id}
            className={`cursor-pointer transition-all duration-200 ${
              selectedPortfolio === portfolio.id 
                ? 'ring-2 ring-emerald-500 border-emerald-500 shadow-lg' 
                : 'border-slate-200 hover:shadow-md'
            }`}
            onClick={() => setSelectedPortfolio(portfolio.id)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-800 flex items-center justify-between">
                {portfolio.name}
                <Briefcase className="w-5 h-5 text-slate-600" />
              </CardTitle>
              <CardDescription>{portfolio.positions} positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-slate-900">
                  ${portfolio.value.toLocaleString()}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={portfolio.changePercent >= 0 ? 'default' : 'destructive'}
                    className={portfolio.changePercent >= 0 ? 
                      'bg-emerald-100 text-emerald-800' : 
                      'bg-red-100 text-red-800'
                    }
                  >
                    {portfolio.changePercent >= 0 ? '+' : ''}{portfolio.changePercent.toFixed(2)}%
                  </Badge>
                  <span className={`font-medium ${
                    portfolio.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {portfolio.change >= 0 ? '+' : ''}${Math.abs(portfolio.change).toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              ${currentPortfolio.value.toLocaleString()}
            </div>
            <p className={`text-xs mt-1 ${
              currentPortfolio.change >= 0 ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {currentPortfolio.change >= 0 ? '+' : ''}${Math.abs(currentPortfolio.change).toLocaleString()} today
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Day Change</CardTitle>
            {currentPortfolio.change >= 0 ? (
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${
              currentPortfolio.change >= 0 ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {currentPortfolio.changePercent >= 0 ? '+' : ''}{currentPortfolio.changePercent.toFixed(2)}%
            </div>
            <p className="text-xs text-slate-600 mt-1">vs previous close</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Positions</CardTitle>
            <Briefcase className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{currentPortfolio.positions}</div>
            <p className="text-xs text-slate-600 mt-1">active holdings</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Best Performer</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">TSLA</div>
            <p className="text-xs text-slate-600 mt-1">+5.44% today</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed View */}
      <Tabs defaultValue="holdings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="holdings" className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Current Holdings</CardTitle>
              <CardDescription>Your positions in {currentPortfolio.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-2 font-semibold text-slate-700">Symbol</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Shares</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Avg Cost</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Current</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Value</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Gain/Loss</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding) => (
                      <tr key={holding.symbol} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-4 px-2">
                          <div>
                            <div className="font-semibold text-slate-900">{holding.symbol}</div>
                            <div className="text-sm text-slate-600 truncate max-w-32">{holding.name}</div>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-right font-medium">{holding.shares}</td>
                        <td className="py-4 px-2 text-right">${holding.avgCost.toFixed(2)}</td>
                        <td className="py-4 px-2 text-right font-medium">${holding.currentPrice.toFixed(2)}</td>
                        <td className="py-4 px-2 text-right font-semibold">${holding.value.toLocaleString()}</td>
                        <td className="py-4 px-2 text-right">
                          <div className={`${holding.change >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                            <div className="font-medium">
                              {holding.change >= 0 ? '+' : ''}${Math.abs(holding.change).toLocaleString()}
                            </div>
                            <div className="text-sm">
                              {holding.changePercent >= 0 ? '+' : ''}{holding.changePercent.toFixed(2)}%
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-right">
                          <Badge variant="outline">{holding.weight.toFixed(1)}%</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="allocation">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="w-5 h-5" />
                <span>Sector Allocation</span>
              </CardTitle>
              <CardDescription>Portfolio diversification by sector</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sectorAllocation.map((sector, index) => (
                  <div key={sector.sector} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ 
                          backgroundColor: `hsl(${(index * 60) % 360}, 60%, 50%)` 
                        }}
                      />
                      <span className="font-medium text-slate-900">{sector.sector}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-600">${sector.value.toLocaleString()}</span>
                      <Badge variant="outline" className="min-w-16">
                        {sector.percentage.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <span>Performance Analysis</span>
              </CardTitle>
              <CardDescription>Historical performance and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 text-slate-500">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                <p>Detailed performance charts and risk analytics available in Pro plan</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Portfolio;