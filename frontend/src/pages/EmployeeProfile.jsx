import React from "react";
import { Avatar, Rating } from "@mui/material";
import Profile from "../assets/profile.png";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const EmployeeProfile = () => {
  return (
    <div className='px-24 py-2 font-sans'>
      <div className='flex items-center gap-x-8 border border-gray-300 rounded-lg p-8'>
        <div className='rounded border border-gray-300'>
          <Avatar src={Profile} sx={{ width: 100, height: 100 }} />
        </div>

        <div className='space-y-3'>
          <div className='flex items-center space-x-2'>
            <Rating />
            <p className='bg-green-500 rounded-lg text-white px-2 py-0.5 text-xs'>
              5.0
            </p>
          </div>
          <h1 className='text-2xl font-semibold'>Abel Brihanu</h1>
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

        <div className='ml-auto space-y-4 flex flex-col'>
          <button className='w-60 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md px-5 py-2.5'>
            <SendOutlinedIcon sx={{ mr: 1.5 }} /> Apply For Job
          </button>
          <button className='w-60 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md px-5 py-2.5'>
            <DownloadIcon sx={{ mr: 1.5 }} /> Download CV
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
            <h1 className='text-2xl font-semibold my-2'>About: </h1>
            <p className='text-indigo-950'>
              We're seeking out a person with the innovative spark, eye for
              example and layout, ardour for images and cappotential to supply
              excessive first-rate layout collaterals end-to-end. Draft mockups
              of internet site designs, brochures, iconography, and every other
              advertising and marketing substances required. Collaborate with
              advertising and marketing groups and control to speak about which
              mockups are effective, and use their remarks to expand very last
              drafts. Revise the paintings of preceding designers to create a
            </p>
          </div>
          <div className='border border-gray-300 rounded-md px-8 py-4 w-full space-y-4'>
            <h1 className='text-2xl font-semibold my-2'>Education: </h1>
            <p className='text-indigo-950'>
              We're seeking out a person with the innovative spark, eye for
              example and layout, ardour for images and cappotential to supply
              excessive first-rate layout collaterals end-to-end. Draft mockups
              of internet site designs, brochures, iconography, and every other
              advertising and marketing substances required. Collaborate with
              advertising and marketing groups and control to speak about which
              mockups are effective, and use their remarks to expand very last
              drafts. Revise the paintings of preceding designers to create a
            </p>
          </div>
          <div className='border border-gray-300 rounded-md px-8 py-4 w-full space-y-4'>
            <h1 className='text-2xl font-semibold my-2'>Work & Experience: </h1>
            <p className='text-indigo-950'>
              We're seeking out a person with the innovative spark, eye for
              example and layout, ardour for images and cappotential to supply
              excessive first-rate layout collaterals end-to-end. Draft mockups
              of internet site designs, brochures, iconography, and every other
              advertising and marketing substances required. Collaborate with
              advertising and marketing groups and control to speak about which
              mockups are effective, and use their remarks to expand very last
              drafts. Revise the paintings of preceding designers to create a
            </p>
          </div>
          <div className='border border-gray-300 rounded-md px-8 py-4 w-full space-y-4'>
            <h1 className='text-2xl font-semibold my-2'>Skills: </h1>
          </div>
          <div className='border border-gray-300 rounded-md px-8 py-4 w-full space-y-4'>
            <h1 className='text-2xl font-semibold my-2'>Add Review </h1>

            <select
              className='w-full py-3 bg-white border border-gray-300 rounded-lg px-4 hover:ring-2 ring-indigo-300 outline-none'
              name=''
              id=''>
              <option className='text-lg before:ml-8' value=''>
                Rating
              </option>
              <option className='text-lg' value=''>
                5 stars
              </option>
              <option className='text-lg' value=''>
                4 stars
              </option>
              <option className='text-lg' value=''>
                3 stars
              </option>
              <option className='text-lg' value=''>
                2 stars
              </option>
              <option className='text-lg' value=''>
                1 stars
              </option>
            </select>

            <textarea
              className='outline-none rounded-lg h-24 hover:ring-2 hover:ring-indigo-300 ring-1 ring-gray-200 w-full px-3 py-2 placeholder:text-gray-400'
              placeholder='Tell us a few words'
              cols='30'
              rows='10'
            />

            <button className='bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg'>
              Send Message
            </button>
          </div>

          <div className='border border-gray-300 rounded-md px-8 pt-4 pb-6 w-full space-y-4'>
            <h1 className='text-2xl font-semibold my-2'>Leave Review: </h1>
            <div className='pb-8 border-b border-gray-300'>
              <div className='flex items-center gap-x-4'>
                <Avatar src={Profile} sx={{ width: 85, height: 85 }} />
                <div className='font-mono'>
                  <h1 className='text-indigo-950 font-semibold text-[1.15rem]'>
                    John Smith
                  </h1>
                  <p>Nov 11, 2022</p>
                </div>
                <Rating size='small' value={5} sx={{ ml: "auto" }} />
              </div>
              <p className='font-sans text-indigo-950 py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                officia excepturi eum modi id nisi similique ut suscipit eos
                beatae.
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-8'>
          <div className='space-y-6 ml-auto w-[350px] px-5 pt-4 pb-10 border border-gray-300 rounded-md'>
            <h1 className='text-2xl font-semibold pb-3 border-b border-gray-300'>
              Job Summary
            </h1>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
                Experience <span>:</span>
              </p>
              <p className='break-words w-36 text-gray-600 font-serif'>
                2 years
              </p>
            </div>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
                Education <span>:</span>
              </p>
              <p className='text-gray-600 font-serif'>Degree</p>
            </div>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36  flex justify-between'>
                Age <span>:</span>
              </p>
              <p className='text-gray-600 font-serif'>28</p>
            </div>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
                Language <span>:</span>
              </p>
              <p className='text-gray-600 font-serif'>Amharic</p>
            </div>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
                Location <span>:</span>
              </p>
              <p className='text-gray-600 font-serif'>Addis Ababa</p>
            </div>
          </div>

          <div className='space-y-6 ml-auto w-[350px] px-5 pt-4 pb-10 border border-gray-300 rounded-md'>
            <h1 className='text-2xl font-semibold pb-3 border-b border-gray-300'>
              Contact Information
            </h1>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
                Phone <span>:</span>
              </p>
              <p className='break-words w-36 text-gray-600 font-serif'>+251</p>
            </div>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
                Email <span>:</span>
              </p>
              <p className='text-gray-600 font-serif'>info@gmail.com</p>
            </div>
            <div className=' text-lg flex items-center gap-x-4 border-b border-gray-300 pb-3.5 '>
              <p className='text-indigo-950 font-[500] w-36 flex justify-between'>
                Address <span>:</span>
              </p>
              <p className='text-gray-600 font-serif'>Addis Ketema</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
