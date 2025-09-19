import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const CropYieldAnalytics = () => {
  const [activeTab, setActiveTab] = useState('Crop Yield');
  const [selectedState, setSelectedState] = useState('Punjab');

  // State-wise soil data based on research - farmer-friendly categories
  const stateWiseSoilData = {
    'Punjab': [
      { type: 'Good for Rice & Wheat', value: 45, color: '#22c55e' },
      { type: 'Needs Organic Matter', value: 30, color: '#eab308' },
      { type: 'Over-fertilized Areas', value: 15, color: '#f97316' },
      { type: 'Salt-affected', value: 10, color: '#ef4444' }
    ],
    'Haryana': [
      { type: 'Fertile for Grains', value: 40, color: '#22c55e' },
      { type: 'Low Organic Carbon', value: 35, color: '#eab308' },
      { type: 'Salt-affected', value: 15, color: '#f97316' },
      { type: 'Poor Drainage', value: 10, color: '#ef4444' }
    ],
    'Uttar Pradesh': [
      { type: 'Good for Crops', value: 35, color: '#22c55e' },
      { type: 'Needs Nitrogen', value: 30, color: '#eab308' },
      { type: 'Waterlogged Areas', value: 20, color: '#f97316' },
      { type: 'Acidic Soil', value: 15, color: '#ef4444' }
    ],
    'Maharashtra': [
      { type: 'Black Cotton Soil', value: 50, color: '#22c55e' },
      { type: 'Needs Water Retention', value: 25, color: '#eab308' },
      { type: 'Iron Deficient', value: 15, color: '#f97316' },
      { type: 'Rocky/Hard Soil', value: 10, color: '#ef4444' }
    ],
    'West Bengal': [
      { type: 'Rice Growing Soil', value: 45, color: '#22c55e' },
      { type: 'High Organic Matter', value: 25, color: '#84cc16' },
      { type: 'Waterlogged', value: 20, color: '#eab308' },
      { type: 'Acidic Areas', value: 10, color: '#f97316' }
    ],
    'Bihar': [
      { type: 'Fertile Alluvial', value: 40, color: '#22c55e' },
      { type: 'Flood-affected', value: 25, color: '#eab308' },
      { type: 'Nitrogen Poor', value: 20, color: '#f97316' },
      { type: 'Saline Patches', value: 15, color: '#ef4444' }
    ],
    'Rajasthan': [
      { type: 'Sandy Soil', value: 35, color: '#eab308' },
      { type: 'Good for Millets', value: 25, color: '#22c55e' },
      { type: 'Water Scarce', value: 25, color: '#f97316' },
      { type: 'Salt-affected', value: 15, color: '#ef4444' }
    ],
    'Tamil Nadu': [
      { type: 'Rice Belt Soil', value: 35, color: '#22c55e' },
      { type: 'Red Soil Areas', value: 30, color: '#84cc16' },
      { type: 'Low Organic Carbon', value: 20, color: '#eab308' },
      { type: 'Coastal Saline', value: 15, color: '#f97316' }
    ]
  };

  // Get current state's soil data
  const soilQualityData = stateWiseSoilData[selectedState];

  // Sample data for different views
  const cropYieldData = [
    { state: 'Punjab', wheat: 4.2, rice: 3.8, sugarcane: 75 },
    { state: 'Haryana', wheat: 3.8, rice: 3.8, sugarcane: 65 },
    { state: 'UP', wheat: 3.2, rice: 2.8, sugarcane: 75 },
    { state: 'Maharashtra', wheat: 2.1, rice: 2.5, sugarcane: 85 },
    { state: 'West Bengal', wheat: 2.8, rice: 4.1, sugarcane: 55 },
    { state: 'Bihar', wheat: 2.5, rice: 2.2, sugarcane: 45 }
  ];

  const weatherData = [
    { month: 'Jan', rainfall: 15, temp: 18 },
    { month: 'Feb', rainfall: 20, temp: 22 },
    { month: 'Mar', rainfall: 25, temp: 28 },
    { month: 'Apr', rainfall: 40, temp: 35 },
    { month: 'May', rainfall: 80, temp: 40 },
    { month: 'Jun', rainfall: 200, temp: 35 },
    { month: 'Jul', rainfall: 300, temp: 32 },
    { month: 'Aug', rainfall: 250, temp: 30 },
    { month: 'Sep', rainfall: 150, temp: 28 },
    { month: 'Oct', rainfall: 50, temp: 25 },
    { month: 'Nov', rainfall: 10, temp: 20 },
    { month: 'Dec', rainfall: 8, temp: 16 }
  ];

  const topPerformingStates = [
    { state: 'Punjab', crop: 'Wheat', yield: '4.2 T/ha', change: '+8%' },
    { state: 'Haryana', crop: 'Rice', yield: '3.8 T/ha', change: '+5%' },
    { state: 'Uttar Pradesh', crop: 'Sugarcane', yield: '75 T/ha', change: '+12%' },
    { state: 'Maharashtra', crop: 'Cotton', yield: '2.1 T/ha', change: '+3%' }
  ];

  const renderChart = () => {
    switch(activeTab) {
      case 'Crop Yield':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cropYieldData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="state" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="wheat" fill="#22c55e" name="Wheat (T/ha)" />
              <Bar dataKey="rice" fill="#3b82f6" name="Rice (T/ha)" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'Weather':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#3b82f6" name="Rainfall (mm)" />
              <Line yAxisId="right" type="monotone" dataKey="temp" stroke="#ef4444" name="Temperature (°C)" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'Soil Quality':
        return (
          <div className="space-y-4">
            {/* State Selector */}
            <div className="flex items-center gap-4">
              <label htmlFor="state-select" className="text-sm font-medium text-gray-700">
                Select State:
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Object.keys(stateWiseSoilData).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            
            {/* Chart */}
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={soilQualityData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ type, percent }) => `${type}: ${(percent * 100).toFixed(0)}%`}
                >
                  {soilQualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Area Coverage']} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Legend with farmer-friendly explanations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {soilQualityData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="font-medium">{item.type}</span>
                  <span className="text-gray-600">({item.value}%)</span>
                </div>
              ))}
            </div>
            
            {/* Farmer Tips */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-blue-800 mb-2">💡 Quick Tips for {selectedState}:</h4>
              <div className="text-xs text-blue-700">
                {selectedState === 'Punjab' && "Focus on organic matter addition. Reduce excessive urea use. Consider crop rotation."}
                {selectedState === 'Haryana' && "Add compost regularly. Manage salt-affected areas with gypsum. Improve drainage."}
                {selectedState === 'Uttar Pradesh' && "Use balanced NPK fertilizers. Manage waterlogged areas. Test soil pH regularly."}
                {selectedState === 'Maharashtra' && "Black soil holds water well. Add organic matter. Use drip irrigation in dry areas."}
                {selectedState === 'West Bengal' && "Good for rice cultivation. Manage water levels. Add lime if soil is too acidic."}
                {selectedState === 'Bihar' && "Rich alluvial soil. Manage flood water. Use organic fertilizers for better results."}
                {selectedState === 'Rajasthan' && "Sandy soil drains fast. Add organic matter. Choose drought-resistant crops."}
                {selectedState === 'Tamil Nadu' && "Good for rice in delta areas. Manage salinity in coastal regions."}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            India's Comprehensive Crop Yield Analytics
          </h1>
          <p className="text-lg text-gray-600">
            Real-time agricultural data, weather patterns, and soil analysis to help farmers make
            informed decisions across all Indian states and districts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Interactive Map/Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Agricultural Data</h3>
                <p className="text-sm text-gray-600 mb-4">Click on any view to see detailed information</p>
                
                {/* Tab Buttons */}
                <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                  {['Crop Yield', 'Weather', 'Soil Quality'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-gray-50 rounded-lg p-4">
                {renderChart()}
              </div>
            </div>
          </div>

          {/* Right Section - Stats and Performance */}
          <div className="space-y-6">
            {/* National Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">National Overview</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3.2T</div>
                  <div className="text-sm text-gray-600">Avg Wheat Yield</div>
                  <div className="text-xs text-gray-500">tons/hectare</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.8T</div>
                  <div className="text-sm text-gray-600">Avg Rice Yield</div>
                  <div className="text-xs text-gray-500">tons/hectare</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">1,200mm</div>
                  <div className="text-sm text-gray-600">Avg Rainfall</div>
                  <div className="text-xs text-gray-500">this season</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">28°C</div>
                  <div className="text-sm text-gray-600">Avg Temp</div>
                  <div className="text-xs text-gray-500">current</div>
                </div>
              </div>
            </div>

            {/* Top Performing States */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Performing States</h3>
              <p className="text-sm text-gray-600 mb-4">Highest crop yields this season</p>
              
              <div className="space-y-3">
                {topPerformingStates.map((state, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-800">{state.state}</div>
                      <div className="text-sm text-gray-600">{state.crop}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-800">{state.yield}</div>
                      <div className={`text-sm ${state.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {state.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Data updated: September 5, 2025</span>
            <span>Coverage: 28 States, 700+ Districts</span>
            <span>Sources: IMD, ISRO, State Agriculture Departments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropYieldAnalytics;