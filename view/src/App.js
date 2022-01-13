import React, { useContext } from "react";
import { BrowserRouter, Route, useLocation, Switch } from "react-router-dom";
import LandingLayout from "./components/UI/Layout/LandingLayout";
import CitizenLayout from "./components/UI/Layout/CitizenLayout";
import AdminLayout from "./components/UI/Layout/AdminLayout";
import SuperAdminLayout from "./components/UI/Layout/SuperAdminLayout";
import Home from "./pages/Landing/Home";
import Features from "./pages/Landing/Features";
import Login from "./pages/Landing/Login";
import Profile from "./pages/Citizen/Profile";
import Proposals from "./pages/Citizen/Proposals";
import Projects from "./pages/Citizen/Projects";
import Reports from "./pages/Citizen/Reports";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminProfile from "./pages/Admin/AdminProfile";
import AdminProjects from "./pages/Admin/AdminProjects";
import AdminProposals from "./pages/Admin/AdminProposals";
import AdminReports from "./pages/Admin/AdminReports";
import AdminApplicants from "./pages/Admin/AdminApplicants";
import AdminCitizens from "./pages/Admin/AdminCitizens";
import AdminMessages from "./pages/Admin/AdminMessages";
import SuperAdminHome from "./pages/SuperAdmin/SuperAdminHome";
import SuperAdminFeatures from "./pages/SuperAdmin/SuperAdminFeatures";
import SuperAdminProfile from "./pages/SuperAdmin/SuperAdminProfile";
import SuperAdminAdministrators from "./pages/SuperAdmin/SuperAdminAdministrators";
import { ProtectedRoute, AdminProtectedRoute } from "./components/Authentication/protectedRoute";

function App() {
  const currentPath = useLocation();
 
  const Landing = (props) => {
    console.log(currentPath.pathname);
    return (
      <BrowserRouter>
        <LandingLayout>
            <Route path="/" exact component={Home} />
            <Route path="/features" exact component={Features} />
            <Route path="/login" exact component={Login} />
        </LandingLayout>
      </BrowserRouter>
    );
  };

  const Citizen = (props) => {
    console.log(currentPath.pathname);
    return (
      <BrowserRouter>
        <CitizenLayout>
            <ProtectedRoute path="/citizen/profile" exact component={Profile} />
            <ProtectedRoute path="/citizen/proposals" exact component={Proposals} />
            <ProtectedRoute path="/citizen/projects" exact component={Projects} />
            <ProtectedRoute path="/citizen/reports" exact component={Reports} />
        </CitizenLayout>
      </BrowserRouter>
    );
  };

  const Admin = (props) => {
    console.log(currentPath.pathname);
    return (
      <BrowserRouter>
        <AdminLayout>
          <AdminProtectedRoute path="/admin/profile" exact component={AdminProfile} />
          <AdminProtectedRoute path="/admin/proposals" exact component={AdminProposals} />
          <AdminProtectedRoute path="/admin/projects" exact component={AdminProjects} />
          <AdminProtectedRoute path="/admin/reports" exact component={AdminReports} />
          <AdminProtectedRoute path="/admin/applicants" exact component={AdminApplicants} />
          <AdminProtectedRoute path="/admin/citizens" exact component={AdminCitizens} />
          <AdminProtectedRoute path="/admin/messages" exact component={AdminMessages} />
        </AdminLayout>
      </BrowserRouter>
    );
  };

  const SuperAdmin = (props) => {
    return (
      <BrowserRouter>
        <SuperAdminLayout>
          <Route path="/super-admin/profile" exact component={SuperAdminProfile} />
          <Route path="/super-admin/home" exact component={SuperAdminHome} />
          <Route path="/super-admin/features" exact component={SuperAdminFeatures} />
          <Route path="/super-admin/administrators" exact component={SuperAdminAdministrators} />
        </SuperAdminLayout>
      </BrowserRouter>
    );
  };

  const LoginRoutes = () => {
    return (
      <BrowserRouter>
        <Route path="/admin/login" exact component={AdminLogin} />
      </BrowserRouter>
    );
  }

  const CurrentLayout = () => {
    if (
      currentPath.pathname === "/" ||
      currentPath.pathname === "/features" ||
      currentPath.pathname === "/login"
    ) {
      return <Landing />;
    } else if (
      currentPath.pathname === "/citizen/profile" ||
      currentPath.pathname === "/citizen/proposals" ||
      currentPath.pathname === "/citizen/projects" ||
      currentPath.pathname === "/citizen/reports" 
    ) {
      return <Citizen />;
    } else if (
      currentPath.pathname === "/admin/profile" ||
      currentPath.pathname === "/admin/proposals" ||
      currentPath.pathname === "/admin/projects" ||
      currentPath.pathname === "/admin/reports" ||
      currentPath.pathname === "/admin/applicants" ||
      currentPath.pathname === "/admin/citizens" || 
      currentPath.pathname === "/admin/messages" 
    ) {
      return <Admin />;
    } else if (
      currentPath.pathname === "/super-admin/profile" ||
      currentPath.pathname === "/super-admin/home" ||
      currentPath.pathname === "/super-admin/features" ||
      currentPath.pathname === "/super-admin/administrators"
    ) {
      return <SuperAdmin />;
    } else {
      return <LoginRoutes />
    }
  };

  return <React.Fragment>{CurrentLayout()}</React.Fragment>;
}

export default App;


