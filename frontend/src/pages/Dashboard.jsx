import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import StockTable from '../components/common/StockTable';
import { marketIndices, topGainers, topLosers, sectorPerformance, refreshStockData } from '../data/mockData';
import { TrendingUp, TrendingDown, Activity, DollarSign, BarChart3, Globe } from 'lucide-react';

const Dashboard = () => {
  const [gainers, setGainers] = useState(topGainers);
  const [losers, setLosers] = useState(topLosers);
  const [isRefreshingGainers, setIsRefreshingGainers] = useState(false);
  const [isRefreshingLosers, setIsRefreshingLosers] = useState(false);

  const handleRefreshGainers = async () => {
    setIsRefreshingGainers(true);
    try {
      const refreshedData = await refreshStockData();
      const newGainers = refreshedData.filter(stock => stock.changePercent > 0)
        .sort((a, b) => b.changePercent - a.changePercent)
        .slice(0, 5);
      setGainers(newGainers);
    } catch (error) {
      console.error('Error refreshing gainers:', error);
    } finally {
      setIsRefreshingGainers(false);
    }
  };

  const handleRefreshLosers = async () => {
    setIsRefreshingLosers(true);
    try {
      const refreshedData = await refreshStockData();
      const newLosers = refreshedData.filter(stock => stock.changePercent < 0)
        .sort((a, b) => a.changePercent - b.changePercent)
        .slice(0, 5);
      setLosers(newLosers);
    } catch (error) {
      console.error('Error refreshing losers:', error);
    } finally {
      setIsRefreshingLosers(false);
    }
  };
  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Market Dashboard</h1>
            <p className="text-slate-300 text-lg">Real-time market data and professional stock analysis</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400 mb-1">Last Updated</div>
            <div className="text-lg font-semibold">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* Market Indices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketIndices.map((index) => (
          <Card key={index.symbol} className="hover:shadow-lg transition-shadow duration-200 border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-800 flex items-center justify-between">
                {index.name}
                {index.changePercent >= 0 ? (
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
              </CardTitle>
              <CardDescription className="text-slate-500">{index.symbol}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-slate-900">
                  {index.value.toLocaleString()}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={index.changePercent >= 0 ? 'default' : 'destructive'}
                    className={index.changePercent >= 0 ? 
                      'bg-emerald-100 text-emerald-800' : 
                      'bg-red-100 text-red-800'
                    }
                  >
                    {index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
                  </Badge>
                  <span className={`font-medium ${
                    index.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Stocks</CardTitle>
            <Activity className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">3,247</div>
            <p className="text-xs text-emerald-600 mt-1">+12 from yesterday</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Volume</CardTitle>
            <BarChart3 className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">4.2B</div>
            <p className="text-xs text-slate-600 mt-1">shares traded</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Market Cap</CardTitle>
            <DollarSign className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">$45.2T</div>
            <p className="text-xs text-emerald-600 mt-1">+0.8% today</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Global Markets</CardTitle>
            <Globe className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">Mixed</div>
            <p className="text-xs text-slate-600 mt-1">Asia +0.3%, Europe -0.1%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Gainers */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span>Top Gainers</span>
            </CardTitle>
            <CardDescription>Best performing stocks today</CardDescription>
          </CardHeader>
          <CardContent>
            <StockTable 
              stocks={gainers} 
              title="Top Gainers"
              itemsPerPage={5}
              onRefresh={handleRefreshGainers}
              isRefreshing={isRefreshingGainers}
            />
          </CardContent>
        </Card>

        {/* Top Losers */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <TrendingDown className="w-5 h-5 text-red-600" />
              <span>Top Losers</span>
            </CardTitle>
            <CardDescription>Worst performing stocks today</CardDescription>
          </CardHeader>
          <CardContent>
            <StockTable 
              stocks={losers} 
              title="Top Losers"
              itemsPerPage={5}
              onRefresh={handleRefreshLosers}
              isRefreshing={isRefreshingLosers}
            />
          </CardContent>
        </Card>
      </div>

      {/* Sector Performance */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800">Sector Performance</CardTitle>
          <CardDescription>How different sectors are performing today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectorPerformance.map((sector) => (
              <div 
                key={sector.sector}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div>
                  <div className="font-medium text-slate-900">{sector.sector}</div>
                  <div className="text-sm text-slate-500">{sector.stocks} stocks</div>
                </div>
                <Badge
                  variant={sector.change >= 0 ? 'default' : 'destructive'}
                  className={sector.change >= 0 ? 
                    'bg-emerald-100 text-emerald-800' : 
                    'bg-red-100 text-red-800'
                  }
                >
                  {sector.change >= 0 ? '+' : ''}{sector.change.toFixed(2)}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;