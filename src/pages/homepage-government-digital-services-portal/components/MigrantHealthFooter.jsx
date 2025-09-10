import React from 'react';
import Icon from '../../../components/AppIcon';

const MigrantHealthFooter = () => {
  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'Youtube', icon: 'Youtube', href: '#' }
  ];

  const quickLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Data Protection', href: '#' },
    { name: 'Accessibility', href: '#' }
  ];

  const helpLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'User Guide', href: '#' },
    { name: 'Technical Support', href: '#' },
    { name: 'Report Issue', href: '#' }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Project Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM21 10H3V12H5V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V12H21V10Z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">
                  Migrant Health Records Kerala
                </div>
                <div className="text-sm text-white/80">
                  Government of Kerala
                </div>
              </div>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Ensuring comprehensive healthcare for migrant workers through secure 
              digital health records and preventive care initiatives.
            </p>
            
            {/* Government Badges */}
            <div className="flex items-center space-x-4">
              <div className="text-xs text-white/60">
                Certified by:
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-accent" />
                <span className="text-xs text-white/80">Digital India</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <Icon name="Mail" size={20} className="text-secondary mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">Email</div>
                  <a 
                    href="mailto:healthdept@kerala.gov.in"
                    className="text-white/80 text-sm hover:text-white smooth-transition"
                  >
                    healthdept@kerala.gov.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Icon name="Phone" size={20} className="text-secondary mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">Phone</div>
                  <a 
                    href="tel:+914711234567"
                    className="text-white/80 text-sm hover:text-white smooth-transition"
                  >
                    +91-471-1234567
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} className="text-secondary mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">Address</div>
                  <p className="text-white/80 text-sm">
                    Department of Health & Family Welfare<br />
                    Government of Kerala<br />
                    Thiruvananthapuram - 695001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            
            <div className="space-y-3 mb-8">
              {quickLinks?.map((link) => (
                <a
                  key={link?.name}
                  href={link?.href}
                  className="block text-white/80 text-sm hover:text-white smooth-transition"
                >
                  {link?.name}
                </a>
              ))}
            </div>

            <h4 className="font-medium text-sm mb-4">Help & Support</h4>
            <div className="space-y-3">
              {helpLinks?.map((link) => (
                <a
                  key={link?.name}
                  href={link?.href}
                  className="block text-white/80 text-sm hover:text-white smooth-transition"
                >
                  {link?.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Copyright */}
            <div className="text-sm text-white/80">
              © 2025 Government of Kerala. All rights reserved. | DPDP 2023 Compliant
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white/60">Follow us:</span>
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 smooth-transition"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-center sm:text-left">
            <Icon name="AlertCircle" size={16} className="text-white" />
            <span className="text-white font-medium">Health Emergency:</span>
            <a 
              href="tel:108" 
              className="text-white font-bold hover:underline"
            >
              108
            </a>
            <span className="text-white/80">|</span>
            <span className="text-white font-medium">Migrant Helpline:</span>
            <a 
              href="tel:18004251515" 
              className="text-white font-bold hover:underline"
            >
              1800-425-1515
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MigrantHealthFooter;