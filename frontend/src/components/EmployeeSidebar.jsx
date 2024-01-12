import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const EmployeeSidebar = () => {
  return (
    <ui className='border-r border-gray-300 px-10 pb-4 pt-8 space-y-3'>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 py-3 bg-indigo-100 text-indigo-500 font-[500] rounded-lg'>
        <HomeOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>Dashboard</p>
      </li>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 text-indigo-950 py-3 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg'>
        <PersonOutlineOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>Profile</p>
      </li>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 text-indigo-950 py-3 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg'>
        <BorderColorOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>My Resume</p>
      </li>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 text-indigo-950 py-3 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg'>
        <BusinessCenterOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>Applied Jobs</p>
      </li>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 text-indigo-950 py-3 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg'>
        <BookmarkBorderOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>Short Listed</p>
      </li>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 text-indigo-950 py-3 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg'>
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>Job Alert</p>
      </li>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 text-indigo-950 py-3 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg'>
        <LockOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>Change Password</p>
      </li>
      <li className='flex items-center gap-x-3 w-30 justify-between px-12 text-indigo-950 py-3 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg'>
        <LogoutOutlinedIcon sx={{ fontSize: 25 }} />
        <p className='mr-auto'>Logout</p>
      </li>
    </ui>
  );
};

export default EmployeeSidebar;
