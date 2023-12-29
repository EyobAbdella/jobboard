import Bg from "../assets/bg.png";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
const ApplySteps = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className='h-[1100px] md:h-[800px] lg:h-[450px]  flex flex-col items-center justify-center gap-y-10 py-32 box-content'>
      <p className='text-pink-600'>APPLY PROCESS</p>
      <h1 className='text-5xl text-white'>How it works</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        <div className='py-4 flex group flex-col justify-center items-center h-80 w-96 gap-4 bg-[#26317f] text-white'>
          <div className='border border-slate-50 rounded p-1 group-hover:-scale-x-100 duration-500'>
            <ManageSearchOutlinedIcon style={{ fontSize: 40, color: "#fff" }} />
          </div>
          <h1 className='text-2xl font-mono font-semibold'>1.Search Jobs</h1>
          <p className='w-60 text-center text-gray-400 font-serif'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            vero.
          </p>
        </div>
        <div className='py-4 flex group flex-col justify-center items-center h-80 w-96 gap-4 bg-[#26317f] text-white'>
          <div className='border border-slate-50 rounded p-1 group-hover:-scale-x-100 duration-500'>
            <BusinessCenterOutlinedIcon
              style={{ fontSize: 40, color: "#fff" }}
            />
          </div>
          <h1 className='text-2xl font-mono font-semibold'>2.Apply for job</h1>
          <p className='w-60 text-center text-gray-400 font-serif'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            vero.
          </p>
        </div>
        <div className='py-4 flex group flex-col justify-center items-center h-80 w-96 gap-4 bg-[#26317f] text-white'>
          <div className='border border-slate-50 rounded p-1 group-hover:-scale-x-100 duration-500'>
            <WorkOutlineIcon style={{ fontSize: 40, color: "#fff" }} />
          </div>
          <h1 className='text-2xl font-mono font-semibold'>3.Get your job</h1>
          <p className='w-60 text-center text-gray-400 font-serif'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            vero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplySteps;
