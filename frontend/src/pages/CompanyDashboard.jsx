import React from "react";
import CompanySidebar from "../components/CompanySidebar";
import CompanyProfile from "../components/CompanyProfile";
import PostJob from "../components/PostJob";
import Applicant from "../components/Applicant";
import ManageJobs from "../components/ManageJobs";

const CompanyDashboard = () => {
  return (
    <div className='flex items-start border-t border-gray-300 mt-8'>
      <CompanySidebar />
      {/* <CompanyProfile /> */}
      {/* <PostJob /> */}
      {/* <Applicant /> */}
      <ManageJobs />
    </div>
  );
};

export default CompanyDashboard;
