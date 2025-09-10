import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from "./pages/homepage-government-digital-services-portal";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import HealthOfficerDashboard from "pages/HealthOfficerDashboard";
import DoctorDashboard from "pages/DoctorDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route
            path="/homepage-government-digital-services-portal"
            element={<Homepage />}
          />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          {/*Health Officer-dashboard*/}
          <Route
            path="/health-officer-dashboard"
            element={<HealthOfficerDashboard />}
          />
          {/*Doctor-dashboard*/}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;