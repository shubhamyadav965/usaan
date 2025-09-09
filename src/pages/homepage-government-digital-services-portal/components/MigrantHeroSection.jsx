import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const MigrantHeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background with Indian Flag Gradient - Smooth Top & Bottom Fade */}
        <div className="absolute inset-0">
  {/* Base subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />

  {/* Wavy tricolor overlay */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="absolute bottom-0 w-full h-64 opacity-30"
    preserveAspectRatio="none"
  >
    <path
      fill="#FF9933"
      d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,122.7C672,139,768,213,864,229.3C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L0,320Z"
    />
    <path
      fill="#ffffff"
      d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,186.7C672,192,768,256,864,256C960,256,1056,192,1152,186.7C1248,181,1344,235,1392,256L1440,277L1440,320L0,320Z"
    />
    <path
      fill="#138808"
      d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,240C672,267,768,309,864,298.7C960,288,1056,224,1152,197.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L0,320Z"
    />
  </svg>
</div>



      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Icon name="Shield" size={16} />
            <span>Government of Kerala | Health Department</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Digital Health Record System
            <span className="block text-text-primary mt-2">
              for Migrant Workers in Kerala
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Ensuring Health Equity, Disease Prevention & SDG Alignment through secure, 
            comprehensive digital health records for migrant workers across Kerala
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            
            <Button 
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats Row */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Registered Workers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Healthcare Centers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">14</div>
                <div className="text-sm text-muted-foreground">Districts Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Data Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrantHeroSection;
