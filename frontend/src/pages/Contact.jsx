import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about StockScan Pro? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
                <span>Send us a Message</span>
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Subject</label>
                <Input
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({...prev, subject: e.target.value}))}
                  className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                  className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">support@stockscanpro.com</p>
                    <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-500">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Office</h3>
                    <p className="text-slate-600">123 Financial District</p>
                    <p className="text-slate-600">New York, NY 10004</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">Support Hours</CardTitle>
                <CardDescription>
                  When you can reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Monday - Friday</span>
                    <span className="font-semibold text-slate-900">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Saturday</span>
                    <span className="font-semibold text-slate-900">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Sunday</span>
                    <span className="text-slate-600">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-emerald-700 mb-4">
                  Check out our comprehensive help center with tutorials and FAQs
                </p>
                <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-100">
                  Visit Help Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;