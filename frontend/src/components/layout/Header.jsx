import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Search, TrendingUp, Bell, Settings, User, Menu } from 'lucide-react';

const Header = ({ showFullNav = false }) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/market-overview', label: 'Markets' },
    { path: '/scanner', label: 'Scanner' },
    { path: '/watchlist', label: 'Watchlist' },
    { path: '/news', label: 'News' }
  ];

  return (
    <header className="bg-slate-900 text-white shadow-lg border-b border-slate-700">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {showFullNav && (
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">StockScan Pro</h1>
                  <p className="text-xs text-slate-400">Professional Stock Analysis</p>
                </div>
              </Link>
            )}
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search stocks, symbols..." 
                className="pl-10 bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden md:block">
              <p className="text-sm text-slate-300">S&P 500</p>
              <div className="flex items-center space-x-1">
                <span className="text-sm text-emerald-400 font-medium">+0.52%</span>
                <Badge className="bg-emerald-600 text-white text-xs px-1">LIVE</Badge>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-700 relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-700">
              <Settings className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-700">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Full Navigation for Marketing Pages */}
        {showFullNav && (
          <nav className="mt-4 pt-4 border-t border-slate-700">
            <ul className="flex space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-emerald-600 text-white shadow-lg' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;