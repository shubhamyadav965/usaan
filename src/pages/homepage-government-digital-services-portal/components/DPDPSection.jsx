import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DPDPSection = () => {
  const [activeTab, setActiveTab] = useState('rights');

  const citizenRights = [
    {
      id: 1,
      title: "Right to Information",
      description: "Know what personal data is being collected and how it\'s used",
      icon: "Info",
      details: "You have the right to know what personal data government agencies collect about you, why they collect it, and how they use it."
    },
    {
      id: 2,
      title: "Right to Correction",
      description: "Update or correct your personal information when it\'s inaccurate",
      icon: "Edit",
      details: "If your personal data is incomplete or inaccurate, you can request corrections to ensure your records are up to date."
    },
    {
      id: 3,
      title: "Right to Erasure",
      description: "Request deletion of your data when it\'s no longer needed",
      icon: "Trash2",
      details: "You can request deletion of your personal data when it\'s no longer necessary for the purpose it was collected."
    },
    {
      id: 4,
      title: "Right to Data Portability",
      description: "Transfer your data from one service to another in a usable format",
      icon: "Download",
      details: "You can request your personal data in a structured, commonly used format to transfer it to another service."
    }
  ];

  const protectionMeasures = [
    {
      id: 1,
      title: "Data Encryption",
      description: "All your data is encrypted using advanced security protocols",
      icon: "Lock",
      status: "Active"
    },
    {
      id: 2,
      title: "Access Controls",
      description: "Strict controls on who can access your personal information",
      icon: "Shield",
      status: "Active"
    },
    {
      id: 3,
      title: "Audit Trails",
      description: "Complete logs of all data access and modifications",
      icon: "FileText",
      status: "Active"
    },
    {
      id: 4,
      title: "Data Minimization",
      description: "We only collect data that\'s necessary for the service",
      icon: "Minimize",
      status: "Active"
    }
  ];

  const interactiveTools = [
    {
      id: 1,
      title: "Privacy Dashboard",
      description: "View and manage all your data privacy settings in one place",
      icon: "Settings",
      action: "Open Dashboard"
    },
    {
      id: 2,
      title: "Data Request Portal",
      description: "Submit requests for data access, correction, or deletion",
      icon: "FileSearch",
      action: "Make Request"
    },
    {
      id: 3,
      title: "Consent Manager",
      description: "Control what data you share and with which services",
      icon: "CheckSquare",
      action: "Manage Consent"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Your Data Rights Under DPDP 2023
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            The Digital Personal Data Protection Act 2023 gives you powerful rights over your personal data. 
            Learn how we protect your privacy and how you can exercise your rights.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl border border-border gov-shadow-sm">
            <button
              onClick={() => setActiveTab('rights')}
              className={`px-6 py-3 rounded-lg text-sm font-medium smooth-transition ${
                activeTab === 'rights' ?'bg-primary text-white gov-shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Scale" size={16} className="inline mr-2" />
              Your Rights
            </button>
            <button
              onClick={() => setActiveTab('protection')}
              className={`px-6 py-3 rounded-lg text-sm font-medium smooth-transition ${
                activeTab === 'protection' ?'bg-primary text-white gov-shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Shield" size={16} className="inline mr-2" />
              How We Protect You
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-lg text-sm font-medium smooth-transition ${
                activeTab === 'tools' ?'bg-primary text-white gov-shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Tool" size={16} className="inline mr-2" />
              Interactive Tools
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'rights' && (
          <div className="grid md:grid-cols-2 gap-8">
            {citizenRights?.map((right) => (
              <div
                key={right?.id}
                className="bg-white rounded-xl p-6 border border-border gov-shadow-sm hover:gov-shadow-md smooth-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={right?.icon} size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {right?.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {right?.description}
                    </p>
                    <details className="group">
                      <summary className="cursor-pointer text-primary text-sm font-medium hover:text-primary/80 smooth-transition">
                        Learn more about this right
                        <Icon name="ChevronDown" size={16} className="inline ml-1 group-open:rotate-180 smooth-transition" />
                      </summary>
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                        {right?.details}
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'protection' && (
          <div className="grid md:grid-cols-2 gap-8">
            {protectionMeasures?.map((measure) => (
              <div
                key={measure?.id}
                className="bg-white rounded-xl p-6 border border-border gov-shadow-sm hover:gov-shadow-md smooth-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={measure?.icon} size={24} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {measure?.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {measure?.status}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {measure?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="grid md:grid-cols-3 gap-8">
            {interactiveTools?.map((tool) => (
              <div
                key={tool?.id}
                className="bg-white rounded-xl p-6 border border-border gov-shadow-sm hover:gov-shadow-md smooth-transition text-center"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={tool?.icon} size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {tool?.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {tool?.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full"
                >
                  {tool?.action}
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-border gov-shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Need Help with Your Data Rights?
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our support team is here to help you understand and exercise your rights under DPDP 2023.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="default"
              iconName="MessageCircle"
              iconPosition="left"
              className="w-full"
            >
              Live Chat
            </Button>
            <Button
              variant="outline"
              iconName="Phone"
              iconPosition="left"
              className="w-full"
            >
              Call Support
            </Button>
            <Button
              variant="outline"
              iconName="Mail"
              iconPosition="left"
              className="w-full"
            >
              Email Us
            </Button>
            <Button
              variant="outline"
              iconName="FileText"
              iconPosition="left"
              className="w-full"
            >
              View Guide
            </Button>
          </div>
        </div>

        {/* Compliance Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full border border-border gov-shadow-sm">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">
              DPDP 2023 Compliant Platform
            </span>
            <Icon name="CheckCircle" size={16} className="text-green-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPDPSection;