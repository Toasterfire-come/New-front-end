import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Mail,
  Smartphone,
  Globe,
  Palette,
  Save,
  CheckCircle
} from 'lucide-react';

const UserSettings = () => {
  const [settings, setSettings] = useState({
    // Profile
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    timezone: 'EST',
    
    // Notifications
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    priceAlerts: true,
    newsAlerts: true,
    marketOpen: true,
    
    // Privacy
    profileVisibility: 'private',
    showActivity: false,
    dataSharing: false,
    
    // Display
    theme: 'light',
    language: 'english',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY'
  });

  const [savedMessage, setSavedMessage] = useState(false);

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggle = (field) => {
    setSettings(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = () => {
    // Simulate save
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">User Settings</h1>
        <p className="text-slate-600">Manage your account preferences and privacy settings</p>
      </div>

      {/* Save Confirmation */}
      {savedMessage && (
        <Card className="border-emerald-200 bg-emerald-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 text-emerald-700">
              <CheckCircle className="w-5 h-5" />
              <span>Settings saved successfully!</span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Information */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
              <User className="w-5 h-5 mr-3" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your personal information and contact details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <Input
                  value={settings.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <Input
                  value={settings.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={settings.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Timezone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleInputChange('timezone', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="EST">Eastern Time (EST)</option>
                <option value="CST">Central Time (CST)</option>
                <option value="MST">Mountain Time (MST)</option>
                <option value="PST">Pacific Time (PST)</option>
                <option value="GMT">Greenwich Mean Time (GMT)</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
              <Bell className="w-5 h-5 mr-3" />
              Notification Preferences
            </CardTitle>
            <CardDescription>
              Choose how you want to receive alerts and updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { key: 'emailAlerts', label: 'Email Alerts', desc: 'Receive notifications via email' },
              { key: 'smsAlerts', label: 'SMS Alerts', desc: 'Get text message notifications' },
              { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications' },
              { key: 'priceAlerts', label: 'Price Alerts', desc: 'Stock price movement notifications' },
              { key: 'newsAlerts', label: 'News Alerts', desc: 'Market news and updates' },
              { key: 'marketOpen', label: 'Market Open/Close', desc: 'Trading session notifications' }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-medium text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
                <button
                  onClick={() => handleToggle(item.key)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings[item.key] ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings[item.key] ? 'transform translate-x-7' : 'transform translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
              <Shield className="w-5 h-5 mr-3" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Control your privacy and data sharing preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Profile Visibility
              </label>
              <select
                value={settings.profileVisibility}
                onChange={(e) => handleInputChange('profileVisibility', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="private">Private</option>
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
              </select>
            </div>
            
            {[
              { key: 'showActivity', label: 'Show Trading Activity', desc: 'Allow others to see your trading activity' },
              { key: 'dataSharing', label: 'Data Sharing', desc: 'Share anonymized data for research' }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-medium text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
                <button
                  onClick={() => handleToggle(item.key)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings[item.key] ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings[item.key] ? 'transform translate-x-7' : 'transform translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Display Preferences */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
              <Palette className="w-5 h-5 mr-3" />
              Display Preferences
            </CardTitle>
            <CardDescription>
              Customize the appearance and format settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Theme
              </label>
              <select
                value={settings.theme}
                onChange={(e) => handleInputChange('theme', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto (System)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Currency
              </label>
              <select
                value={settings.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Date Format
              </label>
              <select
                value={settings.dateFormat}
                onChange={(e) => handleInputChange('dateFormat', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleSave}
          size="lg" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
        >
          <Save className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default UserSettings;