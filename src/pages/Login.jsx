import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get('role') || 'doctor';
  
  const [step, setStep] = useState(1); // 1: Input credentials, 2: OTP verification
  const [formData, setFormData] = useState({
    mobileNumber: '',
    id: '',
    otp: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Redirect to role selection if no role specified
  useEffect(() => {
    if (!searchParams.get('role')) {
      navigate('/role-selection');
    }
  }, [searchParams, navigate]);

  const getRoleInfo = () => {
    return role === 'health-officer' 
      ? {
          title: 'Health Officer',
          idLabel: 'Health Officer ID',
          idPlaceholder: 'Enter your Health Officer ID',
          icon: 'Shield',
          description: 'Access health management and coordination features'
        }
      : {
          title: 'Doctor',
          idLabel: 'Doctor ID / Registration Number',
          idPlaceholder: 'Enter your Doctor ID',
          icon: 'Stethoscope',
          description: 'Access patient records and medical features'
        };
  };

  const roleInfo = getRoleInfo();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBackToRoleSelection = () => {
    navigate('/role-selection');
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setOtpSent(true);
      setStep(2);
      setCountdown(60);
      setIsLoading(false);
      
      // Start countdown
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1500);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically redirect to dashboard
      alert('Login successful! Redirecting to dashboard...');
    }, 1500);
  };

  const handleResendOTP = () => {
    setCountdown(60);
    setFormData(prev => ({ ...prev, otp: '' }));
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent rounded-full"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-300">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM21 10H3V12H5V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V12H21V10Z"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                <Icon name="Heart" size={10} className="text-white fill-current" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary leading-tight">
                Migrant Health Records
              </div>
              <div className="text-sm text-primary/70 font-medium">
                Government of Kerala
              </div>
            </div>
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
            {step === 1 ? `Login as ${roleInfo.title}` : 'Verify OTP'}
          </h1>
          <p className="text-text-secondary">
            {step === 1 
              ? roleInfo.description
              : 'We\'ve sent a 6-digit code to your mobile number'
            }
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-border p-6 sm:p-8">
          {step === 1 ? (
            <form onSubmit={handleSendOTP} className="space-y-6">
              {/* Mobile Number Input */}
              <div className="space-y-2">
                <label htmlFor="mobileNumber" className="text-sm font-medium text-text-primary">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                    <Icon name="Phone" size={18} />
                  </div>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {/* ID Input */}
              <div className="space-y-2">
                <label htmlFor="id" className="text-sm font-medium text-text-primary">
                  {roleInfo.idLabel}
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                    <Icon name={roleInfo.icon} size={18} />
                  </div>
                  <Input
                    id="id"
                    name="id"
                    type="text"
                    value={formData.id}
                    onChange={handleInputChange}
                    placeholder={roleInfo.idPlaceholder}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {/* Send OTP Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full h-12 text-lg"
                disabled={isLoading || !formData.mobileNumber || !formData.id}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending OTP...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Icon name="Send" size={18} />
                    <span>Send OTP</span>
                  </div>
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              {/* OTP Input */}
              <div className="space-y-2">
                <label htmlFor="otp" className="text-sm font-medium text-text-primary">
                  Enter OTP
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                    <Icon name="Shield" size={18} />
                  </div>
                  <Input
                    id="otp"
                    name="otp"
                    type="text"
                    value={formData.otp}
                    onChange={handleInputChange}
                    placeholder="Enter 6-digit OTP"
                    className="pl-10 h-12 text-center text-lg tracking-widest"
                    maxLength="6"
                    required
                  />
                </div>
                <p className="text-xs text-text-secondary">
                  OTP sent to +91 {formData.mobileNumber.slice(0, 2)}****{formData.mobileNumber.slice(-2)}
                </p>
              </div>

              {/* Verify OTP Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full h-12 text-lg"
                disabled={isLoading || formData.otp.length !== 6}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={18} />
                    <span>Verify OTP</span>
                  </div>
                )}
              </Button>

              {/* Resend OTP */}
              <div className="text-center">
                {countdown > 0 ? (
                  <p className="text-sm text-text-secondary">
                    Resend OTP in {countdown}s
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Back to Step 1 */}
          {step === 2 && (
            <div className="mt-6 pt-6 border-t border-border">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center space-x-2 text-sm text-text-secondary hover:text-text-primary transition-colors mx-auto"
              >
                <Icon name="ArrowLeft" size={16} />
                <span>Change mobile number</span>
              </button>
            </div>
          )}

          {/* Back to Role Selection */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={handleBackToRoleSelection}
              className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-colors mx-auto"
            >
              <Icon name="ArrowLeft" size={16} />
              <span>Change role</span>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4">
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
            <p>By logging in, you agree to our Terms of Service and Privacy Policy</p>
            <p className="mt-1">© 2025 Government of Kerala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
