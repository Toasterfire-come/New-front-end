import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  CreditCard, 
  Download, 
  Calendar,
  DollarSign,
  FileText,
  Search,
  Filter,
  RefreshCw
} from 'lucide-react';

const BillingHistory = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const billingHistory = [
    {
      id: 'INV-2025-003',
      date: '2025-03-15',
      description: 'Professional Plan - Monthly',
      amount: 29.00,
      tax: 2.32,
      total: 31.32,
      status: 'paid',
      paymentMethod: 'PayPal',
      downloadUrl: '#'
    },
    {
      id: 'INV-2025-002',
      date: '2025-02-15',
      description: 'Professional Plan - Monthly',
      amount: 29.00,
      tax: 2.32,
      total: 31.32,
      status: 'paid',
      paymentMethod: 'PayPal',
      downloadUrl: '#'
    },
    {
      id: 'INV-2025-001',
      date: '2025-01-15',
      description: 'Professional Plan - Monthly',
      amount: 29.00,
      tax: 2.32,
      total: 31.32,
      status: 'paid',
      paymentMethod: 'PayPal',
      downloadUrl: '#'
    },
    {
      id: 'INV-2024-012',
      date: '2024-12-15',
      description: 'Starter Plan - Monthly',
      amount: 0.00,
      tax: 0.00,
      total: 0.00,
      status: 'paid',
      paymentMethod: 'Free Plan',
      downloadUrl: '#'
    },
    {
      id: 'INV-2024-011',
      date: '2024-11-20',
      description: 'Professional Plan - Annual',
      amount: 290.00,
      tax: 23.20,
      total: 313.20,
      status: 'refunded',
      paymentMethod: 'PayPal',
      downloadUrl: '#'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-emerald-100 text-emerald-800">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-amber-100 text-amber-800">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      case 'refunded':
        return <Badge className="bg-blue-100 text-blue-800">Refunded</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const filteredHistory = billingHistory.filter(item => {
    const matchesPeriod = selectedPeriod === 'all' || 
      (selectedPeriod === '2025' && item.date.startsWith('2025')) ||
      (selectedPeriod === '2024' && item.date.startsWith('2024'));
    
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    
    return matchesPeriod && matchesStatus;
  });

  const totalSpent = billingHistory
    .filter(item => item.status === 'paid')
    .reduce((sum, item) => sum + item.total, 0);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Billing History</h1>
          <p className="text-slate-600">View and download your payment history and invoices</p>
        </div>
        <Button variant="outline" className="flex items-center space-x-2">
          <RefreshCw className="w-4 h-4" />
          <span>Refresh</span>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">${totalSpent.toFixed(2)}</div>
            <div className="text-sm text-slate-600">Total Spent</div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">{billingHistory.length}</div>
            <div className="text-sm text-slate-600">Total Invoices</div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">15th</div>
            <div className="text-sm text-slate-600">Next Billing</div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <CreditCard className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">PayPal</div>
            <div className="text-sm text-slate-600">Payment Method</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-slate-200">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Time Period
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Time</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Statuses</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <Button variant="outline" className="flex items-center space-x-2">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing History Table */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900">
            Invoice History
          </CardTitle>
          <CardDescription>
            Showing {filteredHistory.length} of {billingHistory.length} invoices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-900">Invoice</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900">Payment</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.map((invoice, index) => (
                  <tr key={invoice.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-slate-900">{invoice.id}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {formatDate(invoice.date)}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {invoice.description}
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-slate-900 font-medium">${invoice.total.toFixed(2)}</div>
                      {invoice.tax > 0 && (
                        <div className="text-xs text-slate-500">
                          Subtotal: ${invoice.amount.toFixed(2)} + Tax: ${invoice.tax.toFixed(2)}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(invoice.status)}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {invoice.paymentMethod}
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-1"
                        onClick={() => window.open(invoice.downloadUrl, '_blank')}
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredHistory.length === 0 && (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No invoices found</h3>
              <p className="text-slate-600">No invoices match your current filter criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Current Plan Info */}
      <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900">
            Current Subscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-slate-600 mb-1">Current Plan</div>
              <div className="text-lg font-semibold text-slate-900">Professional</div>
              <div className="text-sm text-emerald-600">$29.00/month</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Next Billing Date</div>
              <div className="text-lg font-semibold text-slate-900">April 15, 2025</div>
              <div className="text-sm text-slate-500">Auto-renewal enabled</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Payment Method</div>
              <div className="text-lg font-semibold text-slate-900">PayPal</div>
              <Button variant="outline" size="sm" className="mt-1">
                Update Payment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900">
            Export Options
          </CardTitle>
          <CardDescription>
            Download your billing history in various formats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download CSV</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download PDF Summary</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Tax Summary</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingHistory;