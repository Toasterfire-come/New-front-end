import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { User, Mail, Phone, Calendar, Settings, Shield } from 'lucide-react';

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2023-03-15',
    plan: 'Professional',
    status: 'Active'
  });

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Account</h1>
            <p className="text-slate-300 text-lg">Manage your profile and account settings</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-emerald-600 text-white">
              {userInfo.plan}
            </Badge>
            <Badge className="bg-green-600 text-white">
              {userInfo.status}
            </Badge>
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <User className="w-5 h-5 text-slate-600" />
              <span>Profile Information</span>
            </CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">First Name</label>
                <Input 
                  value={userInfo.firstName}
                  onChange={(e) => setUserInfo(prev => ({...prev, firstName: e.target.value}))}
                  className="border-slate-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Last Name</label>
                <Input 
                  value={userInfo.lastName}
                  onChange={(e) => setUserInfo(prev => ({...prev, lastName: e.target.value}))}
                  className="border-slate-300"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <Input 
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo(prev => ({...prev, email: e.target.value}))}
                className="border-slate-300"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Phone Number</label>
              <Input 
                type="tel"
                value={userInfo.phone}
                onChange={(e) => setUserInfo(prev => ({...prev, phone: e.target.value}))}
                className="border-slate-300"
              />
            </div>
            
            <div className="pt-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-slate-600" />
              <span>Account Security</span>
            </CardTitle>
            <CardDescription>Manage your account security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">Password</h4>
                <p className="text-sm text-slate-600">Last updated 30 days ago</p>
              </div>
              <Button variant="outline" size="sm">Change</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">Two-Factor Authentication</h4>
                <p className="text-sm text-slate-600">Add an extra layer of security</p>
              </div>
              <Button variant="outline" size="sm">Enable</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">Login Activity</h4>
                <p className="text-sm text-slate-600">Review your recent login sessions</p>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Overview */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800">Account Overview</CardTitle>
          <CardDescription>Your account details and subscription information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Member Since</p>
                <p className="font-semibold text-slate-900">{new Date(userInfo.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Current Plan</p>
                <p className="font-semibold text-slate-900">{userInfo.plan}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Account Status</p>
                <p className="font-semibold text-emerald-600">{userInfo.status}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Account;