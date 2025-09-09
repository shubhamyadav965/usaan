import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PopularServices = () => {
  const popularServices = [
    {
      id: 1,
      name: "Aadhaar Services",
      description: "Update address, mobile number, or download Aadhaar card",
      icon: "CreditCard",
      completionTime: "Instant - 2 days",
      documentsRequired: ["Address Proof", "Mobile Number"],
      rating: 4.8,
      completedToday: 15420,
      difficulty: "Easy",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "PAN Card Application",
      description: "Apply for new PAN card or make corrections to existing one",
      icon: "FileText",
      completionTime: "7-10 days",
      documentsRequired: ["Identity Proof", "Address Proof", "Date of Birth Proof"],
      rating: 4.6,
      completedToday: 8930,
      difficulty: "Easy",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Passport Services",
      description: "New passport application, renewal, or address change",
      icon: "Plane",
      completionTime: "15-30 days",
      documentsRequired: ["Identity Proof", "Address Proof", "Birth Certificate"],
      rating: 4.7,
      completedToday: 5670,
      difficulty: "Medium",
      image: "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Driving License",
      description: "Apply for learner\'s license or permanent driving license",
      icon: "Car",
      completionTime: "30-45 days",
      documentsRequired: ["Age Proof", "Address Proof", "Medical Certificate"],
      rating: 4.5,
      completedToday: 3240,
      difficulty: "Medium",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 5,
      name: "GST Registration",
      description: "Register for Goods and Services Tax for your business",
      icon: "Building2",
      completionTime: "3-7 days",
      documentsRequired: ["PAN Card", "Aadhaar", "Business Proof", "Bank Statement"],
      rating: 4.4,
      completedToday: 1890,
      difficulty: "Hard",
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 6,
      name: "Income Tax Return",
      description: "File your annual income tax return online",
      icon: "Calculator",
      completionTime: "Instant",
      documentsRequired: ["Form 16", "Bank Statements", "Investment Proofs"],
      rating: 4.3,
      completedToday: 12450,
      difficulty: "Medium",
      image: "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Most Popular Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            These are the services most citizens use. Get started with clear requirements 
            and estimated completion times.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularServices?.map((service) => (
            <div
              key={service?.id}
              className="bg-white rounded-xl overflow-hidden gov-shadow-md hover:gov-shadow-lg smooth-transition group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service?.image}
                  alt={service?.name}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(service?.difficulty)}`}>
                    {service?.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Icon name={service?.icon} size={20} className="text-primary" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary smooth-transition">
                    {service?.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service?.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    <span className="font-medium text-text-primary">{service?.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-text-secondary">
                    <Icon name="Users" size={14} />
                    <span>{service?.completedToday?.toLocaleString()} today</span>
                  </div>
                </div>

                {/* Completion Time */}
                <div className="flex items-center space-x-2 mb-4 p-3 bg-blue-50 rounded-lg">
                  <Icon name="Clock" size={16} className="text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-blue-900">Completion Time</div>
                    <div className="text-sm text-blue-700">{service?.completionTime}</div>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="FileCheck" size={16} className="text-text-secondary" />
                    <span className="text-sm font-medium text-text-primary">Required Documents:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service?.documentsRequired?.map((doc, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-xs rounded-full text-text-secondary"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="flex-1"
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Info"
                    className="px-3"
                  >
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Grid3X3"
            iconPosition="left"
            className="px-8"
          >
            View All 200+ Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;