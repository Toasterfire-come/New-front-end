import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Clock, 
  Globe, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Sunrise,
  Sunset
} from 'lucide-react';

const MarketHours = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const markets = [
    {
      name: 'New York Stock Exchange (NYSE)',
      timezone: 'EST/EDT',
      preMarket: '4:00 AM - 9:30 AM',
      regular: '9:30 AM - 4:00 PM',
      afterHours: '4:00 PM - 8:00 PM',
      status: 'open', // open, closed, pre-market, after-hours
      nextOpen: '2025-03-17 09:30:00',
      country: 'United States'
    },
    {
      name: 'NASDAQ',
      timezone: 'EST/EDT',
      preMarket: '4:00 AM - 9:30 AM',
      regular: '9:30 AM - 4:00 PM',
      afterHours: '4:00 PM - 8:00 PM',
      status: 'open',
      nextOpen: '2025-03-17 09:30:00',
      country: 'United States'
    },
    {
      name: 'London Stock Exchange (LSE)',
      timezone: 'GMT/BST',
      preMarket: '7:00 AM - 8:00 AM',
      regular: '8:00 AM - 4:30 PM',
      afterHours: 'N/A',
      status: 'closed',
      nextOpen: '2025-03-17 08:00:00',
      country: 'United Kingdom'
    },
    {
      name: 'Tokyo Stock Exchange (TSE)',
      timezone: 'JST',
      preMarket: 'N/A',
      regular: '9:00 AM - 3:00 PM',
      afterHours: 'N/A',
      status: 'closed',
      nextOpen: '2025-03-17 09:00:00',
      country: 'Japan'
    },
    {
      name: 'Frankfurt Stock Exchange',
      timezone: 'CET/CEST',
      preMarket: '7:30 AM - 9:00 AM',
      regular: '9:00 AM - 5:30 PM',
      afterHours: '5:30 PM - 10:00 PM',
      status: 'closed',
      nextOpen: '2025-03-17 09:00:00',
      country: 'Germany'
    },
    {
      name: 'Hong Kong Stock Exchange',
      timezone: 'HKT',
      preMarket: '9:00 AM - 9:30 AM',
      regular: '9:30 AM - 4:00 PM',
      afterHours: 'N/A',
      status: 'closed',
      nextOpen: '2025-03-17 09:30:00',
      country: 'Hong Kong'
    }
  ];

  const holidays = [
    {
      date: '2025-03-17',
      name: "St. Patrick's Day",
      markets: ['NYSE', 'NASDAQ'],
      type: 'early-close',
      closingTime: '1:00 PM EST'
    },
    {
      date: '2025-04-14',
      name: 'Good Friday',
      markets: ['NYSE', 'NASDAQ', 'LSE'],
      type: 'closed',
      closingTime: null
    },
    {
      date: '2025-05-26',
      name: 'Memorial Day',
      markets: ['NYSE', 'NASDAQ'],
      type: 'closed',
      closingTime: null
    },
    {
      date: '2025-07-04',
      name: 'Independence Day',
      markets: ['NYSE', 'NASDAQ'],
      type: 'closed',
      closingTime: null
    },
    {
      date: '2025-09-01',
      name: 'Labor Day',
      markets: ['NYSE', 'NASDAQ'],
      type: 'closed',
      closingTime: null
    },
    {
      date: '2025-11-27',
      name: 'Thanksgiving Day',
      markets: ['NYSE', 'NASDAQ'],
      type: 'closed',
      closingTime: null
    },
    {
      date: '2025-11-28',
      name: 'Day after Thanksgiving',
      markets: ['NYSE', 'NASDAQ'],
      type: 'early-close',
      closingTime: '1:00 PM EST'
    },
    {
      date: '2025-12-25',
      name: 'Christmas Day',
      markets: ['NYSE', 'NASDAQ', 'LSE'],
      type: 'closed',
      closingTime: null
    }
  ];

  const getMarketStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'pre-market':
      case 'after-hours':
        return <Clock className="w-5 h-5 text-amber-600" />;
      case 'closed':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-slate-400" />;
    }
  };

  const getMarketStatusBadge = (status) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-emerald-100 text-emerald-800">Open</Badge>;
      case 'pre-market':
        return <Badge className="bg-amber-100 text-amber-800">Pre-Market</Badge>;
      case 'after-hours':
        return <Badge className="bg-blue-100 text-blue-800">After Hours</Badge>;
      case 'closed':
        return <Badge className="bg-red-100 text-red-800">Closed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getHolidayBadge = (type) => {
    switch (type) {
      case 'closed':
        return <Badge className="bg-red-100 text-red-800">Market Closed</Badge>;
      case 'early-close':
        return <Badge className="bg-amber-100 text-amber-800">Early Close</Badge>;
      default:
        return <Badge variant="outline">Holiday</Badge>;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Market Hours
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900">
            Global Market Hours & Holidays
          </h1>
          <p className="text-xl text-slate-600">
            Stay informed about trading hours and market holidays worldwide
          </p>
        </div>

        {/* Current Time */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Current Time (UTC)
            </h2>
            <div className="text-3xl font-mono text-emerald-600 mb-2">
              {currentTime.toISOString().split('T')[1].split('.')[0]}
            </div>
            <div className="text-lg text-slate-600">
              {currentTime.toDateString()}
            </div>
          </CardContent>
        </Card>

        {/* Market Status Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-slate-200">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-emerald-600">2</div>
              <div className="text-sm text-slate-600">Markets Open</div>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="p-4 text-center">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">4</div>
              <div className="text-sm text-slate-600">Markets Closed</div>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-600">0</div>
              <div className="text-sm text-slate-600">Pre/After Hours</div>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-slate-600">Upcoming Holidays</div>
            </CardContent>
          </Card>
        </div>

        {/* Major Markets */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
              <Globe className="w-6 h-6 mr-3" />
              Global Market Hours
            </CardTitle>
            <CardDescription>
              Current status and trading hours for major stock exchanges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {markets.map((market, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-slate-900">{market.name}</h3>
                      {getMarketStatusIcon(market.status)}
                      {getMarketStatusBadge(market.status)}
                    </div>
                    <div className="text-sm text-slate-600 space-y-1">
                      <div><strong>Country:</strong> {market.country}</div>
                      <div><strong>Timezone:</strong> {market.timezone}</div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="text-sm">
                      <div className="flex items-center space-x-2">
                        <Sunrise className="w-4 h-4 text-amber-500" />
                        <span className="text-slate-600">Pre: {market.preMarket}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span className="font-medium text-slate-900">Regular: {market.regular}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center space-x-2">
                        <Sunset className="w-4 h-4 text-blue-500" />
                        <span className="text-slate-600">After: {market.afterHours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Holidays */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              Upcoming Market Holidays
            </CardTitle>
            <CardDescription>
              Scheduled market closures and early closing days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {holidays.map((holiday, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-slate-900">{holiday.name}</h3>
                      {getHolidayBadge(holiday.type)}
                    </div>
                    <div className="text-sm text-slate-600">
                      <div className="mb-1">{formatDate(holiday.date)}</div>
                      <div>Affected Markets: {holiday.markets.join(', ')}</div>
                      {holiday.closingTime && (
                        <div>Early Close: {holiday.closingTime}</div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    {holiday.type === 'closed' ? (
                      <XCircle className="w-8 h-8 text-red-600" />
                    ) : (
                      <AlertTriangle className="w-8 h-8 text-amber-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trading Tips */}
        <Card className="border-slate-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Trading Hours Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Pre-Market Trading</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Lower trading volume and higher volatility</li>
                  <li>• Limited order types available</li>
                  <li>• News and earnings often released during this time</li>
                  <li>• Price gaps can occur at market open</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">After-Hours Trading</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Extended trading until 8:00 PM EST</li>
                  <li>• Earnings releases and major announcements</li>
                  <li>• Wider bid-ask spreads</li>
                  <li>• Limited liquidity compared to regular hours</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-100 rounded-lg p-4 mt-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800 mb-1">Important Note</h4>
                  <p className="text-sm text-amber-700">
                    Market hours can change due to holidays, technical issues, or extraordinary market conditions. 
                    Always verify current market status before placing trades.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Zone Converter */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Key Time Zones
            </CardTitle>
            <CardDescription>
              Important time zones for global trading
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { city: 'New York', timezone: 'EST', offset: '-5' },
                { city: 'London', timezone: 'GMT', offset: '0' },
                { city: 'Frankfurt', timezone: 'CET', offset: '+1' },
                { city: 'Tokyo', timezone: 'JST', offset: '+9' },
                { city: 'Hong Kong', timezone: 'HKT', offset: '+8' },
                { city: 'Sydney', timezone: 'AEDT', offset: '+11' }
              ].map((tz, index) => (
                <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="font-medium text-slate-900">{tz.city}</div>
                  <div className="text-sm text-slate-600">{tz.timezone}</div>
                  <div className="text-xs text-slate-500">UTC{tz.offset}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Market Hours Notifications
            </h3>
            <p className="text-slate-600 mb-6">
              Get notified about market openings, closings, and holiday schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors">
                Enable Notifications
              </Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-700 px-6 py-3 text-base cursor-pointer hover:bg-slate-50 transition-colors">
                Calendar Integration
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketHours;