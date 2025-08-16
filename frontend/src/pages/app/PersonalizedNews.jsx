import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { FileText, Star, Bell, Calendar, TrendingUp, Clock } from 'lucide-react';

const PersonalizedNews = () => {
  const [preferences, setPreferences] = useState({
    watchlistNews: true,
    portfolioNews: true,
    sectorNews: true,
    breakingNews: true
  });

  const watchlistNews = [
    {
      symbol: 'AAPL',
      title: 'Apple Reports Record iPhone Sales in Q4',
      summary: 'Apple Inc. exceeded analyst expectations with iPhone sales reaching new heights.',
      time: '2 hours ago',
      source: 'MarketWatch',
      sentiment: 'positive'
    },
    {
      symbol: 'TSLA',
      title: 'Tesla Announces New Gigafactory Location',
      summary: 'Tesla plans to build a new manufacturing facility to meet growing demand.',
      time: '4 hours ago',
      source: 'Reuters',
      sentiment: 'positive'
    },
    {
      symbol: 'GOOGL',
      title: 'Alphabet Faces Regulatory Scrutiny in Europe',
      summary: 'European regulators are investigating Alphabet\'s business practices.',
      time: '6 hours ago',
      source: 'Financial Times',
      sentiment: 'negative'
    }
  ];

  const portfolioNews = [
    {
      title: 'Tech Sector Shows Strong Momentum',
      summary: 'Technology stocks continue to outperform broader market indices.',
      time: '1 hour ago',
      source: 'Bloomberg',
      impact: 'high',
      affectedStocks: ['AAPL', 'MSFT', 'GOOGL']
    },
    {
      title: 'Healthcare Stocks React to Policy Changes',
      summary: 'New healthcare policies create uncertainty in the healthcare sector.',
      time: '3 hours ago',
      source: 'CNBC',
      impact: 'medium',
      affectedStocks: ['JNJ', 'PFE']
    }
  ];

  const aiInsights = [
    {
      type: 'trend',
      title: 'Rising Interest in Clean Energy',
      description: 'Based on your portfolio, clean energy stocks may benefit from recent policy announcements.',
      confidence: 85,
      timeframe: 'Next 30 days'
    },
    {
      type: 'risk',
      title: 'Tech Concentration Risk',
      description: 'Your portfolio has high exposure to technology stocks. Consider diversification.',
      confidence: 78,
      timeframe: 'Ongoing'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Personalized News</h1>
            <p className="text-slate-300 text-lg">News tailored to your portfolio and watchlist</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Bell className="w-4 h-4 mr-2" />
              Notification Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Today's Articles</CardTitle>
            <FileText className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">24</div>
            <p className="text-xs text-emerald-600 mt-1">+6 from yesterday</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Watchlist Mentions</CardTitle>
            <Star className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">12</div>
            <p className="text-xs text-slate-600 mt-1">stocks mentioned</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Portfolio Impact</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">High</div>
            <p className="text-xs text-slate-600 mt-1">positive sentiment</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">AI Insights</CardTitle>
            <Badge className="bg-emerald-600 text-white text-xs">NEW</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">3</div>
            <p className="text-xs text-slate-600 mt-1">recommendations</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="watchlist" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="watchlist">Watchlist News</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio Impact</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="settings">Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="watchlist" className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">
                News About Your Watched Stocks
              </CardTitle>
              <CardDescription>
                Latest articles mentioning stocks in your watchlist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {watchlistNews.map((article, index) => (
                  <div key={index} className="border-b border-slate-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="font-semibold">
                          {article.symbol}
                        </Badge>
                        <Badge 
                          className={`text-xs ${
                            article.sentiment === 'positive' 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : article.sentiment === 'negative'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-slate-100 text-slate-800'
                          }`}
                        >
                          {article.sentiment}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.time}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 hover:text-emerald-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-3">{article.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{article.source}</span>
                      <Button size="sm" variant="outline" className="text-slate-700">
                        Read Full Article
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="portfolio" className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">
                Portfolio Impact Analysis
              </CardTitle>
              <CardDescription>
                News that may affect your portfolio performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {portfolioNews.map((article, index) => (
                  <div key={index} className="border-b border-slate-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <Badge 
                        className={`${
                          article.impact === 'high' 
                            ? 'bg-red-100 text-red-800' 
                            : article.impact === 'medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {article.impact} impact
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.time}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{article.title}</h3>
                    <p className="text-slate-600 mb-3">{article.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-slate-500">Affects:</span>
                        {article.affectedStocks.map(symbol => (
                          <Badge key={symbol} variant="outline" className="text-xs">
                            {symbol}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-sm text-slate-500">{article.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="insights" className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">
                AI-Powered Market Insights
              </CardTitle>
              <CardDescription>
                Personalized analysis based on your portfolio and market trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
                    <div className="flex items-start justify-between mb-4">
                      <Badge 
                        className={`${
                          insight.type === 'trend' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {insight.type === 'trend' ? '📈 Opportunity' : '⚠️ Risk Alert'}
                      </Badge>
                      <div className="text-sm text-slate-600">
                        {insight.confidence}% confidence
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{insight.title}</h3>
                    <p className="text-slate-600 mb-3">{insight.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        Timeframe: {insight.timeframe}
                      </span>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">
                News Preferences
              </CardTitle>
              <CardDescription>
                Customize what types of news you want to see
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(preferences).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">
                        {key === 'watchlistNews' ? 'Watchlist Stock News' :
                         key === 'portfolioNews' ? 'Portfolio Impact News' :
                         key === 'sectorNews' ? 'Sector Analysis' :
                         'Breaking Market News'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {key === 'watchlistNews' ? 'Get news about stocks in your watchlist' :
                         key === 'portfolioNews' ? 'News that may affect your portfolio' :
                         key === 'sectorNews' ? 'Analysis of sectors you invest in' :
                         'Important market-moving events'}
                      </p>
                    </div>
                    <Button
                      variant={value ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPreferences(prev => ({ ...prev, [key]: !prev[key] }))}
                      className={value ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                    >
                      {value ? 'Enabled' : 'Disabled'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonalizedNews;