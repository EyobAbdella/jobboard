import React from "react";

const ManageJobs = () => {
  const jobs = [
    {
      title: "software Engineering",
      Application: "6 Applied",
      created: "Jan 14, 2024",
      expired: "Feb 14, 2024",
      status: "Expired",
    },
    {
      title: "software Engineering",
      Application: "6 Applied",
      created: "Jan 14, 2024",
      expired: "Feb 14, 2024",
      status: "Expired",
    },
  ];
  return (
    <div className='lg:px-14 md:px-10 mb-auto mt-10 w-full space-y-6'>
      <h1 className='text-3xl font-[500] font-sans'>Manage Jobs</h1>
      <div className='space-x-1.5 font-[500] text-gray-500'>
        <span>Job Board</span>
        <span>/</span>
        <span>DashBoard</span>
        <span>/</span>
        <span className='text-indigo-400 cursor-pointer'>Manage Jobs</span>
      </div>
      <div className='border border-gray-200 rounded-lg space-y-3 pb-4'>
        <div className='flex justify-center items-center py-8 bg-gray-100'>
          <p className='text-xl font-[500]'>Showing 1-10 of 07 Job</p>
        </div>
        {/* <div className='mt-5 border-b-2 border-gray-200 px-4 mx-4 text-slate-500 font-[500] text-[17px] mb-2 flex space-x-8 items-center'>
          <p className='w-48'>Title</p>
          <p className='w-40 border border-black'>Applications</p>
          <p className='w-40 border border-black'>Created</p>
          <p className='w-40 border border-black'>Expired</p>
          <p className='w-40 border border-black'>Status</p>
          <p className='w-40 border border-black'>Action</p>
        </div>
        <div className='mt-5 border-b-2 border-gray-200 px-4 mx-4 text-slate-500 font-[500] text-[17px] mb-2 flex space-x-8 items-center'>
          <p className='w-48'>Software Engineer</p>
          <p className='w-40 border border-black'>6 Applied</p>
          <p className='w-40 border border-black'>Jun 16, 2024</p>
          <p className='w-40 border border-black'>Mar 16, 2024</p>
          <p className='w-40 border border-black'>Expired</p>
          <div>
            <p className='p-4 bg-indigo-400 rounded-lg'></p>
          </div>
        </div> */}
        <div className='mx-4 w-full overflow-x-scroll px-4'>
          <div className='border-b-2 border-gray-200 flex justify-between w-full'>
            <p className='w-44'>Title</p>
            <p className='w-40 text-start'>Application</p>
            <p>Created</p>
            <p>Expired</p>
            <p>Status</p>
            <p>Action</p>
          </div>
          {jobs.map((job) => (
            <div className='flex justify-between w-full'>
              <p className='w-44'>{job.title}</p>
              <p className='w-40 text-start'>{job.Application}</p>
              <p>{job.created}</p>
              <p>{job.expired}</p>
              <p>{job.status}</p>
              <p>
                <p className='w-6 h-6 bg-indigo-400 rounded-lg'></p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
