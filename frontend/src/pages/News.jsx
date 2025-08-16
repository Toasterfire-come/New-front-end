import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { newsData } from '../data/mockData';
import { Newspaper, Clock, ExternalLink, Search, Filter, TrendingUp } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['Technology', 'Financial Services', 'Healthcare', 'Energy', 'Consumer'];
  
  const marketAlerts = [
    { type: 'breaking', title: 'Fed Meeting Scheduled for Tomorrow', time: '1 hour ago' },
    { type: 'earnings', title: 'AAPL Earnings After Market Close', time: '3 hours ago' },
    { type: 'merger', title: 'Major Acquisition Announced in Tech Sector', time: '5 hours ago' }
  ];

  const filteredNews = newsData.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Market News</h1>
            <p className="text-slate-300 text-lg">Stay updated with the latest market developments</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400 mb-1">Live Updates</div>
            <div className="text-lg font-semibold text-emerald-400">Active</div>
          </div>
        </div>
      </div>

      {/* Market Alerts */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-red-600" />
            <span>Breaking Market Alerts</span>
          </CardTitle>
          <CardDescription>Important market events and announcements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge variant="destructive" className="uppercase text-xs">
                    {alert.type}
                  </Badge>
                  <div>
                    <div className="font-semibold text-slate-800">{alert.title}</div>
                    <div className="text-sm text-slate-600 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{alert.time}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* News Filters */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
            <Filter className="w-5 h-5 text-slate-600" />
            <span>News Filters</span>
          </CardTitle>
          <CardDescription>Filter news by category and keywords</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Search News</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* News Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
                <Newspaper className="w-5 h-5 text-slate-600" />
                <span>Latest News</span>
              </CardTitle>
              <CardDescription>
                Showing {filteredNews.length} articles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredNews.map((article) => (
                  <div key={article.id} className="border-b border-slate-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-slate-800 hover:text-emerald-600 transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {article.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>{article.time}</span>
                          <span>•</span>
                          <span>{article.source}</span>
                        </div>
                        <Button size="sm" variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Topics & Sources */}
        <div className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Trending Topics</CardTitle>
              <CardDescription>Most discussed topics today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Federal Reserve Policy', 'Earnings Season', 'AI Technology Stocks', 'Electric Vehicles', 'Cryptocurrency'].map((topic, index) => (
                  <div key={topic} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <span className="font-medium text-slate-800">{topic}</span>
                    <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                      {Math.floor(Math.random() * 50) + 10} articles
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Top Sources</CardTitle>
              <CardDescription>Reliable financial news sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Reuters', 'Bloomberg', 'MarketWatch', 'CNBC', 'Financial Times'].map((source) => (
                  <div key={source} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <span className="font-medium text-slate-800">{source}</span>
                    <Button size="sm" variant="ghost" className="text-slate-600">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Market Sentiment</CardTitle>
              <CardDescription>Overall market mood based on news</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-emerald-600">Bullish</div>
                <div className="text-sm text-slate-600">Based on 156 articles analyzed</div>
                <div className="flex justify-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-emerald-600">67%</div>
                    <div className="text-slate-600">Positive</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-600">23%</div>
                    <div className="text-slate-600">Neutral</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-red-600">10%</div>
                    <div className="text-slate-600">Negative</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default News;