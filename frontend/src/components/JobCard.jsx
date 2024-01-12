import React from "react";
import Logo from "../assets/design.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const JobCard = () => {
  return (
    <div className='w-full border border-gray-50 px-3 py-6 sm:py-10 my-2 cursor-pointer rounded hover:ring-1 hover:ring-indigo-300 duration-500 space-y-6'>
      <div className='flex items-start gap-5'>
        <img
          className='border border-indigo-200 rounded-full p-1 h-24 w-24'
          src={Logo}
          alt=''
        />
        <div className='space-y-2 max-w-[750px]'>
          <h1 className=' w-fit text-lg sm:text-[1.6rem] text-indigo-950 hover:text-indigo-800'>
            Web Designer / Developer
          </h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            reiciendis illum tenetur quo sequi aliquam eos, nesciunt adipisci
            eligendi laudantium.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 lg:gap-x-3 xl:gap-x-10 gap-y-2 text-sm mt-2 font-sans text-slate-500'>
            <p>MicroSoft</p>
            <div className='flex gap-x-0.5'>
              <LocationOnOutlinedIcon fontSize='small' />
              <p>Addis Ababa</p>
            </div>
            <div className='flex gap-1'>
              <AccessTimeOutlinedIcon fontSize='small' />
              <p>Part-Time</p>
            </div>
            <p>$3500-$4000</p>
          </div>
        </div>
        <div className='hidden sm:block ml-auto text-center space-y-2'>
          <button className='rounded-md py-2.5 px-7 hover:border hover:border-indigo-400 bg-indigo-400 hover:bg-white hover:text-indigo-500 duration-500 text-white'>
            Apply Now
          </button>
          <p className='text-sm italic text-gray-600 font-thin'>
            <span>Date line: </span>1 day ago
          </p>
        </div>
      </div>
      <p className='w-4/5 sm:hidden mx-auto py-3 rounded-full text-center hover:border hover:border-indigo-400 bg-indigo-400 hover:bg-white hover:text-indigo-500 duration-500 text-white'>
        Apply Now
      </p>
    </div>
  );
};

export default JobCard;
