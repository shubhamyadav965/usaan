import React from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const features = [
    {
      id: 'digital-id',
      icon: 'CreditCard',
      title: 'Unique Digital Health ID',
      description: 'Secure Aadhaar/QR-linked profiles for every migrant worker with tamper-proof identification',
      bgColor: 'bg-primary/5',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      id: 'comprehensive-records',
      icon: 'FileText',
      title: 'Comprehensive Records',
      description: 'Complete vaccination history, chronic illness tracking, and detailed past medical history',
      bgColor: 'bg-accent/5',
      iconColor: 'text-accent',
      borderColor: 'border-accent/20'
    },
    {
      id: 'secure-access',
      icon: 'Lock',
      title: 'Secure Access',
      description: 'Privacy-first approach with DPDP 2023 compliance and end-to-end encryption',
      bgColor: 'bg-secondary/5',
      iconColor: 'text-secondary',
      borderColor: 'border-secondary/20'
    },
    {
      id: 'disease-prevention',
      icon: 'Activity',
      title: 'Disease Prevention',
      description: 'Early detection systems and public health surveillance for community wellness',
      bgColor: 'bg-success/5',
      iconColor: 'text-success',
      borderColor: 'border-success/20'
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Key Features</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform provides end-to-end digital health record management 
            designed specifically for migrant workers in Kerala
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features?.map((feature) => (
            <div
              key={feature?.id}
              className={`group p-6 lg:p-8 rounded-xl border ${feature?.borderColor} ${feature?.bgColor} hover:shadow-lg smooth-transition hover:scale-105`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature?.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                <Icon 
                  name={feature?.icon} 
                  size={32} 
                  className={feature?.iconColor}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {feature?.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature?.description}
              </p>

              {/* Learn More Link */}
              <button className={`flex items-center space-x-2 ${feature?.iconColor} font-medium text-sm hover:underline smooth-transition`}>
                <span>Learn more</span>
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary">Multi-language Support</h4>
              <p className="text-sm text-muted-foreground">Available in English, Hindi, and Malayalam</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary">Mobile First</h4>
              <p className="text-sm text-muted-foreground">Optimized for mobile devices and offline access</p>
            </div>
            
            <div className="space-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-text-primary">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Round-the-clock assistance and helpdesk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;