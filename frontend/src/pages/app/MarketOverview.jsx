import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { marketIndices, sectorPerformance, stockData } from '../../data/mockData';
import { TrendingUp, TrendingDown, Globe, BarChart3, PieChart, Activity } from 'lucide-react';

const MarketOverview = () => {
  const marketStats = {
    advancingStocks: 1847,
    decliningStocks: 1423,
    unchangedStocks: 234,
    newHighs: 87,
    newLows: 23,
    totalVolume: 4.2,
    averageVolume: 3.8
  };

  const advanceDeclineRatio = (marketStats.advancingStocks / marketStats.decliningStocks).toFixed(2);

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Market Overview</h1>
            <p className="text-slate-300 text-lg">Complete market analysis and sector breakdown</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400 mb-1">Market Session</div>
            <div className="text-lg font-semibold text-emerald-400">Regular Hours</div>
          </div>
        </div>
      </div>

      {/* Major Indices */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-slate-600" />
            <span>Major Market Indices</span>
          </CardTitle>
          <CardDescription>Real-time index performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketIndices.map((index) => (
              <div key={index.symbol} className="bg-slate-50 p-6 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">{index.name}</h3>
                  {index.changePercent >= 0 ? (
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  )}
                </div>
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
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Breadth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <Activity className="w-5 h-5 text-slate-600" />
              <span>Market Breadth</span>
            </CardTitle>
            <CardDescription>Advance/Decline statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Advancing Stocks</span>
                  <span className="text-sm font-bold text-emerald-600">{marketStats.advancingStocks}</span>
                </div>
                <Progress value={65} className="h-2 bg-slate-200" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Declining Stocks</span>
                  <span className="text-sm font-bold text-red-600">{marketStats.decliningStocks}</span>
                </div>
                <Progress value={40} className="h-2 bg-slate-200" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Unchanged</span>
                  <span className="text-sm font-bold text-slate-600">{marketStats.unchangedStocks}</span>
                </div>
                <Progress value={8} className="h-2 bg-slate-200" />
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">A/D Ratio</span>
                  <span className="text-lg font-bold text-emerald-600">{advanceDeclineRatio}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-slate-600" />
              <span>Market Statistics</span>
            </CardTitle>
            <CardDescription>Key market metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">{marketStats.newHighs}</div>
                <div className="text-sm text-slate-600">New Highs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">{marketStats.newLows}</div>
                <div className="text-sm text-slate-600">New Lows</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-1">{marketStats.totalVolume}B</div>
                <div className="text-sm text-slate-600">Total Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-1">{marketStats.averageVolume}B</div>
                <div className="text-sm text-slate-600">Avg Volume</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sector Performance */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
            <PieChart className="w-5 h-5 text-slate-600" />
            <span>Sector Performance</span>
          </CardTitle>
          <CardDescription>How different sectors are performing today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorPerformance.map((sector) => (
              <div 
                key={sector.sector}
                className="bg-slate-50 p-6 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">{sector.sector}</h3>
                  {sector.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Performance</span>
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
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Active Stocks</span>
                    <span className="text-sm font-medium text-slate-800">{sector.stocks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketOverview;