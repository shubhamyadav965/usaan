import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/AppIcon';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/login?role=${role}`);
  };

  const roles = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Access patient records, update health information, and manage medical data',
      icon: 'Stethoscope',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      iconBg: 'bg-blue-100',
      features: [
        'View patient health records',
        'Update medical information',
        'Access diagnostic tools',
        'Manage treatment plans'
      ]
    },
    {
      id: 'health-officer',
      title: 'Health Officer',
      description: 'Oversee public health programs, manage health data, and coordinate health services',
      icon: 'Shield',
      color: 'bg-green-50 text-green-600 border-green-200',
      iconBg: 'bg-green-100',
      features: [
        'Monitor public health trends',
        'Manage health programs',
        'Coordinate health services',
        'Generate health reports'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent rounded-full"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center space-x-3 mb-8 group">
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-300">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM21 10H3V12H5V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V12H21V10Z"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                <Icon name="Heart" size={12} className="text-white fill-current" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary leading-tight">
                Migrant Health Records
              </div>
              <div className="text-sm text-primary/70 font-medium">
                Government of Kerala
              </div>
            </div>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Choose Your Role
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Select your role to access the appropriate login portal and features
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className={`group cursor-pointer bg-white rounded-2xl p-8 border-2 ${role.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${role.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={role.icon} size={32} className={role.color.split(' ')[1]} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                {role.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {role.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {role.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                  Continue as {role.title}
                </span>
                <Icon name="ArrowRight" size={20} className="text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <Link to="/" className="text-text-secondary hover:text-primary transition-colors">
              Back to Home
            </Link>
            <span className="text-border">|</span>
            <Link to="/help" className="text-text-secondary hover:text-primary transition-colors">
              Need Help?
            </Link>
          </div>
          
          <div className="text-xs text-text-secondary">
            <p>© 2025 Government of Kerala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
