import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">StockScan Pro</h3>
                <p className="text-xs text-slate-400">Professional Stock Analysis</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Advanced stock scanning and market analysis tools for professional traders and investors.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@stockscanpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/scanner" className="hover:text-emerald-400 transition-colors">Stock Scanner</Link></li>
              <li><Link to="/market" className="hover:text-emerald-400 transition-colors">Market Overview</Link></li>
              <li><Link to="/watchlist" className="hover:text-emerald-400 transition-colors">Watchlist</Link></li>
              <li><Link to="/news" className="hover:text-emerald-400 transition-colors">Market News</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Trading Guides</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Market Data</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Risk Warning</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © 2025 StockScan Pro. All rights reserved. Market data provided by third-party sources.
          </div>
          <div className="text-sm text-slate-400">
            <span className="text-emerald-400">Market Status:</span> Open • Last Update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;