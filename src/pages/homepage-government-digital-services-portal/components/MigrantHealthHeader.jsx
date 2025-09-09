import React, { useState } from 'react';
import { User, UserPlus, Menu, X, ChevronDown, Check, Heart, HelpCircle, Grid3X3, ChevronRight } from 'lucide-react';

const MigrantHealthHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-18 px-6 lg:px-8">
          {/* Logo Section */}
          <a 
            href="/" 
            className="flex items-center space-x-4 group transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Modern Kerala Emblem */}
            <div className="relative">
              <div className="w-12 h-12 bg-[#003D82] rounded-2xl flex items-center justify-center shadow-lg shadow-[#003D82]/20 group-hover:shadow-[#003D82]/30 transition-all duration-300">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM21 10H3V12H5V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V12H21V10Z"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                <Heart size={10} className="text-white fill-current" />
              </div>
            </div>
            
            {/* Brand Text */}
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900 leading-tight">
                Migrant Health Records
              </div>
              <div className="text-sm text-[#003D82] font-medium">
                Government of Kerala
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-[#003D82] hover:bg-[#003D82]/10 transition-all duration-200"
            >
              <HelpCircle size={16} />
              <span>How It Works</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('features')}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-[#003D82] hover:bg-[#003D82]/10 transition-all duration-200"
            >
              <Grid3X3 size={16} />
              <span>Features</span>
            </button>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-[#003D82] hover:bg-[#003D82]/10 transition-all duration-200">
                <span className="text-lg">{languages?.find(lang => lang?.code === selectedLanguage)?.flag}</span>
                <span>{languages?.find(lang => lang?.code === selectedLanguage)?.name}</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-3">
                  {languages?.map((lang) => (
                    <button
                      key={lang?.code}
                      onClick={() => setSelectedLanguage(lang?.code)}
                      className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-[#003D82]/10 hover:text-[#003D82] transition-all duration-200"
                    >
                      <span className="text-lg">{lang?.flag}</span>
                      <span>{lang?.name}</span>
                      {selectedLanguage === lang?.code && (
                        <Check size={14} className="ml-auto text-[#003D82]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Login Button */}
            <button className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:border-[#003D82] hover:text-[#003D82] hover:bg-[#003D82]/10 transition-all duration-200">
              <User size={16} />
              <span>Login</span>
            </button>

            {/* Signup Button */}
            <button className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-[#003D82] hover:bg-[#002a5c] shadow-lg shadow-[#003D82]/20 hover:scale-[1.02] transition-all duration-200">
              <UserPlus size={16} />
              <span>Sign Up</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-6 space-y-6">
              {/* Navigation Items */}
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="flex items-center justify-between w-full px-5 py-4 rounded-2xl text-sm font-medium text-gray-700 hover:text-[#003D82] hover:bg-[#003D82]/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#003D82]/10 rounded-xl flex items-center justify-center group-hover:bg-[#003D82]/20 transition-colors duration-200">
                      <HelpCircle size={20} className="text-[#003D82]" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">How It Works</div>
                      <div className="text-xs text-gray-500">Learn our simple process</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 group-hover:text-[#003D82] group-hover:translate-x-1 transition-all duration-200" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('features')}
                  className="flex items-center justify-between w-full px-5 py-4 rounded-2xl text-sm font-medium text-gray-700 hover:text-[#003D82] hover:bg-[#003D82]/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#003D82]/10 rounded-xl flex items-center justify-center group-hover:bg-[#003D82]/20 transition-colors duration-200">
                      <Grid3X3 size={20} className="text-[#003D82]" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Features</div>
                      <div className="text-xs text-gray-500">Platform capabilities</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 group-hover:text-[#003D82] group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </div>

              {/* Language Selector Mobile */}
              <div className="border-t border-gray-100 pt-6">
                <div className="text-sm font-semibold text-gray-800 mb-4">Select Language</div>
                <div className="space-y-2">
                  {languages?.map((lang) => (
                    <button
                      key={lang?.code}
                      onClick={() => setSelectedLanguage(lang?.code)}
                      className={`flex items-center justify-between w-full px-5 py-3 rounded-xl text-sm transition-all duration-200 ${
                        selectedLanguage === lang?.code 
                          ? 'bg-[#003D82]/10 text-[#003D82] border border-[#003D82]/30' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{lang?.flag}</span>
                        <span className="font-medium">{lang?.name}</span>
                      </div>
                      {selectedLanguage === lang?.code && (
                        <Check size={16} className="text-[#003D82]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons Mobile */}
              <div className="border-t border-gray-100 pt-6 space-y-3">
                <button className="flex items-center justify-center space-x-2 w-full px-6 py-4 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:border-[#003D82] hover:text-[#003D82] hover:bg-[#003D82]/10 transition-all duration-200">
                  <User size={18} />
                  <span>Login to Portal</span>
                </button>
                <button className="flex items-center justify-center space-x-2 w-full px-6 py-4 rounded-xl text-sm font-medium text-white bg-[#003D82] hover:bg-[#002a5c] shadow-lg shadow-[#003D82]/20 transition-all duration-200">
                  <UserPlus size={18} />
                  <span>Create New Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MigrantHealthHeader;
