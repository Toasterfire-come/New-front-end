import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import StockTable from '../components/common/StockTable';
import { watchlistData, stockData, refreshStockData } from '../data/mockData';
import { Eye, Plus, Trash2, Bell, Settings, Search, Star } from 'lucide-react';

const Watchlist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [watchlist, setWatchlist] = useState(watchlistData);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const availableStocks = stockData.filter(stock => 
    !watchlist.some(w => w.symbol === stock.symbol)
  );

  const filteredStocks = availableStocks.filter(stock =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToWatchlist = (stock) => {
    const newWatchlistItem = {
      ...stock,
      alerts: 0
    };
    setWatchlist([...watchlist, newWatchlistItem]);
  };

  const removeFromWatchlist = (symbol) => {
    setWatchlist(watchlist.filter(stock => stock.symbol !== symbol));
  };

  const handleRefreshWatchlist = async () => {
    setIsRefreshing(true);
    try {
      const refreshedData = await refreshStockData();
      const updatedWatchlist = watchlist.map(watchedStock => {
        const refreshedStock = refreshedData.find(stock => stock.symbol === watchedStock.symbol);
        return refreshedStock ? { ...refreshedStock, alerts: watchedStock.alerts } : watchedStock;
      });
      setWatchlist(updatedWatchlist);
    } catch (error) {
      console.error('Error refreshing watchlist:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const totalAlerts = watchlist.reduce((sum, stock) => sum + stock.alerts, 0);

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Watchlist</h1>
            <p className="text-slate-300 text-lg">Track your favorite stocks and set alerts</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-slate-400 mb-1">Active Alerts</div>
              <div className="text-2xl font-bold text-emerald-400">{totalAlerts}</div>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Settings className="w-4 h-4 mr-2" />
              Alert Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Watchlist Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Watched Stocks</CardTitle>
            <Eye className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{watchlist.length}</div>
            <p className="text-xs text-slate-600 mt-1">in your watchlist</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Alerts</CardTitle>
            <Bell className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalAlerts}</div>
            <p className="text-xs text-slate-600 mt-1">active alerts</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Avg Performance</CardTitle>
            <Star className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">+2.14%</div>
            <p className="text-xs text-slate-600 mt-1">today's average</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Best Performer</CardTitle>
            <Star className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">TSLA</div>
            <p className="text-xs text-slate-600 mt-1">+5.28% today</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Watchlist */}
      <Card className="border-slate-200">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
                <Eye className="w-5 h-5 text-slate-600" />
                <span>Your Watchlist</span>
              </CardTitle>
              <CardDescription>
                Monitoring {watchlist.length} stocks with {totalAlerts} active alerts
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <Bell className="w-4 h-4 mr-2" />
                Set Alerts
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {watchlist.length > 0 ? (
            <div className="space-y-4">
              <StockTable 
                stocks={watchlist} 
                showAlerts={true} 
                title="My Watchlist"
                itemsPerPage={10}
                onRefresh={handleRefreshWatchlist}
                isRefreshing={isRefreshing}
              />
              <div className="flex justify-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-slate-600 hover:text-slate-800"
                  onClick={() => setWatchlist([])}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Eye className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-600 mb-2">Your watchlist is empty</h3>
              <p className="text-slate-500 mb-4">Add stocks below to start tracking them</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add to Watchlist */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
            <Plus className="w-5 h-5 text-slate-600" />
            <span>Add to Watchlist</span>
          </CardTitle>
          <CardDescription>Search and add stocks to your watchlist</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search stocks to add to watchlist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {searchTerm && (
              <div className="max-h-96 overflow-y-auto">
                <div className="space-y-2">
                  {filteredStocks.slice(0, 8).map((stock) => (
                    <div 
                      key={stock.symbol}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="font-semibold text-slate-900">{stock.symbol}</div>
                          <div className="text-slate-600 truncate">{stock.name}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold text-slate-900">
                            ${stock.price.toFixed(2)}
                          </div>
                          <Badge
                            variant={stock.changePercent >= 0 ? 'default' : 'destructive'}
                            className={stock.changePercent >= 0 ? 
                              'bg-emerald-100 text-emerald-800' : 
                              'bg-red-100 text-red-800'
                            }
                          >
                            {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                          </Badge>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => addToWatchlist(stock)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!searchTerm && (
              <div className="text-center py-8 text-slate-500">
                Start typing to search for stocks to add to your watchlist
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Watchlist;