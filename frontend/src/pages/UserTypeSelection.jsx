import { Link } from "react-router-dom";
import Company from "../assets/company.svg";
import JobFinder from "../assets/jobFind.svg";

const UserTypeSelection = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <Link className='absolute top-4 left-8'>Logo</Link>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:border border-gray-300 p-8 rounded-lg'>
        <div className='border border-gray-200 rounded-lg p-3 cursor-pointer hover:ring-2 ring-indigo-300 duration-200'>
          <img className='h-60 w-64' src={Company} alt='' />
          <h1 className='text-center text-2xl font-sans mt-2'>
            I'm Company Owner
          </h1>
        </div>
        <div className='border border-gray-200 rounded-lg p-3 cursor-pointer hover:ring-2 ring-indigo-300 duration-200'>
          <img className='h-60 w-60' src={JobFinder} alt='' />
          <h1 className='text-center text-2xl font-sans mt-2'>
            I'm Job seeker
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
