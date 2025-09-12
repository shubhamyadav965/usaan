"use client";

import { dispatch } from "d3";
import React, { useState, createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "services/operations/authAPI";

// --- SVG Icons ---
const Stethoscope = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M8 12v-4a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4" />
    <path d="M12 12v10" />
    <path d="M10 22h4" />
  </svg>
);
const Users = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const FileText = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);
const Pill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m8.5 8.5 7 7" />
    <path d="m7.17 14.17 5.66-5.66" />
    <path d="m11.31 11.31 2.83-2.83" />
    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
  </svg>
);
const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const Menu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const Heart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const Search = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const Phone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const QrCode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="5" height="5" x="3" y="3" rx="1" />
    <rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <path d="M21 21v.01" />
    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <path d="M3 12h.01" />
    <path d="M12 3h.01" />
    <path d="M12 16v.01" />
    <path d="M16 12h.01" />
    <path d="M21 12h.01" />
    <path d="M12 21h.01" />
  </svg>
);
const User = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const Clock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const MessageSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// --- Mock UI Components (based on shadcn/ui) ---
const Button = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white dark:ring-offset-gray-950";
  const variantClasses = {
    default:
      "bg-[#F97316] text-white hover:bg-[#EA580C] dark:bg-[#F97316] dark:hover:bg-[#EA580C]",
    destructive:
      "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
    ghost:
      "hover:bg-[#F97316]/10 hover:text-[#F97316] dark:hover:bg-gray-800 dark:hover:text-gray-50",
    outline:
      "border border-[#F97316] text-[#F97316] bg-transparent hover:bg-[#F97316]/10 dark:border-[#F97316] dark:text-[#F97316] dark:hover:bg-[#F97316]/20",
  };
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    icon: "h-10 w-10",
  };
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ className, children }) => (
  <div
    className={`border rounded-lg shadow-sm bg-white dark:bg-gray-900 dark:border-gray-800 ${className}`}
  >
    {children}
  </div>
);
const CardHeader = ({ className, children }) => (
  <div className={`p-6 pb-4 ${className}`}>{children}</div>
);
const CardTitle = ({ className, children }) => (
  <h3
    className={`font-semibold tracking-tight text-gray-900 dark:text-gray-50 ${className}`}
  >
    {children}
  </h3>
);
const CardDescription = ({ className, children }) => (
  <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
    {children}
  </p>
);
const CardContent = ({ className, children }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);
const CardFooter = ({ className, children }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const Input = (props) => (
  <input
    {...props}
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus-ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-[#F97316] ${props.className}`}
  />
);

const Badge = ({ variant = "default", className, children }) => {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2";
  const variantClasses = {
    default:
      "border-transparent bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900",
    secondary:
      "border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50",
    destructive: "border-transparent bg-red-500 text-white dark:bg-red-700",
    outline: "text-gray-900 dark:text-gray-50",
  };
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Dialog = ({ children, open }) => (open ? <div>{children}</div> : null);
const DialogContent = ({ className, children, onClose }) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60`}
    onClick={onClose}
  >
    <div
      className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-xl p-0 w-full ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
      >
        <span className="text-xl">&times;</span>
      </button>
      {children}
    </div>
  </div>
);
const DialogHeader = ({ children }) => (
  <div className="p-6 border-b dark:border-gray-800">{children}</div>
);
const DialogTitle = ({ className, children }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);
const DialogDescription = ({ children }) => (
  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{children}</p>
);

// --- Mocking Framework Hooks ---
const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);
const useRouter = () => ({
  push: (path) => console.log(`Navigating to ${path}`),
});

// --- Mocking Auth Context ---
const mockUser = {
  profile: {
    first_name: "Dr. Emily",
    last_name: "Carter",
    specialization: "Cardiologist",
  },
};
const AuthContext = createContext({
  user: mockUser,
  logout: () => console.log("Logged out"),
});
const useAuth = () => useContext(AuthContext);

// --- Main Application Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout(navigate));
    router.push("/");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Stethoscope },
    { id: "patients", label: "Patient Search", icon: Users },
    { id: "consultations", label: "Consultations", icon: FileText },
    { id: "prescriptions", label: "Prescriptions", icon: Pill },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <Link href="#" className="flex items-center gap-2 text-[#F97316]">
          <Heart className="h-6 w-6" />
          <span className="font-bold text-lg">Kerala eHealth</span>
        </Link>
        <div className="mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Doctor Portal
          </p>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            {user?.profile?.first_name} {user?.profile?.last_name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user?.profile?.specialization}
          </p>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <Button variant="outline" className="w-full" onClick={handleLogout}>
          Sign Out
        </Button>
      </div>
    </div>
  );

  const Dashboard = () => {
    const { user } = useAuth();
    const appointmentsToday = [
      { time: "10:00 AM", patient: "Rahim Ahmed", reason: "Follow-up" },
      {
        time: "11:30 AM",
        patient: "Raj Kumar",
        reason: "New patient consultation",
      },
      { time: "02:00 PM", patient: "Suresh Kumar", reason: "Routine Check-up" },
    ];

    const formattedDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome back, {user?.profile?.first_name}. Today is {formattedDate}.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar className="h-5 w-5" />
                Today's Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                3 upcoming
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Pill className="h-5 w-5" />
                Pending Prescriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">4</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 are high priority
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <MessageSquare className="h-5 w-5" />
                New Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                5 unread
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>
              Your next 3 scheduled appointments for today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointmentsToday.map((appt, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                      <Clock className="h-4 w-4" />
                      <span>{appt.time}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{appt.patient}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {appt.reason}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              View All Appointments
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };

  const Consultations = () => {
    const consultationsData = [
      {
        id: 1,
        patient: "Rahim Ahmed",
        date: "2025-09-08",
        reason: "Follow-up for Hypertension",
        diagnosis: "Controlled hypertension",
      },
      {
        id: 2,
        patient: "Raj Kumar",
        date: "2025-09-05",
        reason: "Fever and cough",
        diagnosis: "Viral Infection",
      },
      {
        id: 3,
        patient: "Suresh Kumar",
        date: "2025-09-02",
        reason: "Diabetes check-up",
        diagnosis: "Type 2 Diabetes, stable",
      },
    ];

    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Consultations</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Review past patient consultation records.
          </p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center gap-0">
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by patient name or diagnosis..."
                  className="pl-12 text-base h-12 border-0 rounded-none focus:ring-0"
                />
              </div>
              <Button className="rounded-none h-12 px-6">
                <Search className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {consultationsData.map((c) => (
            <Card key={c.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{c.patient}</CardTitle>
                    <CardDescription>Consultation on {c.date}</CardDescription>
                  </div>
                  <Badge variant="secondary">{c.diagnosis}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sm">Reason for visit:</p>
                <p className="text-gray-600 dark:text-gray-300">{c.reason}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Full Record</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const Prescriptions = () => {
    const prescriptionsData = [
      {
        id: 1,
        patient: "Suresh Kumar",
        date: "2025-09-02",
        med: "Metformin 500mg",
        status: "Filled",
      },
      {
        id: 2,
        patient: "Rahim Ahmed",
        date: "2025-09-08",
        med: "Amlodipine 5mg",
        status: "Pending",
      },
      {
        id: 3,
        patient: "Raj Kumar",
        date: "2025-09-05",
        med: "Paracetamol 650mg",
        status: "Filled",
      },
    ];
    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Prescriptions</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage and review patient prescriptions.
          </p>
        </div>
        <div className="space-y-4">
          {prescriptionsData.map((p) => (
            <Card key={p.id}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold">{p.patient}</p>
                  <p className="text-sm">{p.med}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Prescribed on {p.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={p.status === "Filled" ? "default" : "destructive"}
                  >
                    {p.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const PatientSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPatient, setSelectedPatient] = useState(null);

    const patients = [
      {
        id: "1",
        healthId: "KL-MIG-001-2024",
        firstName: "Rahim",
        lastName: "Ahmed",
        phone: "+91-9876543210",
        age: 39,
        gender: "male",
        bloodGroup: "B+",
        address: "Migrant Worker Colony, Kochi",
        district: "Ernakulam",
        language: "bengali",
        lastVisit: "2024-01-15",
        totalVisits: 5,
        chronicConditions: ["Hypertension"],
        allergies: ["Penicillin"],
      },
      {
        id: "2",
        healthId: "KL-MIG-002-2024",
        firstName: "Raj",
        lastName: "Kumar",
        phone: "+91-9876543212",
        age: 34,
        gender: "male",
        bloodGroup: "O+",
        address: "Construction Site, Thiruvananthapuram",
        district: "Thiruvananthapuram",
        language: "hindi",
        lastVisit: "2024-01-10",
        totalVisits: 3,
        chronicConditions: [],
        allergies: [],
      },
      {
        id: "3",
        healthId: "KL-MIG-003-2024",
        firstName: "Suresh",
        lastName: "Kumar",
        phone: "+91-9876543214",
        age: 42,
        gender: "male",
        bloodGroup: "A+",
        address: "Industrial Area, Kochi",
        district: "Ernakulam",
        language: "malayalam",
        lastVisit: "2024-01-08",
        totalVisits: 8,
        chronicConditions: ["Diabetes", "Hypertension"],
        allergies: ["Aspirin"],
      },
    ];
    const filteredPatients = patients.filter((patient) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        patient.firstName.toLowerCase().includes(searchLower) ||
        patient.lastName.toLowerCase().includes(searchLower) ||
        patient.healthId.toLowerCase().includes(searchLower) ||
        patient.phone.includes(searchTerm)
      );
    });

    const PatientDetailsDialog = ({ patient, onClose }) => (
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        onClose={onClose}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {patient.firstName} {patient.lastName}
          </DialogTitle>
          <DialogDescription>
            Patient Health Record - ID: {patient.healthId}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 p-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Age</p>
                  <p className="font-medium">{patient.age} years</p>
                </div>
                <div>
                  <p className="text-gray-500">Gender</p>
                  <p className="font-medium capitalize">{patient.gender}</p>
                </div>
                <div>
                  <p className="text-gray-500">Blood Group</p>
                  <p className="font-medium">{patient.bloodGroup}</p>
                </div>
                <div>
                  <p className="text-gray-500">Language</p>
                  <p className="font-medium capitalize">{patient.language}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium">{patient.phone}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Address</p>
                  <p className="font-medium">{patient.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Medical Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 mb-2">Chronic Conditions</p>
                  {patient.chronicConditions.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {patient.chronicConditions.map((condition, index) => (
                        <Badge key={index} variant="destructive">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No chronic conditions
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-gray-500 mb-2">Allergies</p>
                  {patient.allergies.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {patient.allergies.map((allergy, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-yellow-500 text-yellow-500"
                        >
                          {allergy}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No known allergies</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Last Visit</p>
                    <p className="font-medium">{patient.lastVisit}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total Visits</p>
                    <p className="font-medium">{patient.totalVisits}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex gap-3 pt-4 border-t dark:border-gray-800">
            <Button className="flex-1">
              <FileText className="mr-2 h-4 w-4" />
              New Consultation
            </Button>
            <Button variant="outline" className="flex-1">
              <Pill className="mr-2 h-4 w-4" />
              Prescribe Medicine
            </Button>
            <Button variant="outline">
              <QrCode className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    );

    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Patient Search</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Search for patients by name, Health ID, or phone number.
          </p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center gap-0">
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 text-base h-12 border-0 rounded-none focus:ring-0"
                />
              </div>
              <Button className="rounded-none h-12 px-6">
                <Search className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {!searchTerm && (
            <Card>
              <CardContent className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Begin Your Search</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Use the search bar above to find a patient.
                </p>
              </CardContent>
            </Card>
          )}
          {searchTerm && filteredPatients.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No Patients Found</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  No patients match your search. Please try again.
                </p>
              </CardContent>
            </Card>
          )}
          {searchTerm &&
            filteredPatients.map((patient) => (
              <Card
                key={patient.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {patient.firstName} {patient.lastName}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            ID: {patient.healthId}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{patient.bloodGroup}</Badge>
                          <Badge variant="secondary" className="capitalize">
                            {patient.language}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>
                            {patient.age} years, {patient.gender}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span>{patient.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{patient.district}</span>
                        </div>
                      </div>
                      {(patient.chronicConditions.length > 0 ||
                        patient.allergies.length > 0) && (
                        <div className="mt-3 pt-3 border-t dark:border-gray-800">
                          <div className="flex flex-wrap gap-2">
                            {patient.chronicConditions.map((c, i) => (
                              <Badge
                                key={`c-${i}`}
                                variant="destructive"
                                className="text-xs"
                              >
                                {c}
                              </Badge>
                            ))}
                            {patient.allergies.map((a, i) => (
                              <Badge
                                key={`a-${i}`}
                                variant="outline"
                                className="text-xs border-yellow-500 text-yellow-500"
                              >
                                Allergy: {a}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                      <Button onClick={() => setSelectedPatient(patient)}>
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Quick Consult
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
        <Dialog open={!!selectedPatient}>
          {selectedPatient && (
            <PatientDetailsDialog
              patient={selectedPatient}
              onClose={() => setSelectedPatient(null)}
            />
          )}
        </Dialog>
      </div>
    );
  };

  const MainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "patients":
        return <PatientSearch />;
      case "consultations":
        return <Consultations />;
      case "prescriptions":
        return <Prescriptions />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Page not found</h1>
          </div>
        );
    }
  };

  return (
    <main className="h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r dark:bg-gray-900 dark:border-gray-800">
        <SidebarContent />
      </div>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent />
          </div>
        </div>
      )}
      <div className="md:pl-64 h-full overflow-y-auto">
        <MainContent />
      </div>
    </main>
  );
}