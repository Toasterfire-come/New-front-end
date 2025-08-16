import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About StockScan Pro
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're building the future of stock analysis with cutting-edge technology 
            and professional-grade tools trusted by traders worldwide.
          </p>
        </div>

        {/* Mission */}
        <Card className="border-slate-200">
          <CardContent className="p-12 text-center">
            <TrendingUp className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              To democratize professional-grade stock analysis tools and make sophisticated 
              trading strategies accessible to everyone, from individual investors to large institutions.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100K+</div>
            <div className="text-slate-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">50M+</div>
            <div className="text-slate-600">Stocks Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
            <div className="text-slate-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-slate-600">Support</div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', experience: '15 years Wall Street' },
              { name: 'Michael Chen', role: 'CTO', experience: 'Ex-Goldman Sachs Tech' },
              { name: 'Emily Rodriguez', role: 'Head of Research', experience: 'Former Hedge Fund Manager' }
            ].map((member, index) => (
              <Card key={index} className="border-slate-200 text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-slate-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;