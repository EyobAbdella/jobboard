import React, { useState } from "react";
import CompanyCard from "../components/CompanyCard";
import Company from "../assets/company.svg";
import { Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import MultipleSelect from "../components/MultipleSelect";
import CompanyLogo from "../assets/company-logo.png";

const Companies = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [category, setCategory] = useState(1);
  const categoryItems = [
    "All Category",
    "Marketing",
    "Finance & Accounting",
    "Programming & IT",
    "Medicine",
    "Creative & Art",
  ];

  return (
    <div className='mt-24 md:mt-44 '>
      <div className='flex justify-center md:justify-between items-center relative mb-10 md:mb-20'>
        <div className='space-y-10 md:pl-10'>
          <div className='space-y-4 px-2'>
            <h1 className='text-5xl font-semibold font-serif'>
              Explore Top Companies
            </h1>
            <p className='text-gray-500 text-sm pl-2'>
              Discover exciting businesses and opportunities
            </p>
          </div>

          <div className='px-3 md:flex gap-6 space-y-6 md:space-y-0'>
            <TextField
              id='outlined-basic'
              label='Company name or industry'
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
          src={Company}
          className='h-[500px] absolute right-0 -z-30 hidden md:flex'
          alt=''
        />
      </div>
      <ul className='flex flex-wrap justify-center md:text-xl gap-x-8 gap-y-1'>
        {categoryItems.map((item, index) => (
          <li
            key={index}
            className={`hover:text-blue-800 cursor-pointer duration-200 py-1 ${
              category === item
                ? "text-blue-800 border-b-2 border-blue-800"
                : ""
            }`}
            onClick={() => setCategory(item)}>
            {item}
          </li>
        ))}
      </ul>
      <div
        className='px-6  mt-6 py-2'
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <CompanyCard
            key={index}
            name='Facebook'
            logo={CompanyLogo}
            description='Facebook is big tech company since 2008 and there is 3 more company it manage'
            openJobs='20'
            category='Marketing'
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
