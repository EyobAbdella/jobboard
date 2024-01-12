import React from "react";
import CompanySidebar from "../components/CompanySidebar";
import CompanyProfile from "../components/CompanyProfile";
import PostJob from "../components/PostJob";

const CompanyDashboard = () => {
  return (
    <div className='flex items-start border-t border-gray-300 mt-8'>
      <CompanySidebar />
      {/* <CompanyProfile /> */}
      <PostJob />
    </div>
  );
};

export default CompanyDashboard;
