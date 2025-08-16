import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Pagination from './Pagination';
import { ArrowUpDown, ArrowUp, ArrowDown, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

const StockTable = ({ 
  stocks, 
  showSector = false, 
  showAlerts = false, 
  itemsPerPage = 10,
  onRefresh,
  isRefreshing = false,
  title = "Stock Data"
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);

  const sortedStocks = React.useMemo(() => {
    let sortableStocks = [...stocks];
    if (sortConfig.key !== null) {
      sortableStocks.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStocks;
  }, [stocks, sortConfig]);

  // Calculate pagination
  const totalPages = Math.ceil(sortedStocks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStocks = sortedStocks.slice(startIndex, endIndex);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of table when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
    // Reset to first page on refresh
    setCurrentPage(1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const formatVolume = (volume) => {
    if (volume >= 1000000) {
      return (volume / 1000000).toFixed(1) + 'M';
    } else if (volume >= 1000) {
      return (volume / 1000).toFixed(1) + 'K';
    }
    return new Intl.NumberFormat('en-US').format(volume);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
      {/* Table Header with Refresh Button */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <Button
          onClick={handleRefresh}
          variant="outline"
          size="sm"
          disabled={isRefreshing}
          className="border-slate-300 text-slate-700 hover:bg-slate-100"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-semibold text-slate-700">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold text-slate-700 hover:text-slate-900"
                  onClick={() => requestSort('symbol')}
                >
                  Symbol
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-slate-700">Company Name</TableHead>
              <TableHead className="font-semibold text-slate-700 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold text-slate-700 hover:text-slate-900"
                  onClick={() => requestSort('price')}
                >
                  Price
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-slate-700 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold text-slate-700 hover:text-slate-900"
                  onClick={() => requestSort('change')}
                >
                  Change
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-slate-700 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold text-slate-700 hover:text-slate-900"
                  onClick={() => requestSort('changePercent')}
                >
                  % Change
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-slate-700 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 font-semibold text-slate-700 hover:text-slate-900"
                  onClick={() => requestSort('volume')}
                >
                  Volume
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              {showSector && (
                <TableHead className="font-semibold text-slate-700">Sector</TableHead>
              )}
              {showAlerts && (
                <TableHead className="font-semibold text-slate-700 text-center">Alerts</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentStocks.map((stock) => (
              <TableRow 
                key={stock.symbol} 
                className="hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <TableCell className="font-semibold text-slate-900">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{stock.symbol}</span>
                    {stock.changePercent > 0 ? (
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">
                  <div className="max-w-xs truncate">{stock.name}</div>
                </TableCell>
                <TableCell className="text-right font-semibold text-slate-900">
                  {formatPrice(stock.price)}
                </TableCell>
                <TableCell className="text-right">
                  <div className={`flex items-center justify-end space-x-1 ${
                    stock.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {stock.change >= 0 ? (
                      <ArrowUp className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      {formatPrice(Math.abs(stock.change))}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={stock.changePercent >= 0 ? 'default' : 'destructive'}
                    className={stock.changePercent >= 0 ? 
                      'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' : 
                      'bg-red-100 text-red-800 hover:bg-red-200'
                    }
                  >
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-slate-600 font-medium">
                  {formatVolume(stock.volume)}
                </TableCell>
                {showSector && (
                  <TableCell className="text-slate-600">
                    <Badge variant="outline" className="text-xs">
                      {stock.sector}
                    </Badge>
                  </TableCell>
                )}
                {showAlerts && (
                  <TableCell className="text-center">
                    {stock.alerts > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {stock.alerts}
                      </Badge>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalItems={sortedStocks.length}
        />
      )}

      {/* Empty state */}
      {stocks.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <p className="text-lg font-medium">No data available</p>
          <p className="text-sm">Try refreshing or adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

export default StockTable;