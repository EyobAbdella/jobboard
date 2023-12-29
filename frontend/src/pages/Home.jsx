import { IoIosSearch } from "react-icons/io";
import Job from "../assets/job.svg";
import Category from "../components/Category";
import Design from "../assets/design.svg";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import MultipleSelect from "../components/MultipleSelect";
import { styled } from "@mui/system";
import CompanyCard from "../components/CompanyCard";

import ApplySteps from "../components/ApplySteps";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className='h-full mt-24 md:mt-44 space-y-10 pb-4'>
      <div className='flex justify-between items-center relative mb-10 md:mb-20'>
        <div className='space-y-10 md:pl-10'>
          <div className='space-y-4 px-2'>
            <h1 className='text-4xl text-center md:text-start md:text-5xl font-semibold font-serif'>
              The Easiest Way to Get Your New Job
            </h1>
            <p className='text-gray-500 text-center md:text-start text-sm pl-2'>
              Find jobs, Employment & Career Opportunities
            </p>
          </div>

          <div className='px-3 md:flex gap-6 space-y-6 md:space-y-0'>
            <TextField
              id='outlined-basic'
              label='Job title, keyword or company name'
              variant='outlined'
              sx={{ height: 45, width: isMatch ? "100%" : 350 }}
            />
            <MultipleSelect width={isMatch ? "100%" : 350} title='Location' />
            <Button
              sx={{ height: 45, py: 3.3, width: isMatch ? "100%" : 100 }}
              variant='outlined'>
              Search
            </Button>
          </div>
        </div>
        <img
          src={Job}
          className='h-[500px] absolute right-0 -z-30 hidden md:flex'
          alt=''
        />
      </div>

      <h1 className='text-4xl md:text-5xl text-center text-indigo-950 font-semibold'>
        Browse From Top Categories
      </h1>

      <div
        className='px-6  mt-6'
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Category
            key={index}
            icon={<ArchitectureOutlinedIcon style={{ fontSize: "120" }} />}
            title='Design, Art and Multimedia'
            openPosition={20}
          />
        ))}
      </div>
      <ApplySteps />
      <Testimonial />
    </div>
  );
};

export default Home;
