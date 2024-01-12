import FilterEmployee from "../components/FilterEmployee";
import EmployeeCard from "../components/EmployeeCard";
import Profile from "../assets/profile.png";

const Employee = () => {
  return (
    <div className='w-full'>
      <img className='h-60 object-cover' src={Profile} alt='' />
      <div className='lg:flex xl:justify-between xl:px-20 md:px-2'>
        <div className='pt-6 pb-2'>
          <h1 className='pl-8 py-3 text-xl'>Filters</h1>
          <FilterEmployee />
        </div>
        <div>
          <h1 className='text-xl mb-10 mt-4 pl-2'>100 Jobs and vacancies</h1>
          {Array.from({ length: 6 }).map((_, index) => (
            <EmployeeCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employee;
