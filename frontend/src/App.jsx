import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Google from "./pages/Google";
import Verify from "./pages/Verify";
import Activate from "./pages/Activate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Layout from "./Layout/Layout";
import Companies from "./pages/Companies";
import Employee from "./pages/Employee";
import EmployeeProfile from "./pages/EmployeeProfile";
import JobDetail from "./pages/JobDetail";
import CompanyDetail from "./pages/CompanyDetail";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import { Toaster } from "react-hot-toast";
import UserTypeSelection from "./pages/UserTypeSelection";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='verify' element={<Verify />} />
          <Route path='google' element={<Google />} />
          <Route path='user-account-type' element={<UserTypeSelection />} />
          <Route path='activate/:uid/:token' element={<Activate />} />
          <Route element={<Layout />}>
            <Route path='employee/:id' element={<EmployeeProfile />} />
            <Route
              path='company-dashboard/:id'
              element={<CompanyDashboard />}
            />
            <Route path='companies' element={<Companies />} />
            <Route path='company/:id' element={<CompanyDetail />} />
            <Route
              path='employee-dashboard/:id'
              element={<EmployeeDashboard />}
            />
            <Route path='employee' element={<Employee />} />
            <Route path='/jobs/:id' element={<JobDetail />} />
            <Route path='/' element={<Home />} />
            <Route path='/jobs' element={<Jobs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
