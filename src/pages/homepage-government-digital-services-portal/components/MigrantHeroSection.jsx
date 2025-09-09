import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const MigrantHeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background with Indian Flag Gradient - Smooth Top & Bottom Fade */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              {/* Tricolor vertical gradient */}
              <linearGradient id="flag-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9933" stopOpacity="0" /> 
                <stop offset="8%" stopColor="#FF9933" stopOpacity="0.3" />
                <stop offset="15%" stopColor="#FF9933" stopOpacity="1" />
                <stop offset="35%" stopColor="#FF9933" stopOpacity="1" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="65%" stopColor="#138808" stopOpacity="1" />
                <stop offset="85%" stopColor="#138808" stopOpacity="1" />
                <stop offset="92%" stopColor="#138808" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#138808" stopOpacity="0" /> 
              </linearGradient>

              {/* Vertical fade mask (only top + bottom) */}
              <linearGradient id="vertical-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="10%" stopColor="white" stopOpacity="1" />
                <stop offset="90%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <mask id="blend-mask">
                <rect width="1600" height="900" fill="url(#vertical-fade)" />
              </mask>
            </defs>

            {/* Apply gradient with vertical fade mask */}
            <rect width="1600" height="900" fill="url(#flag-gradient)" mask="url(#blend-mask)" />
          </svg>
        </div>
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
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
            
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
