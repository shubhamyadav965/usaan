import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Popular Services", href: "#" },
        { name: "All Services", href: "#" },
        { name: "Service Status", href: "#" },
        { name: "Application Tracking", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Live Chat", href: "#" },
        { name: "Service Feedback", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "DPDP 2023 Rights", href: "#" },
        { name: "Accessibility", href: "#" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "About GovTech India", href: "#" },
        { name: "Digital India Initiative", href: "#" },
        { name: "News & Updates", href: "#" },
        { name: "Careers", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" }
  ];

  const certifications = [
    { name: "ISO 27001", icon: "Award" },
    { name: "DPDP 2023", icon: "Shield" },
    { name: "Digital India", icon: "Globe" },
    { name: "SSL Secured", icon: "Lock" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-7 h-7 text-primary"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-gray-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="text-xl font-bold leading-tight">
                  GovTech India
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  Digital Services Portal
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering citizens through digital transformation. Access all government services 
              from one secure, user-friendly platform designed for modern India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-gray-400" />
                <span className="text-gray-300">1800-XXX-XXXX (Toll Free)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-gray-400" />
                <span className="text-gray-300">support@govtech.india.gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-gray-400" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center smooth-transition"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-gray-300 hover:text-white smooth-transition text-sm"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-gray-400 text-sm">Certified & Compliant:</span>
            {certifications?.map((cert) => (
              <div
                key={cert?.name}
                className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg"
              >
                <Icon name={cert?.icon} size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">{cert?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Government of India. All rights reserved. | 
              <span className="ml-1">Developed by GovTech India</span>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white smooth-transition">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white smooth-transition">
                Terms
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white smooth-transition">
                Accessibility
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white smooth-transition">
                Sitemap
              </Link>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={16} className="text-gray-400" />
              <select className="bg-gray-800 text-gray-300 text-sm border border-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">বাংলা</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Government Disclaimer */}
      <div className="bg-primary py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-white text-sm">
            <Icon name="Shield" size={16} />
            <span>
              This is an official website of the Government of India. 
              <span className="ml-1 font-medium">Secure • Authentic • Trusted</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;