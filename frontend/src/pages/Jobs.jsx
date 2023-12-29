import { FaSearch } from "react-icons/fa";
import Work from "../assets/work.png";
import { Stack } from "@mui/material";
import FilterJobs from "../components/FilterJobs";
import JobCard from "../components/JobCard";
const Jobs = () => {
  return (
    <div className='w-full'>
      <img className='w-full h-60 object-cover' src={Work} alt='' />
      <div className='lg:flex'>
        <div className='pt-6 pb-2'>
          <h1 className='py-3 text-xl lg:block hidden ml-8'>Filters</h1>
          <FilterJobs />
        </div>
        <div className='w-full'>
          <h1 className='text-xl mb-10 mt-4 pl-2'>100 Jobs and vacancies</h1>
          {Array.from({ length: 6 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
