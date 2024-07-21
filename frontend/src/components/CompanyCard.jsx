import React, { useState } from "react";
import { Rating } from "@mui/material";

const CompanyCard = ({ logo, name, location, description, category }) => {
  const [value, setValue] = useState(3);

  return (
    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition hover:-translate-y-3 duration-300'>
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <img
            className='w-20 h-20 object-cover rounded-full mr-4'
            src={logo}
            alt={`${name} logo`}
          />

          <div>
            <h2 className='text-2xl font-semibold text-gray-800'>{name}</h2>
            <p className='text-gray-600 text-sm'>{location}</p>
          </div>
        </div>

        <p className='text-gray-700'>{description}</p>

        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center'>
            <Rating
              name='simple-controlled'
              value={value}
              onChange={(_, newValue) => setValue(newValue)}
            />
            <p className='ml-2 text-gray-700 text-sm'>(5 reviews)</p>
          </div>

          <div className='bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded'>
            {category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
