import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Globe, 
  Eye, 
  Newspaper, 
  Search, 
  Briefcase,
  User,
  CreditCard,
  HelpCircle,
  Settings,
  ChevronDown,
  ChevronRight,
  BarChart3,
  FileText,
  Shield,
  Star,
  Calendar
} from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({
    trading: true,
    account: false,
    support: false,
    legal: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigationItems = [
    {
      section: 'main',
      items: [
        { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/market-overview', label: 'Market Overview', icon: Globe },
      ]
    },
    {
      section: 'trading',
      title: 'Trading Tools',
      items: [
        { path: '/stock-lookup', label: 'Stock Lookup', icon: Search },
        { path: '/scanner', label: 'Stock Scanner', icon: BarChart3 },
        { path: '/watchlist', label: 'Watchlist', icon: Eye },
        { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
        { path: '/enhanced-watchlist', label: 'Enhanced Watchlist', icon: Star },
      ]
    },
    {
      section: 'news',
      items: [
        { path: '/news', label: 'Market News', icon: Newspaper },
        { path: '/personalized-news', label: 'Personal News', icon: FileText },
      ]
    },
    {
      section: 'account',
      title: 'Account',
      items: [
        { path: '/account', label: 'My Account', icon: User },
        { path: '/user-settings', label: 'Settings', icon: Settings },
        { path: '/billing-history', label: 'Billing', icon: CreditCard },
        { path: '/premium-plans', label: 'Premium Plans', icon: Star },
      ]
    },
    {
      section: 'support',
      title: 'Support',
      items: [
        { path: '/help-center', label: 'Help Center', icon: HelpCircle },
        { path: '/faq', label: 'FAQ', icon: FileText },
        { path: '/glossary', label: 'Glossary', icon: FileText },
        { path: '/keyboard-shortcuts', label: 'Shortcuts', icon: Settings },
      ]
    },
    {
      section: 'system',
      items: [
        { path: '/status', label: 'System Status', icon: Shield },
        { path: '/market-hours', label: 'Market Hours', icon: Calendar },
      ]
    }
  ];

  const isActiveSection = (sectionItems) => {
    return sectionItems.some(item => location.pathname === item.path);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-bold text-white">Stock Scanner</h2>
              <p className="text-xs text-slate-400">Professional</p>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-slate-300 hover:text-white hover:bg-slate-700"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${!isCollapsed ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((section) => (
          <div key={section.section}>
            {section.title && !isCollapsed && (
              <button
                onClick={() => toggleSection(section.section)}
                className="w-full flex items-center justify-between py-2 px-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg text-sm font-medium"
              >
                <span>{section.title}</span>
                {expandedSections[section.section] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            )}
            
            <div className={`space-y-1 ${
              section.title && !expandedSections[section.section] && !isCollapsed ? 'hidden' : ''
            }`}>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = isActivePath(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                    {!isCollapsed && item.badge && (
                      <Badge variant="destructive" className="ml-auto text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-slate-700">
          <div className="bg-emerald-900/20 border border-emerald-600/30 rounded-lg p-3 text-center">
            <Star className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-white mb-1">Upgrade to Pro</h4>
            <p className="text-xs text-slate-400 mb-3">Get advanced features</p>
            <Button 
              size="sm" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              asChild
            >
              <Link to="/premium-plans">Upgrade</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;