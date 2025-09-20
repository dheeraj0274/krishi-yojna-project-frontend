import React, { useState } from 'react';
import { ChevronRight, Users, DollarSign, Sprout, Truck, Shield, ChevronDown, ExternalLink, Calendar, MapPin, FileText } from 'lucide-react';

const GovernmentSchemesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedScheme, setExpandedScheme] = useState(null);

  const categories = [
    { id: 'all', name: 'All Schemes', icon: FileText },
    { id: 'crop', name: 'Crop Support', icon: Sprout },
    { id: 'financial', name: 'Financial Aid', icon: DollarSign },
    { id: 'equipment', name: 'Equipment', icon: Truck },
    { id: 'insurance', name: 'Insurance', icon: Shield },
    { id: 'training', name: 'Training', icon: Users }
  ];

  const schemes = [
    {
      id: 1,
      title: 'PM-KISAN Scheme',
      category: 'financial',
      amount: '₹6,000/year',
      status: 'Active',
      description: 'Direct income support to small and marginal farmers',
      eligibility: 'Small & marginal farmers with landholding up to 2 hectares',
      documents: ['Land Records', 'Aadhaar Card', 'Bank Details'],
      applicationDeadline: 'Open throughout the year',
      benefits: [
        '₹2,000 transferred directly to bank account every 4 months',
        'No intermediary involved',
        'Coverage for all farmers irrespective of crop choice'
      ],
      howToApply: 'Online through PM-KISAN portal or visit nearest Common Service Center',
      contactInfo: 'Helpline: 011-24300606'
    },
    {
      id: 2,
      title: 'Crop Insurance Scheme (PMFBY)',
      category: 'insurance',
      amount: 'Up to ₹2 Lakh coverage',
      status: 'Active',
      description: 'Comprehensive crop insurance against natural calamities',
      eligibility: 'All farmers including tenant farmers and sharecroppers',
      documents: ['Land Records', 'Aadhaar Card', 'Bank Account', 'Sowing Certificate'],
      applicationDeadline: 'Before sowing season',
      benefits: [
        'Protection against yield losses due to natural calamities',
        'Premium rates: 2% for Kharif, 1.5% for Rabi crops',
        'Quick settlement within 30 days of harvest'
      ],
      howToApply: 'Through banks, insurance companies, or online portal',
      contactInfo: 'Toll-free: 14447'
    },
    {
      id: 3,
      title: 'Kisan Credit Card (KCC)',
      category: 'financial',
      amount: 'Up to ₹3 Lakh',
      status: 'Active',
      description: 'Easy access to credit for farming activities',
      eligibility: 'All farmers including tenant farmers, oral lessees, and sharecroppers',
      documents: ['Land Records', 'Identity Proof', 'Address Proof'],
      applicationDeadline: 'Open throughout the year',
      benefits: [
        'Simple documentation and procedure',
        'Built-in crop insurance coverage',
        'Flexible repayment options'
      ],
      howToApply: 'Visit nearest bank branch or apply online',
      contactInfo: 'Contact your nearest bank branch'
    },
    {
      id: 4,
      title: 'Soil Health Card Scheme',
      category: 'crop',
      amount: 'Free service',
      status: 'Active',
      description: 'Soil testing and nutrient management recommendations',
      eligibility: 'All farmers across the country',
      documents: ['Land Records', 'Aadhaar Card'],
      applicationDeadline: 'Open throughout the year',
      benefits: [
        'Free soil testing every 3 years',
        'Customized fertilizer recommendations',
        'Improved crop productivity and soil health'
      ],
      howToApply: 'Contact local agriculture officer or soil testing laboratory',
      contactInfo: 'State Agriculture Department'
    },
    {
      id: 5,
      title: 'Farm Mechanization Scheme',
      category: 'equipment',
      amount: '25-50% subsidy',
      status: 'Active',
      description: 'Subsidies on agricultural machinery and equipment',
      eligibility: 'Small and marginal farmers, women farmers, SC/ST farmers',
      documents: ['Land Records', 'Aadhaar Card', 'Bank Details', 'Quotation'],
      applicationDeadline: 'As per state notification',
      benefits: [
        'Up to 50% subsidy for women and SC/ST farmers',
        'Custom Hiring Centers for shared machinery',
        'Training on equipment operation and maintenance'
      ],
      howToApply: 'Apply through state agriculture department portal',
      contactInfo: 'District Collector Office'
    },
    {
      id: 6,
      title: 'Farmer Training Programs',
      category: 'training',
      amount: 'Free training + stipend',
      status: 'Active',
      description: 'Skill development and modern farming techniques',
      eligibility: 'All farmers interested in learning new techniques',
      documents: ['Aadhaar Card', 'Farm details'],
      applicationDeadline: 'As per training schedule',
      benefits: [
        'Free training on modern farming practices',
        'Exposure visits to model farms',
        'Certificate and sometimes stipend provided'
      ],
      howToApply: 'Contact Krishi Vigyan Kendra (KVK) or Agriculture Extension Officer',
      contactInfo: 'Nearest KVK or Agriculture University'
    }
  ];

  const filteredSchemes = activeCategory === 'all' 
    ? schemes 
    : schemes.filter(scheme => scheme.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Limited': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Closed': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <FileText className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Government Schemes & Subsidies
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore comprehensive government support programs designed to empower farmers with financial aid, 
          insurance coverage, training, and modern equipment subsidies.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredSchemes.map((scheme) => (
          <div key={scheme.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{scheme.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(scheme.status)}`}>
                  {scheme.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{scheme.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-lg font-bold text-green-600">{scheme.amount}</span>
                </div>
                <button
                  onClick={() => setExpandedScheme(expandedScheme === scheme.id ? null : scheme.id)}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Details
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expandedScheme === scheme.id ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Expanded Details */}
            {expandedScheme === scheme.id && (
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="space-y-4">
                  {/* Eligibility */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      Eligibility
                    </h4>
                    <p className="text-gray-700 text-sm">{scheme.eligibility}</p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <ChevronRight className="w-3 h-3 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents Required */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-purple-600" />
                      Required Documents
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {scheme.documents.map((doc, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Application Details */}
                  <div className="grid grid-cols-1 gap-3 pt-2 border-t border-gray-200">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                      <span className="font-medium">Deadline:</span>
                      <span className="ml-2 text-gray-700">{scheme.applicationDeadline}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <ExternalLink className="w-4 h-4 mr-2 text-blue-600 mt-0.5" />
                      <div>
                        <span className="font-medium">How to Apply:</span>
                        <p className="text-gray-700 mt-1">{scheme.howToApply}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-red-600" />
                      <span className="font-medium">Contact:</span>
                      <span className="ml-2 text-gray-700">{scheme.contactInfo}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    Apply Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Applications?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is here to guide you through the application process and help you access the right schemes for your farming needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Contact Support
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <FileText className="w-5 h-5 mr-2" />
              Download Guide
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          <div className="text-2xl font-bold text-green-600">50+</div>
          <div className="text-gray-600 text-sm">Active Schemes</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          <div className="text-2xl font-bold text-blue-600">₹2L Cr+</div>
          <div className="text-gray-600 text-sm">Total Support</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          <div className="text-2xl font-bold text-purple-600">12 Cr+</div>
          <div className="text-gray-600 text-sm">Beneficiaries</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          <div className="text-2xl font-bold text-orange-600">24/7</div>
          <div className="text-gray-600 text-sm">Support</div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemesSection;