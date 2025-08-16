import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import StockTable from '../../components/common/StockTable';
import { 
  Star, 
  Plus, 
  Filter, 
  Bell, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  Settings,
  Download,
  Search
} from 'lucide-react';
import { watchlistData, stockData, refreshStockData } from '../../data/mockData';

const EnhancedWatchlist = () => {
  const [watchlists, setWatchlists] = useState({
    'Tech Stocks': [...watchlistData.slice(0, 3), { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 875.28, change: -15.67, changePercent: -1.76, alerts: 0 }],
    'Growth Stocks': [
      { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: 12.45, changePercent: 5.28, alerts: 1 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 151.94, change: -0.85, changePercent: -0.56, alerts: 0 }
    ],
    'Dividend Stocks': [
      { symbol: 'JNJ', name: 'Johnson & Johnson', price: 160.24, change: -0.78, changePercent: -0.48, alerts: 0 },
      { symbol: 'PG', name: 'Procter & Gamble Co.', price: 155.89, change: 0.67, changePercent: 0.43, alerts: 0 }
    ]
  });
  const [activeWatchlist, setActiveWatchlist] = useState('Tech Stocks');
  const [sortBy, setSortBy] = useState('changePercent');
  const [filterBy, setFilterBy] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const refreshedData = await refreshStockData();
      const updatedWatchlists = { ...watchlists };
      
      Object.keys(updatedWatchlists).forEach(listName => {
        updatedWatchlists[listName] = updatedWatchlists[listName].map(stock => {
          const updated = refreshedData.find(s => s.symbol === stock.symbol);
          return updated ? { ...updated, alerts: stock.alerts } : stock;
        });
      });
      
      setWatchlists(updatedWatchlists);
    } catch (error) {
      console.error('Error refreshing watchlists:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const getSortedAndFilteredStocks = (stocks) => {
    let filtered = [...stocks];
    
    // Apply filters
    if (filterBy === 'gainers') {
      filtered = filtered.filter(stock => stock.changePercent > 0);
    } else if (filterBy === 'losers') {
      filtered = filtered.filter(stock => stock.changePercent < 0);
    } else if (filterBy === 'alerts') {
      filtered = filtered.filter(stock => stock.alerts > 0);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'changePercent') return b.changePercent - a.changePercent;
      if (sortBy === 'price') return b.price - a.price;
      if (sortBy === 'volume') return b.volume - a.volume;
      if (sortBy === 'symbol') return a.symbol.localeCompare(b.symbol);
      return 0;
    });
    
    return filtered;
  };

  const getTotalAlerts = () => {
    return Object.values(watchlists).flat().reduce((sum, stock) => sum + stock.alerts, 0);
  };

  const getWatchlistStats = (stocks) => {
    const gainers = stocks.filter(s => s.changePercent > 0).length;
    const losers = stocks.filter(s => s.changePercent < 0).length;
    const avgChange = stocks.reduce((sum, s) => sum + s.changePercent, 0) / stocks.length;
    return { gainers, losers, avgChange };
  };

  const currentStocks = watchlists[activeWatchlist] || [];
  const processedStocks = getSortedAndFilteredStocks(currentStocks);
  const stats = getWatchlistStats(currentStocks);

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Enhanced Watchlists</h1>
            <p className="text-slate-300 text-lg">Advanced monitoring with alerts and analytics</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-slate-400 mb-1">Total Alerts</div>
              <div className="text-2xl font-bold text-red-400">{getTotalAlerts()}</div>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Watchlist
            </Button>
          </div>
        </div>
      </div>

      {/* Watchlist Tabs */}
      <Tabs value={activeWatchlist} onValueChange={setActiveWatchlist}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            {Object.keys(watchlists).map((listName) => (
              <TabsTrigger key={listName} value={listName} className="relative">
                {listName}
                {watchlists[listName].some(stock => stock.alerts > 0) && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {watchlists[listName].reduce((sum, stock) => sum + stock.alerts, 0)}
                  </Badge>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-slate-300" onClick={handleRefresh} disabled={isRefreshing}>
              <BarChart3 className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh All'}
            </Button>
            <Button variant="outline" className="border-slate-300">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {Object.keys(watchlists).map((listName) => (
          <TabsContent key={listName} value={listName}>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Total Stocks</CardTitle>
                  <Star className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">{currentStocks.length}</div>
                  <p className="text-xs text-slate-600 mt-1">in watchlist</p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Gainers</CardTitle>
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">{stats.gainers}</div>
                  <p className="text-xs text-slate-600 mt-1">stocks up today</p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Losers</CardTitle>
                  <TrendingDown className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{stats.losers}</div>
                  <p className="text-xs text-slate-600 mt-1">stocks down today</p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Avg Change</CardTitle>
                  <BarChart3 className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${
                    stats.avgChange >= 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {stats.avgChange >= 0 ? '+' : ''}{stats.avgChange.toFixed(2)}%
                  </div>
                  <p className="text-xs text-slate-600 mt-1">portfolio average</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Controls */}
            <Card className="border-slate-200 mb-8">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800 flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-slate-600" />
                  <span>Filters & Sorting</span>
                </CardTitle>
                <CardDescription>Customize your view and find specific stocks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="changePercent">% Change</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="volume">Volume</SelectItem>
                        <SelectItem value="symbol">Symbol</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Filter</label>
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Stocks</SelectItem>
                        <SelectItem value="gainers">Gainers Only</SelectItem>
                        <SelectItem value="losers">Losers Only</SelectItem>
                        <SelectItem value="alerts">With Alerts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input placeholder="Symbol or name..." className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Actions</label>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Bell className="w-4 h-4 mr-1" />
                        Alerts
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Settings className="w-4 h-4 mr-1" />
                        Settings
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Watchlist Table */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {listName} ({processedStocks.length} stocks)
                </CardTitle>
                <CardDescription>
                  Real-time monitoring with alerts and advanced analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StockTable 
                  stocks={processedStocks}
                  showAlerts={true}
                  title={listName}
                  itemsPerPage={15}
                  onRefresh={handleRefresh}
                  isRefreshing={isRefreshing}
                />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default EnhancedWatchlist;