import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropDown = ({ items }) => {
  return (
    <div className='relative w-full'>
      <div className='absolute top-3 right-2'>
        <ArrowDropDownIcon />
      </div>
      <select
        className='w-full py-2.5 bg-white border border-gray-300 rounded-lg px-3 hover:ring-1 ring-indigo-300 outline-none appearance-none'
        name=''
        id=''>
        {items.map((item, index) => (
          <option className='text-lg' value='' key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
