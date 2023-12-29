import { Avatar } from "@mui/material";
import Profile from "../assets/profile.png";

const EmployeeCard = () => {
  return (
    <div className='group flex items-center gap-4 py-8 pr-4 border-b border-gray-100 hover:shadow-lg shadow-gray-400 duration-500'>
      <Avatar alt='John Smith' src={Profile} sx={{ width: 100, height: 100 }} />
      <div className='space-y-1.5'>
        <h1 className='text-xl'>John Smith</h1>
        <p className='font-sans text-indigo-500'>Software Engineer</p>
        <p>USA / California</p>
      </div>
      <button className='gap-x-3 flex items-center ml-auto rounded-md bg-indigo-500 p-2 text-white group-hover:bg-white group-hover:text-indigo-500 group-hover:border border-indigo-500 duration-500'>
        <p>View Profile</p> <span className='text-xl'>+</span>
      </button>
    </div>
  );
};

export default EmployeeCard;
