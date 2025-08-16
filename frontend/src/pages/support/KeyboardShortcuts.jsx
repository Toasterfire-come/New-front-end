import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { 
  Search, 
  Keyboard, 
  Navigation,
  Eye,
  BarChart3,
  Filter,
  Plus,
  Settings,
  Command,
  Option,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const KeyboardShortcuts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const shortcutCategories = [
    {
      icon: Navigation,
      title: 'Navigation',
      color: 'bg-emerald-100 text-emerald-600',
      shortcuts: [
        { keys: ['G', 'D'], description: 'Go to Dashboard', context: 'Global' },
        { keys: ['G', 'S'], description: 'Go to Stock Scanner', context: 'Global' },
        { keys: ['G', 'W'], description: 'Go to Watchlist', context: 'Global' },
        { keys: ['G', 'M'], description: 'Go to Market Overview', context: 'Global' },
        { keys: ['G', 'P'], description: 'Go to Portfolio', context: 'Global' },
        { keys: ['G', 'N'], description: 'Go to News', context: 'Global' },
        { keys: ['H'], description: 'Go to Home/Help', context: 'Global' },
        { keys: ['?'], description: 'Show keyboard shortcuts', context: 'Global' }
      ]
    },
    {
      icon: Search,
      title: 'Search & Filtering',
      color: 'bg-blue-100 text-blue-600',
      shortcuts: [
        { keys: ['Ctrl', '/'], description: 'Focus search bar', context: 'Global' },
        { keys: ['F'], description: 'Open stock finder', context: 'Global' },
        { keys: ['Ctrl', 'F'], description: 'Find in page', context: 'Browser' },
        { keys: ['Enter'], description: 'Execute search/filter', context: 'Search' },
        { keys: ['Esc'], description: 'Clear search/Close modal', context: 'Search' },
        { keys: ['Tab'], description: 'Navigate between filters', context: 'Screening' },
        { keys: ['Shift', 'Tab'], description: 'Navigate backwards between filters', context: 'Screening' }
      ]
    },
    {
      icon: Eye,
      title: 'Watchlist Management',
      color: 'bg-purple-100 text-purple-600',
      shortcuts: [
        { keys: ['A'], description: 'Add stock to watchlist', context: 'Stock View' },
        { keys: ['R'], description: 'Remove stock from watchlist', context: 'Watchlist' },
        { keys: ['N'], description: 'Create new watchlist', context: 'Watchlist' },
        { keys: ['E'], description: 'Edit watchlist name', context: 'Watchlist' },
        { keys: ['D'], description: 'Delete watchlist', context: 'Watchlist' },
        { keys: ['↑'], description: 'Select previous stock', context: 'Watchlist' },
        { keys: ['↓'], description: 'Select next stock', context: 'Watchlist' },
        { keys: ['Space'], description: 'Toggle stock selection', context: 'Watchlist' }
      ]
    },
    {
      icon: BarChart3,
      title: 'Charts & Analysis',
      color: 'bg-amber-100 text-amber-600',
      shortcuts: [
        { keys: ['C'], description: 'Open chart view', context: 'Stock View' },
        { keys: ['1'], description: 'Switch to 1 day chart', context: 'Chart' },
        { keys: ['5'], description: 'Switch to 5 day chart', context: 'Chart' },
        { keys: ['M'], description: 'Switch to 1 month chart', context: 'Chart' },
        { keys: ['Y'], description: 'Switch to 1 year chart', context: 'Chart' },
        { keys: ['+'], description: 'Zoom in on chart', context: 'Chart' },
        { keys: ['-'], description: 'Zoom out on chart', context: 'Chart' },
        { keys: ['I'], description: 'Toggle technical indicators', context: 'Chart' },
        { keys: ['L'], description: 'Toggle chart lines/candles', context: 'Chart' }
      ]
    },
    {
      icon: Filter,
      title: 'Data Management',
      color: 'bg-pink-100 text-pink-600',
      shortcuts: [
        { keys: ['Ctrl', 'R'], description: 'Refresh data', context: 'Global' },
        { keys: ['S'], description: 'Save current screen/filter', context: 'Screening' },
        { keys: ['Ctrl', 'S'], description: 'Save watchlist/portfolio', context: 'Lists' },
        { keys: ['Ctrl', 'E'], description: 'Export data to CSV', context: 'Tables' },
        { keys: ['Ctrl', 'P'], description: 'Print current view', context: 'Global' },
        { keys: ['Ctrl', 'Z'], description: 'Undo last action', context: 'Global' },
        { keys: ['Ctrl', 'Y'], description: 'Redo last action', context: 'Global' }
      ]
    },
    {
      icon: Settings,
      title: 'Application Controls',
      color: 'bg-red-100 text-red-600',
      shortcuts: [
        { keys: ['Ctrl', ','], description: 'Open settings/preferences', context: 'Global' },
        { keys: ['Alt', 'T'], description: 'Toggle theme (light/dark)', context: 'Global' },
        { keys: ['Ctrl', 'B'], description: 'Toggle sidebar', context: 'Global' },
        { keys: ['F11'], description: 'Toggle fullscreen', context: 'Browser' },
        { keys: ['Ctrl', 'Shift', 'I'], description: 'Open developer tools', context: 'Debug' },
        { keys: ['Ctrl', 'Shift', 'R'], description: 'Hard refresh (clear cache)', context: 'Browser' },
        { keys: ['Alt', 'F4'], description: 'Close application/tab', context: 'Browser' }
      ]
    }
  ];

  const categories = ['All', ...shortcutCategories.map(cat => cat.title)];

  const filteredShortcuts = shortcutCategories
    .filter(category => selectedCategory === 'All' || category.title === selectedCategory)
    .map(category => ({
      ...category,
      shortcuts: category.shortcuts.filter(shortcut =>
        shortcut.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.keys.some(key => key.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }))
    .filter(category => category.shortcuts.length > 0);

  const renderKey = (key) => {
    const keyIcons = {
      'Ctrl': Command,
      'Alt': Option,
      'Shift': Shift,
      '↑': ArrowUp,
      '↓': ArrowDown,
      '←': ArrowLeft,
      '→': ArrowRight
    };

    const Icon = keyIcons[key];
    
    return (
      <kbd className="px-2 py-1 text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-300 rounded-lg shadow-sm">
        {Icon ? <Icon className="w-3 h-3" /> : key}
      </kbd>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-emerald-600 text-white px-4 py-2">
            Keyboard Shortcuts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Work Faster with Shortcuts
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Master these keyboard shortcuts to navigate StockScan Pro efficiently and boost your productivity. 
            Perfect for power users and professional traders.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search shortcuts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">
                  {shortcutCategories.reduce((acc, cat) => acc + cat.shortcuts.length, 0)}+
                </div>
                <div className="text-sm text-slate-600">Total Shortcuts</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">{shortcutCategories.length}</div>
                <div className="text-sm text-slate-600">Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">Global</div>
                <div className="text-sm text-slate-600">Most Shortcuts</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-amber-600">Updated</div>
                <div className="text-sm text-slate-600">March 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Shortcuts List */}
        <div className="space-y-8">
          {filteredShortcuts.length > 0 ? (
            filteredShortcuts.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card key={categoryIndex} className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {category.title}
                      <Badge variant="outline" className="ml-auto">
                        {category.shortcuts.length} shortcuts
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {category.shortcuts.map((shortcut, shortcutIndex) => (
                        <div
                          key={shortcutIndex}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-slate-900 mb-1">
                              {shortcut.description}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {shortcut.context}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-1 ml-4">
                            {shortcut.keys.map((key, keyIndex) => (
                              <React.Fragment key={keyIndex}>
                                {keyIndex > 0 && (
                                  <span className="text-slate-400 text-sm">+</span>
                                )}
                                {renderKey(key)}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="border-slate-200">
              <CardContent className="p-12 text-center">
                <Keyboard className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No shortcuts found
                </h3>
                <p className="text-slate-600 mb-6">
                  No shortcuts match your search criteria. Try different keywords or browse by category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Clear search and filters
                </button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Tips Section */}
        <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Productivity Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Getting Started</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Start with navigation shortcuts (G + letter combinations)</li>
                  <li>• Practice search shortcuts for faster stock lookup</li>
                  <li>• Use Ctrl+/ to quickly access the search bar</li>
                  <li>• Master watchlist shortcuts for efficient stock management</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Advanced Usage</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Combine shortcuts for complex workflows</li>
                  <li>• Use chart shortcuts for rapid technical analysis</li>
                  <li>• Create custom shortcuts in browser settings</li>
                  <li>• Remember context-specific shortcuts for each page</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Print/Save Reference */}
        <Card className="border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-8 text-center">
            <Keyboard className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Reference
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Print this page or bookmark it for quick access to all keyboard shortcuts while trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge 
                className="bg-emerald-600 text-white px-6 py-3 text-base cursor-pointer hover:bg-emerald-700 transition-colors"
                onClick={() => window.print()}
              >
                Print Reference Card
              </Badge>
              <Badge 
                variant="outline" 
                className="border-slate-300 text-slate-700 px-6 py-3 text-base cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => {
                  const shortcuts = shortcutCategories.map(cat => 
                    cat.shortcuts.map(s => `${s.keys.join('+')} - ${s.description}`).join('\n')
                  ).join('\n\n');
                  navigator.clipboard.writeText(shortcuts);
                  alert('Shortcuts copied to clipboard!');
                }}
              >
                Copy All Shortcuts
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;