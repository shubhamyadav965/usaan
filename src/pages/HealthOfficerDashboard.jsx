"use client";

import React, { useState, createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "services/operations/authAPI";

// --- SVG Icons ---
const ShieldAlert = (props) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);
const Activity = (props) => (
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
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const Map = (props) => (
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
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);
const Syringe = (props) => (
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
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15 1" />
    <path d="m9 15 4-4" />
    <path d="m12 12 1.4-1.4" />
    <path d="m15 9 1.4-1.4" />
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
const TrendingUp = (props) => (
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const TrendingDown = (props) => (
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
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
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

// --- Mocking Framework Hooks ---

const useRouter = () => ({
  push: (path) => console.log(`Navigating to ${path}`),
});

// --- Mocking Auth Context ---
const mockUser = {
  profile: {
    first_name: "Anjali",
    last_name: "Sharma",
    specialization: "Public Health Officer",
  },
};
const AuthContext = createContext({
  user: mockUser,
  logout: () => console.log("Logged out"),
});
const useAuth = () => useContext(AuthContext);

// --- Main Application Component ---
export default function HealthOfficerApp() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout(navigate));
    router.push("/");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Activity },
    { id: "analytics", label: "Regional Analytics", icon: Map },
    { id: "surveillance", label: "Disease Surveillance", icon: ShieldAlert },
    { id: "reports", label: "Generate Reports", icon: FileText },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <Link to="/" className="flex items-center gap-2 text-[#F97316]">
          <Heart className="h-6 w-6" />
          <span className="font-bold text-lg">Kerala eHealth</span>
        </Link>
        <div className="mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Health Officer Portal
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
    const formattedDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const regionalData = [
      { region: "Bhagalpur", cases: 125, trend: 0.15 },
      { region: "Patna", cases: 88, trend: -0.05 },
      { region: "Gaya", cases: 62, trend: 0.02 },
    ];

    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Health Officer Dashboard</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome, {user?.profile?.first_name}. Today is {formattedDate}.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <ShieldAlert className="h-5 w-5" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">3</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                1 new alert in Bhagalpur
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="h-5 w-5" />
                New Cases (24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">275</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +10% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Syringe className="h-5 w-5" />
                Vaccination Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">78%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Target: 90%
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Regional Health Overview</CardTitle>
            <CardDescription>
              Summary of new cases reported in the last 24 hours by district.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <p className="font-semibold">{data.region}</p>
                  <div className="flex items-center gap-4">
                    <p className="font-mono text-lg">{data.cases}</p>
                    <Badge
                      variant={data.trend > 0 ? "destructive" : "default"}
                      className="w-24 justify-center"
                    >
                      {data.trend > 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {(data.trend * 100).toFixed(0)}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const RegionalAnalytics = () => {
    const districtsData = [
      {
        name: "Bhagalpur",
        population: "3.2M",
        caseRate: "39.1/100k",
        vaccinationRate: "75%",
        keyIssue: "Rising Dengue cases",
      },
      {
        name: "Patna",
        population: "7.8M",
        caseRate: "11.3/100k",
        vaccinationRate: "82%",
        keyIssue: "Low booster uptake",
      },
      {
        name: "Gaya",
        population: "5.1M",
        caseRate: "12.1/100k",
        vaccinationRate: "79%",
        keyIssue: "High rate of malnutrition",
      },
      {
        name: "Muzaffarpur",
        population: "4.8M",
        caseRate: "15.5/100k",
        vaccinationRate: "72%",
        keyIssue: "AES/JE outbreaks",
      },
    ];
    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Regional Analytics</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Analyze health metrics across different districts.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>District Health Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {districtsData.map((d) => (
              <Card key={d.name}>
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                  <CardDescription>Population: {d.population}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Case Rate (per 100k)</span>
                    <span className="font-semibold">{d.caseRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vaccination Rate</span>
                    <span className="font-semibold">{d.vaccinationRate}</span>
                  </div>
                  <div className="flex justify-between items-start pt-2 border-t mt-2">
                    <span className="text-gray-500">Key Issue</span>
                    <Badge variant="destructive">{d.keyIssue}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Detailed Report
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  };

  const DiseaseSurveillance = () => {
    const diseaseData = [
      { name: "Dengue Fever", cases: 482, trend: 0.22, risk: "High" },
      {
        name: "Acute Encephalitis Syndrome (AES)",
        cases: 98,
        trend: 0.05,
        risk: "High",
      },
      { name: "Tuberculosis (TB)", cases: 1203, trend: -0.02, risk: "Medium" },
      { name: "COVID-19", cases: 215, trend: 0.11, risk: "Medium" },
      { name: "Malaria", cases: 77, trend: -0.15, risk: "Low" },
    ];
    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Disease Surveillance</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Monitor communicable disease trends and risk levels.
          </p>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="p-4 font-medium">Disease</th>
                    <th className="p-4 font-medium">Active Cases</th>
                    <th className="p-4 font-medium">Weekly Trend</th>
                    <th className="p-4 font-medium">Risk Level</th>
                    <th className="p-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {diseaseData.map((d) => (
                    <tr key={d.name} className="border-b dark:border-gray-800">
                      <td className="p-4 font-medium">{d.name}</td>
                      <td className="p-4">{d.cases}</td>
                      <td
                        className={`p-4 flex items-center ${
                          d.trend > 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {d.trend > 0 ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {(d.trend * 100).toFixed(0)}%
                      </td>
                      <td className="p-4">
                        <Badge
                          variant={
                            d.risk === "High" ? "destructive" : "default"
                          }
                        >
                          {d.risk}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const Reports = () => {
    return (
      <div className="space-y-6 p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Generate Reports</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Create and download public health reports.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
              <p>Weekly Communicable Disease Summary</p>
              <Button>Generate</Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
              <p>Monthly Vaccination Coverage Report</p>
              <Button>Generate</Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
              <p>District-wise Health Infrastructure Report</p>
              <Button>Generate</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const MainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "analytics":
        return <RegionalAnalytics />;
      case "surveillance":
        return <DiseaseSurveillance />;
      case "reports":
        return <Reports />;
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