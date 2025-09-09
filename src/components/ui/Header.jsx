import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Home',
      path: '/homepage-government-digital-services-portal',
      icon: 'Home'
    },
    {
      label: 'How It Works',
      path: '/how-it-works-guide-interactive-process-tutorials',
      icon: 'HelpCircle'
    },
    {
      label: 'Services',
      path: '/services',
      icon: 'Grid3X3'
    },
    {
      label: 'Support',
      path: '/support',
      icon: 'Phone'
    }
  ];

  const moreMenuItems = [
    { label: 'About Us', path: '/about', icon: 'Info' },
    { label: 'Contact', path: '/contact', icon: 'Mail' },
    { label: 'Privacy Policy', path: '/privacy', icon: 'Shield' },
    { label: 'Terms of Service', path: '/terms', icon: 'FileText' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border gov-shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/homepage-government-digital-services-portal" 
              className="flex items-center space-x-3 smooth-transition hover:opacity-80"
            >
              {/* Government Emblem */}
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
              </div>
              
              {/* Brand Text */}
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-primary leading-tight">
                  GovTech India
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Digital Services Portal
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium smooth-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-white' :'text-text-primary hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.label}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-muted hover:text-primary smooth-transition">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon name="ChevronDown" size={14} />
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg border border-border gov-shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-text-primary hover:bg-muted hover:text-primary smooth-transition"
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Search Button - Desktop */}
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-muted rounded-lg text-sm text-muted-foreground hover:bg-border hover:text-text-primary smooth-transition">
              <Icon name="Search" size={16} />
              <span>Search services...</span>
              <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-xs font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            {/* Login Button */}
            <Button 
              variant="outline" 
              size="sm"
              iconName="User"
              iconPosition="left"
              className="hidden sm:flex"
            >
              Login
            </Button>

            {/* Get Started Button */}
            <Button 
              variant="default" 
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="hidden sm:flex"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-muted smooth-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-2">
              {/* Search Bar - Mobile */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 px-4 py-3 bg-muted rounded-lg">
                  <Icon name="Search" size={16} className="text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              </div>

              {/* Navigation Items */}
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium smooth-transition ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-white' :'text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}

              {/* More Items */}
              <div className="pt-2 border-t border-border">
                {moreMenuItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-text-primary hover:bg-muted smooth-transition"
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.label}</span>
                  </Link>
                ))}
              </div>

              {/* Action Buttons - Mobile */}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="User"
                  iconPosition="left"
                >
                  Login
                </Button>
                <Button 
                  variant="default" 
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;