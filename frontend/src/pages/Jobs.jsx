import { FaSearch } from "react-icons/fa";

const Jobs = () => {
  return (
    <div>
      <div className='px-10 min-h-[320px]'>
        <h1>Explore Thousand Of Jobs With Just Simple Search ...</h1>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <input
              className='py-1.5 px-2 border'
              type='text'
              placeholder='Job title, Keywords or company name'
            />
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
