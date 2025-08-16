import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import StockTable from '../../components/common/StockTable';
import { stockData, refreshStockData } from '../../data/mockData';
import { Search, Filter, Download, RefreshCw, SlidersHorizontal } from 'lucide-react';

const StockScanner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [volumeFilter, setVolumeFilter] = useState('all');
  const [isScanning, setIsScanning] = useState(false);
  const [stocks, setStocks] = useState(stockData);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const sectors = [...new Set(stockData.map(stock => stock.sector))];
  
  const filteredStocks = stocks.filter(stock => {
    const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stock.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'all' || stock.sector === selectedSector;
    
    let matchesPrice = true;
    if (priceRange === 'under50') matchesPrice = stock.price < 50;
    else if (priceRange === '50to200') matchesPrice = stock.price >= 50 && stock.price <= 200;
    else if (priceRange === 'over200') matchesPrice = stock.price > 200;
    
    let matchesVolume = true;
    if (volumeFilter === 'high') matchesVolume = stock.volume > 30000000;
    else if (volumeFilter === 'medium') matchesVolume = stock.volume >= 10000000 && stock.volume <= 30000000;
    else if (volumeFilter === 'low') matchesVolume = stock.volume < 10000000;
    
    return matchesSearch && matchesSector && matchesPrice && matchesVolume;
  });

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const refreshedData = await refreshStockData();
      setStocks(refreshedData);
    } catch (error) {
      console.error('Error refreshing stocks:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Stock Scanner</h1>
            <p className="text-slate-300 text-lg">Advanced filtering and screening tools</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleScan}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={isScanning}
            >
              {isScanning ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              {isScanning ? 'Scanning...' : 'Scan Markets'}
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
            <SlidersHorizontal className="w-5 h-5 text-slate-600" />
            <span>Filters & Criteria</span>
          </CardTitle>
          <CardDescription>Customize your stock screening parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Search Symbol/Name</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="AAPL, Apple..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Sector Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Sector</label>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  {sectors.map(sector => (
                    <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Price Range</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under50">Under $50</SelectItem>
                  <SelectItem value="50to200">$50 - $200</SelectItem>
                  <SelectItem value="over200">Over $200</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Volume Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Volume</label>
              <Select value={volumeFilter} onValueChange={setVolumeFilter}>
                <SelectTrigger className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
                  <SelectValue placeholder="Select volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Volumes</SelectItem>
                  <SelectItem value="high">High (30M+)</SelectItem>
                  <SelectItem value="medium">Medium (10M-30M)</SelectItem>
                  <SelectItem value="low">Low (Under 10M)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm font-medium text-slate-700">Active Filters:</span>
            {searchTerm && (
              <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                Search: {searchTerm}
              </Badge>
            )}
            {selectedSector !== 'all' && (
              <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                Sector: {selectedSector}
              </Badge>
            )}
            {priceRange !== 'all' && (
              <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                Price: {priceRange === 'under50' ? 'Under $50' : priceRange === '50to200' ? '$50-$200' : 'Over $200'}
              </Badge>
            )}
            {volumeFilter !== 'all' && (
              <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                Volume: {volumeFilter === 'high' ? 'High' : volumeFilter === 'medium' ? 'Medium' : 'Low'}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="border-slate-200">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
                <Filter className="w-5 h-5 text-slate-600" />
                <span>Scan Results</span>
              </CardTitle>
              <CardDescription>
                Showing {filteredStocks.length} stocks matching your criteria
              </CardDescription>
            </div>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              <Download className="w-4 h-4 mr-2" />
              Export Results
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <StockTable 
            stocks={filteredStocks} 
            showSector={true} 
            title="Filtered Results"
            itemsPerPage={15}
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
          />
        </CardContent>
      </Card>

      {/* Quick Scans */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800">Pre-built Scans</CardTitle>
          <CardDescription>Popular screening criteria used by professional traders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <h4 className="font-semibold text-slate-800 mb-2">High Volume Breakouts</h4>
              <p className="text-sm text-slate-600 mb-3">Stocks with unusual volume and price movement</p>
              <Badge className="bg-emerald-100 text-emerald-800">12 matches</Badge>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <h4 className="font-semibold text-slate-800 mb-2">Oversold Bounce</h4>
              <p className="text-sm text-slate-600 mb-3">Potentially oversold stocks due for a bounce</p>
              <Badge className="bg-emerald-100 text-emerald-800">8 matches</Badge>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <h4 className="font-semibold text-slate-800 mb-2">Momentum Leaders</h4>
              <p className="text-sm text-slate-600 mb-3">Stocks showing strong upward momentum</p>
              <Badge className="bg-emerald-100 text-emerald-800">15 matches</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockScanner;