import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      service: "Passport Renewal",
      quote: "Got my passport renewed in just 7 days! The online process was so simple, and I could track everything in real-time.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      completionTime: "7 days"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      service: "Business Registration",
      quote: "Starting my business was hassle-free. All documents were processed online, and I received my certificate within 3 days.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      completionTime: "3 days"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad, Gujarat",
      service: "Aadhaar Update",
      quote: "Updated my address in Aadhaar from home. The mobile app made it incredibly convenient, and verification was instant.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      completionTime: "Instant"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const currentStory = testimonials?.[currentTestimonial];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Government Badge */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-border gov-shadow-sm">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium text-primary">Government of India</span>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Digital India
                <span className="block text-primary">Simplified</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
                Access all government services from one secure platform. Fast, transparent, and designed for every citizen.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={16} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-text-primary">24/7 Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-text-primary">Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={16} className="text-secondary" />
                </div>
                <span className="text-sm font-medium text-text-primary">Instant Updates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="text-lg px-8 py-4"
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50L+</div>
                <div className="text-sm text-text-secondary">Services Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.8★</div>
                <div className="text-sm text-text-secondary">Citizen Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-text-secondary">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 gov-shadow-lg border border-border">
              {/* Testimonial Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Image
                    src={currentStory?.avatar}
                    alt={currentStory?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary">{currentStory?.name}</h3>
                    <p className="text-sm text-text-secondary">{currentStory?.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(currentStory?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Service Badge */}
              <div className="inline-flex items-center space-x-2 bg-primary/5 px-3 py-1 rounded-full mb-4">
                <Icon name="CheckCircle" size={14} className="text-primary" />
                <span className="text-sm font-medium text-primary">{currentStory?.service}</span>
                <span className="text-xs text-text-secondary">• {currentStory?.completionTime}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-text-primary text-lg leading-relaxed mb-6">
                "{currentStory?.quote}"
              </blockquote>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary w-6' : 'bg-border'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center gov-shadow-md">
              <Icon name="Award" size={24} className="text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center gov-shadow-md">
              <Icon name="Heart" size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;