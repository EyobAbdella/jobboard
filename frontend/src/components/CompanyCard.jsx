import { MdStarRate } from "react-icons/md";
import CompanyLogo from "../assets/company-logo.png";
import { useState } from "react";
import { Avatar, Rating } from "@mui/material";
const CompanyCard = (props) => {
  const [value, setValue] = useState(3);
  return (
    <div className='bg-white border cursor-pointer border-gray-200 rounded-lg overflow-hidden'>
      <div className='p-4 hover:p-3 duration-500'>
        <div className='flex items-center'>
          <img
            className='w-20 h-20 object-cover rounded-full mr-4'
            src={props.logo}
          />

          <div>
            <h2 className='text-xl font-medium'>{props.name}</h2>
            <p className='text-gray-600 text-sm'>{props.location}</p>
          </div>
        </div>

        <p className='mt-2 text-gray-700'>{props.description}</p>

        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center'>
            <Rating
              name='simple-controlled'
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <p className='ml-2 text-gray-700 text-sm'>5 reviews</p>
          </div>

          <div className='bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded'>
            {props.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
