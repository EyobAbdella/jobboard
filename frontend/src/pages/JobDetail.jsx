import { Avatar, Rating } from "@mui/material";
import Logo from "../assets/design.svg";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const JobDetail = () => {
  return (
    <div className='px-24 py-2 font-sans'>
      <div className='flex items-center gap-x-8 border border-gray-200 rounded-lg p-8'>
        <div className='rounded border border-gray-200'>
          <Avatar src={Logo} sx={{ width: 100, height: 100 }} />
        </div>

        <div className='space-y-3'>
          <div className='flex items-center space-x-2'>
            <Rating />
            <p className='bg-green-500 rounded-lg text-white px-2 py-0.5 text-xs'>
              5.0
            </p>
          </div>
          <div className='flex items-center gap-x-4'>
            <h1 className='text-2xl font-semibold'>Software Engineer</h1>
            <p className='px-3 py-1 rounded bg-green-50 font-semibold text-green-400 flex items-center gap-x-2'>
              <BusinessCenterOutlinedIcon style={{ fontSize: 22 }} /> Full Time
            </p>
          </div>

          <div className='flex items-center gap-x-4 font-serif mt-4'>
            <div className='flex items-center gap-x-1'>
              <BusinessCenterOutlinedIcon
                style={{
                  fontSize: 22,
                  color: "#f2e11fd0",
                }}
              />
              <p>Finance Agency</p>
            </div>
            <div className='flex items-center gap-x-1'>
              <LocationOnOutlinedIcon
                style={{
                  fontSize: 22,
                  color: "#f2e11fd0",
                }}
              />
              <p>Location</p>
            </div>
          </div>
        </div>

        <div className='ml-auto space-y-4'>
          <div className='flex items-center space-x-2'>
            <p className='text-lg text-gray-600'>Application Ends: </p>
            <span className='font-semibold'>Nov 23, 2024</span>
          </div>
          <button className='w-60 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md px-4 py-2.5'>
            <SendOutlinedIcon sx={{ mr: 1.5 }} /> Apply For Job
          </button>
        </div>
      </div>

      <div className='flex items-start w-full gap-x-4 mt-16 justify-between'>
        <div className='space-y-8 w-2/3'>
          <div className='border border-gray-300 rounded-md px-8 py-4 w-full space-y-4'>
            <h1 className='text-2xl font-semibold my-2'>Job Overview: </h1>
            <div className='grid grid-cols-3 gap-4'>
              <div className='border border-gray-300 rounded-md px-5 py-3 w-52'>
                <p className='font-semibold text-lg mb-2'>Offered Salary</p>
                <span className='text-indigo-400 font-semibold text-sm'>
                  ETB 10K
                </span>
              </div>
              <div className='border border-gray-300 rounded-md px-5 py-3 w-52'>
                <p className='font-semibold text-lg mb-2'>Experience</p>
                <span className='text-indigo-400 font-semibold text-sm'>
                  5 Years
                </span>
              </div>
              <div className='border border-gray-300 rounded-md px-5 py-3 w-52'>
                <p className='font-semibold text-lg mb-2'>Industry</p>
                <span className='text-indigo-400 font-semibold text-sm'>
                  Finance Agency
                </span>
              </div>
              <div className='border border-gray-300 rounded-md px-5 py-3 w-52'>
                <p className='font-semibold text-lg mb-2'>Gender</p>
                <span className='text-indigo-400 font-semibold text-sm'>
                  Both
                </span>
              </div>
            </div>
          </div>

          <div className='border border-gray-300 rounded-md px-8 py-4 w-full space-y-4'>
            <h1 className='text-2xl font-semibold my-2'>Job Description: </h1>
            <p className='text-indigo-950'>
              If you like to work in a fast paced retail surroundings and
              preference an possibility to earn appealing bonuses in your
              difficult paintings, we need to pay attention from you. Our shoe
              shop franchise wishes an articulate and informed person to take
              over the Assistant Manager role. You’ll set schedules for all
              income associates, assist the GM increase and control promotions,
              make contributions to the high-power surroundings withinside the
              shop, order products and take care of all budgetary elements of
              walking the business. We sell from inside each time possible, so
              capability profession tracks should encompass GM, DM or
            </p>
          </div>
        </div>

        <div className='space-y-6 ml-auto w-[350px] px-5 py-4 border border-gray-300 rounded-md'>
          <div className='flex items-center gap-x-4'>
            <img src={Logo} alt='logo' className='w-20 h-20 rounded-lg' />
            <div>
              <h1 className='text-2xl font-semibold'>Security Ltd.</h1>
              <p className='text-lg hover:text-indigo-900 text-indigo-950 font-semibold'>
                View Company Profile
              </p>
            </div>
          </div>
          <div className=' text-lg flex items-center gap-x-4 border-b border-gray-200 pb-3.5 '>
            <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
              Industry <span>:</span>
            </p>
            <p className='break-words w-36 text-gray-600 font-serif'>Finance</p>
          </div>
          <div className=' text-lg flex items-center gap-x-4 border-b border-gray-200 pb-3.5 '>
            <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
              Size <span>:</span>
            </p>
            <p className='text-gray-600 font-serif'>200</p>
          </div>
          <div className=' text-lg flex items-center gap-x-4 border-b border-gray-200 pb-3.5 '>
            <p className='text-indigo-950 font-[500] w-36  flex justify-between'>
              Founded In <span>:</span>
            </p>
            <p className='text-gray-600 font-serif'>2012</p>
          </div>
          <div className=' text-lg flex items-center gap-x-4 border-b border-gray-200 pb-3.5 '>
            <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
              Address <span>:</span>
            </p>
            <p className='text-gray-600 font-serif'>Addis Ketama</p>
          </div>
          <div className=' text-lg flex items-center gap-x-4 border-b border-gray-200 pb-3.5 '>
            <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
              Email <span>:</span>
            </p>
            <p className='text-gray-600 font-serif'>info@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
