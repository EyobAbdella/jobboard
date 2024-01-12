import {
  AppBar,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MultipleSelect from "./MultipleSelect";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const FilterEmployee = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full md:w-72 px-4 md:px-8 gap-8 flex flex-col justify-center text-black'>
      <div className='flex items-center min-w-full sm:w-96 sm:min-w-fit gap-x-4'>
        <div className=''>
          <TextField
            id='outlined-basic'
            label='Search Employee'
            variant='outlined'
            sx={{ width: "100%" }}
          />
        </div>
        <button
          onClick={() => setOpen(true)}
          className='lg:hidden rounded bg-indigo-500 text-white w-28 py-4 hover:bg-indigo-600'>
          Filter Jobs
        </button>
      </div>
      <div className='hidden lg:block space-y-4'>
        <MultipleSelect width={225} title='Location' />
        <MultipleSelect width={225} title='Category' />
        <div className='space-y-3 text-lg'>
          <p>Skill</p>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='flex items-center gap-3'>
              <input type='checkbox' className='h-[18px] w-[18px]' />
              <p className='text-gray-600 text-sm'>Full Time</p>
            </div>
          ))}
        </div>
        <div className='space-y-3 text-lg'>
          <p>Experience</p>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='flex items-center gap-3'>
              <input type='checkbox' className='h-[18px] w-[18px]' />
              <p className='text-gray-600 text-sm'>1year to 2year</p>
            </div>
          ))}
        </div>
      </div>
      <button className='hidden lg:block bg-indigo-500 duration-500 text-white py-3 px-6 rounded-md hover:text-indigo-400 hover:bg-white hover:border border-indigo-400'>
        Reset
      </button>
      <Dialog
        fullWidth
        maxWidth='sm'
        open={open}
        onClose={() => setOpen(false)}>
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#fff",
            boxShadow: "none",
          }}>
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1, fontSize: 26, color: "#000" }}
              variant='h6'
              component='div'>
              Filters
            </Typography>
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => setOpen(false)}
              aria-label='close'>
              <CloseIcon sx={{ color: "#000" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <div className='gap-y-5 flex flex-col items-start'>
            <MultipleSelect width={350} title='Location' />
            <MultipleSelect width={350} title='Category' />
            <div className='space-y-3 text-lg'>
              <p>Skill</p>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <input type='checkbox' className='h-[18px] w-[18px]' />
                  <p className='text-gray-600 text-sm'>Full Time</p>
                </div>
              ))}
            </div>
            <div className='space-y-3 text-lg'>
              <p>Experience</p>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <input type='checkbox' className='h-[18px] w-[18px]' />
                  <p className='text-gray-600 text-sm'>1year to 2year</p>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button className='mr-6 text-indigo-700 hover:text-indigo-800'>
            Reset
          </button>
          <button className='rounded-full bg-indigo-500 text-white px-8 py-1.5 mr-5 mb-2 hover:bg-indigo-600'>
            Apply
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterEmployee;
