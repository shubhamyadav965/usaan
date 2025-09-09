import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveStats = () => {
  const [stats, setStats] = useState({
    servicesCompleted: 47832,
    applicationsProcessed: 12456,
    averageRating: 4.7,
    activeUsers: 8934
  });

  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setStats(prev => ({
        servicesCompleted: prev?.servicesCompleted + Math.floor(Math.random() * 5) + 1,
        applicationsProcessed: prev?.applicationsProcessed + Math.floor(Math.random() * 3) + 1,
        averageRating: Math.min(5.0, prev?.averageRating + (Math.random() - 0.5) * 0.01),
        activeUsers: prev?.activeUsers + Math.floor(Math.random() * 10) - 5
      }));
      
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      id: 1,
      label: "Services Completed Today",
      value: stats?.servicesCompleted?.toLocaleString(),
      icon: "CheckCircle",
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: "+12%",
      trendColor: "text-green-600"
    },
    {
      id: 2,
      label: "Applications Processed",
      value: stats?.applicationsProcessed?.toLocaleString(),
      icon: "FileText",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "+8%",
      trendColor: "text-blue-600"
    },
    {
      id: 3,
      label: "Average Satisfaction",
      value: `${stats?.averageRating?.toFixed(1)}★`,
      icon: "Star",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      trend: "+0.2",
      trendColor: "text-yellow-600"
    },
    {
      id: 4,
      label: "Citizens Online Now",
      value: stats?.activeUsers?.toLocaleString(),
      icon: "Users",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "+5%",
      trendColor: "text-purple-600"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: "Amit K.",
      action: "completed Passport renewal",
      time: "2 minutes ago",
      location: "Mumbai"
    },
    {
      id: 2,
      user: "Priya S.",
      action: "submitted PAN application",
      time: "5 minutes ago",
      location: "Delhi"
    },
    {
      id: 3,
      user: "Rajesh M.",
      action: "updated Aadhaar address",
      time: "8 minutes ago",
      location: "Bangalore"
    },
    {
      id: 4,
      user: "Sneha P.",
      action: "filed Income Tax Return",
      time: "12 minutes ago",
      location: "Pune"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Live Platform Activity
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real-time updates showing how citizens across India are using our digital services right now.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statItems?.map((stat) => (
            <div
              key={stat?.id}
              className={`bg-white border border-border rounded-xl p-6 gov-shadow-sm hover:gov-shadow-md smooth-transition ${
                isAnimating ? 'scale-105' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon name={stat?.icon} size={24} className={stat?.color} />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${stat?.trendColor}`}>
                  <Icon name="TrendingUp" size={14} />
                  <span>{stat?.trend}</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className={`text-2xl font-bold text-text-primary ${isAnimating ? 'animate-pulse' : ''}`}>
                  {stat?.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat?.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Activity" size={16} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">Recent Activity</h3>
            <div className="flex items-center space-x-1 text-sm text-text-secondary">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live updates</span>
            </div>
          </div>

          <div className="space-y-4">
            {recentActivities?.map((activity) => (
              <div
                key={activity?.id}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-border hover:gov-shadow-sm smooth-transition"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-text-primary">
                    <span className="font-medium">{activity?.user}</span>
                    <span className="text-text-secondary"> {activity?.action}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-text-secondary mt-1">
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{activity?.time}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPin" size={12} />
                      <span>{activity?.location}</span>
                    </span>
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-6">
            <button className="text-primary hover:text-primary/80 text-sm font-medium smooth-transition">
              View all activity →
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-green-600" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">99.9% Uptime</h4>
            <p className="text-sm text-text-secondary">Reliable service availability 24/7</p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Lock" size={24} className="text-blue-600" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Bank-Grade Security</h4>
            <p className="text-sm text-text-secondary">Your data is protected with highest encryption</p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-orange-600" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">ISO Certified</h4>
            <p className="text-sm text-text-secondary">Internationally recognized quality standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;