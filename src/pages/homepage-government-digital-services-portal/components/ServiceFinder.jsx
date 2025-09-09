import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ServiceFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('life-events');

  const lifeEvents = [
    {
      id: 1,
      title: "Starting a Business",
      description: "Register your company, get licenses, and comply with regulations",
      icon: "Building2",
      services: 12,
      avgTime: "5-7 days",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      title: "Getting Married",
      description: "Marriage registration, certificate, and related documentation",
      icon: "Heart",
      services: 8,
      avgTime: "2-3 days",
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: 3,
      title: "Buying Property",
      description: "Property registration, stamp duty, and ownership transfer",
      icon: "Home",
      services: 15,
      avgTime: "10-15 days",
      color: "bg-green-50 text-green-600"
    },
    {
      id: 4,
      title: "Having a Child",
      description: "Birth certificate, Aadhaar enrollment, and child benefits",
      icon: "Baby",
      services: 10,
      avgTime: "1-2 days",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 5,
      title: "Moving Cities",
      description: "Address change, voter ID update, and local registrations",
      icon: "MapPin",
      services: 18,
      avgTime: "3-5 days",
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 6,
      title: "Retirement Planning",
      description: "Pension setup, PF withdrawal, and senior citizen benefits",
      icon: "Users",
      services: 14,
      avgTime: "7-10 days",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const ministries = [
    {
      id: 1,
      name: "Ministry of Home Affairs",
      shortName: "MHA",
      services: 45,
      icon: "Shield",
      color: "bg-red-50 text-red-600"
    },
    {
      id: 2,
      name: "Ministry of Finance",
      shortName: "MOF",
      services: 38,
      icon: "Banknote",
      color: "bg-green-50 text-green-600"
    },
    {
      id: 3,
      name: "Ministry of External Affairs",
      shortName: "MEA",
      services: 22,
      icon: "Globe",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 4,
      name: "Ministry of Road Transport",
      shortName: "MORT",
      services: 28,
      icon: "Car",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 5,
      name: "Ministry of Education",
      shortName: "MOE",
      services: 31,
      icon: "GraduationCap",
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 6,
      name: "Ministry of Health",
      shortName: "MOH",
      services: 26,
      icon: "Heart",
      color: "bg-pink-50 text-pink-600"
    }
  ];

  const handleSearch = (e) => {
    e?.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Find Your Service
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Search by what you need to do in life, or browse by government department. 
            We'll guide you through every step.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Icon 
                name="Search" 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                placeholder="Search for services like 'passport', 'driving license', 'business registration'..."
                className="w-full pl-12 pr-32 py-4 text-lg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-white"
              />
              <Button
                type="submit"
                variant="default"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Quick Suggestions */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <span className="text-sm text-text-secondary">Popular:</span>
            {['Passport', 'PAN Card', 'Aadhaar', 'Driving License', 'GST Registration']?.map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 text-sm bg-muted hover:bg-border rounded-full text-text-primary smooth-transition"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('life-events')}
              className={`px-6 py-3 rounded-md text-sm font-medium smooth-transition ${
                activeTab === 'life-events'
                  ? 'bg-white text-primary gov-shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Calendar" size={16} className="inline mr-2" />
              Life Events
            </button>
            <button
              onClick={() => setActiveTab('ministries')}
              className={`px-6 py-3 rounded-md text-sm font-medium smooth-transition ${
                activeTab === 'ministries' ?'bg-white text-primary gov-shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Building" size={16} className="inline mr-2" />
              By Ministry
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'life-events' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeEvents?.map((event) => (
              <div
                key={event?.id}
                className="bg-white border border-border rounded-xl p-6 hover:gov-shadow-md smooth-transition cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${event?.color} flex items-center justify-center group-hover:scale-110 smooth-transition`}>
                    <Icon name={event?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-2 group-hover:text-primary smooth-transition">
                      {event?.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                      {event?.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="FileText" size={12} />
                        <span>{event?.services} services</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{event?.avgTime}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries?.map((ministry) => (
              <div
                key={ministry?.id}
                className="bg-white border border-border rounded-xl p-6 hover:gov-shadow-md smooth-transition cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${ministry?.color} flex items-center justify-center group-hover:scale-110 smooth-transition`}>
                    <Icon name={ministry?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-text-primary group-hover:text-primary smooth-transition">
                        {ministry?.shortName}
                      </h3>
                      <span className="px-2 py-1 bg-muted text-xs rounded-full text-text-secondary">
                        {ministry?.services} services
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {ministry?.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Grid3X3"
            iconPosition="left"
            className="px-8"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceFinder;