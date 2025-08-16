import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock,
  Server,
  Database,
  Globe,
  Zap,
  BarChart3,
  Activity
} from 'lucide-react';

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const overallStatus = {
    status: 'operational',
    message: 'All systems operational'
  };

  const services = [
    {
      name: 'StockScan Pro Website',
      description: 'Main website and user interface',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '245ms',
      icon: Globe
    },
    {
      name: 'Market Data Feed',
      description: 'Real-time stock quotes and market data',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '12ms',
      icon: BarChart3
    },
    {
      name: 'Stock Scanner API',
      description: 'Advanced screening and filtering service',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '180ms',
      icon: Zap
    },
    {
      name: 'User Authentication',
      description: 'Login and account management system',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '95ms',
      icon: Server
    },
    {
      name: 'Database Systems',
      description: 'Primary and backup database clusters',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '8ms',
      icon: Database
    },
    {
      name: 'Payment Processing',
      description: 'Subscription and billing services',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '320ms',
      icon: CheckCircle
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Planned Maintenance: Database Optimization',
      description: 'Scheduled database optimization to improve query performance',
      status: 'scheduled',
      severity: 'maintenance',
      startTime: '2025-03-20 02:00 UTC',
      duration: '2 hours',
      services: ['Database Systems', 'Stock Scanner API']
    },
    {
      id: 2,
      title: 'Market Data Feed Intermittent Delays',
      description: 'Some users may experience delays in real-time market data updates',
      status: 'investigating',
      severity: 'minor',
      startTime: '2025-03-15 14:30 UTC',
      services: ['Market Data Feed']
    },
    {
      id: 3,
      title: 'Payment Processing Resolved',
      description: 'Issue with PayPal integration causing payment failures has been resolved',
      status: 'resolved',
      severity: 'major',
      startTime: '2025-03-10 09:15 UTC',
      resolvedTime: '2025-03-10 11:45 UTC',
      services: ['Payment Processing']
    }
  ];

  const metrics = [
    {
      title: 'Overall Uptime',
      value: '99.96%',
      description: 'Last 30 days',
      trend: 'up',
      color: 'text-emerald-600'
    },
    {
      title: 'Avg Response Time',
      value: '142ms',
      description: 'Last 24 hours',
      trend: 'stable',
      color: 'text-blue-600'
    },
    {
      title: 'Active Users',
      value: '12,847',
      description: 'Currently online',
      trend: 'up',
      color: 'text-purple-600'
    },
    {
      title: 'API Requests',
      value: '2.4M',
      description: 'Last hour',
      trend: 'stable',
      color: 'text-amber-600'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'down':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-emerald-100 text-emerald-800">Operational</Badge>;
      case 'degraded':
        return <Badge className="bg-amber-100 text-amber-800">Degraded</Badge>;
      case 'down':
        return <Badge className="bg-red-100 text-red-800">Down</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getIncidentBadge = (severity, status) => {
    if (status === 'resolved') {
      return <Badge className="bg-emerald-100 text-emerald-800">Resolved</Badge>;
    }
    
    switch (severity) {
      case 'critical':
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>;
      case 'major':
        return <Badge className="bg-amber-100 text-amber-800">Major</Badge>;
      case 'minor':
        return <Badge className="bg-blue-100 text-blue-800">Minor</Badge>;
      case 'maintenance':
        return <Badge className="bg-purple-100 text-purple-800">Maintenance</Badge>;
      default:
        return <Badge variant="outline">Info</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            System Status
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900">
            StockScan Pro System Status
          </h1>
          <p className="text-xl text-slate-600">
            Real-time monitoring of our platform services and infrastructure
          </p>
          <div className="text-sm text-slate-500">
            Last updated: {lastUpdated.toLocaleTimeString()} UTC
          </div>
        </div>

        {/* Overall Status */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              {getStatusIcon(overallStatus.status)}
              <h2 className="text-2xl font-bold text-slate-900">
                {overallStatus.message}
              </h2>
            </div>
            <p className="text-lg text-slate-600">
              All core services are running smoothly with normal performance levels.
            </p>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6 text-center">
                <div className={`text-2xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-slate-900 mb-1">
                  {metric.title}
                </div>
                <div className="text-xs text-slate-500">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Status */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Service Status
            </CardTitle>
            <CardDescription>
              Current status of all StockScan Pro services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{service.name}</div>
                        <div className="text-sm text-slate-600">{service.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-right">
                      <div className="hidden md:block">
                        <div className="text-sm text-slate-600">Uptime</div>
                        <div className="font-medium text-slate-900">{service.uptime}</div>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-sm text-slate-600">Response</div>
                        <div className="font-medium text-slate-900">{service.responseTime}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(service.status)}
                        {getStatusBadge(service.status)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Incidents & Maintenance
            </CardTitle>
            <CardDescription>
              Recent incidents, scheduled maintenance, and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={incident.id} className="border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{incident.title}</h3>
                        {getIncidentBadge(incident.severity, incident.status)}
                      </div>
                      <p className="text-slate-600 mb-3">{incident.description}</p>
                      <div className="text-sm text-slate-500">
                        <div>Started: {incident.startTime}</div>
                        {incident.duration && <div>Duration: {incident.duration}</div>}
                        {incident.resolvedTime && <div>Resolved: {incident.resolvedTime}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {incident.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Charts Placeholder */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Performance Metrics (Last 24 Hours)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-6 text-center">
                <Activity className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h4 className="font-medium text-slate-900 mb-2">Response Time</h4>
                <p className="text-sm text-slate-600">Average: 142ms</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 text-center">
                <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h4 className="font-medium text-slate-900 mb-2">API Requests</h4>
                <p className="text-sm text-slate-600">Peak: 45,000/min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Historical Uptime */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Historical Uptime
            </CardTitle>
            <CardDescription>
              Service availability over the past 90 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.96%</div>
                <div className="text-sm text-slate-600">30 Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.94%</div>
                <div className="text-sm text-slate-600">60 Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.92%</div>
                <div className="text-sm text-slate-600">90 Days</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscribe to Updates */}
        <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Stay Informed
            </h3>
            <p className="text-slate-600 mb-6">
              Get notified about system status updates, scheduled maintenance, and service incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors">
                Subscribe to Status Updates
              </Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-700 px-6 py-3 text-base cursor-pointer hover:bg-slate-50 transition-colors">
                RSS Feed
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="border-slate-200 bg-slate-100">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Need Help?
            </h3>
            <p className="text-slate-600 mb-4">
              If you're experiencing issues not shown here, please contact our support team.
            </p>
            <div className="text-sm text-slate-600">
              <div>Email: support@stockscanpro.com</div>
              <div>Phone: +1 (555) 123-4567</div>
              <div>Available 24/7</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Status;