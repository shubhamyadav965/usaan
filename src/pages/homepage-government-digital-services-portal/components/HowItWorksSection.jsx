import React from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Register Migrant Worker',
      description:
        'Create a Digital Health ID linked to Aadhaar with basic demographic and health information',
      icon: 'UserPlus',
      color: 'bg-[#003D82]', // theme blue
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Healthcare Provider Access',
      description:
        'Medical professionals securely update and access complete health records in real-time',
      icon: 'Stethoscope',
      color: 'bg-[#2563EB]', // light blue
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Data Analytics & Prevention',
      description:
        'Authorities analyze anonymized data for disease prevention, surveillance, and SDG tracking',
      icon: 'BarChart3',
      color: 'bg-[#34D399]', // light green
    },
    {
      id: 'step-4',
      number: '04',
      title: 'Emergency Support',
      description:
        'Quick access to migrant worker health history simply by scanning the health QR id',
      icon: 'AlertCircle',
      color: 'bg-[#F59E0B]', // light orange
    },
    {
      id: 'step-5',
      number: '05',
      title: 'Continuous Monitoring',
      description:
        'Enable periodic health check-ups and early detection of chronic illnesses with alerts',
      icon: 'Activity',
      color: 'bg-[#F97316]', // deeper orange
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#003D82]/10 text-[#003D82] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Workflow" size={16} />
            <span>How It Works</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#003D82] mb-4">
            Simple 5-Step Process
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined workflow ensures efficient health record management
            from registration to long-term monitoring
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#003D82] via-[#34D399] to-[#F97316]"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start space-x-8 group"
              >
                {/* Step Circle */}
                <div
                  className={`relative flex-shrink-0 w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                >
                  <span>{step.number}</span>

                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Icon name={step.icon} size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
