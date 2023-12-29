import {
  DialogActions,
  Button,
  DialogTitle,
  Dialog,
  TextField,
  DialogContentText,
  DialogContent,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MultipleSelect from "./MultipleSelect";
import CloseIcon from "@mui/icons-material/Close";

const FilterJobs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full md:w-72 px-4 md:px-8 gap-8 flex flex-col justify-center text-black'>
      <div className='flex items-center min-w-full sm:w-96 sm:min-w-fit gap-x-4'>
        <div className=''>
          <TextField
            id='outlined-basic'
            label='Search Keywords'
            variant='outlined'
            // size='small'
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
        <MultipleSelect width={230} title='Location' />
        <MultipleSelect width={230} title='Category' />
        <MultipleSelect width={230} title='Job Type' />
        <MultipleSelect width={230} title='Specialism' />
        <MultipleSelect width={230} title='Experience' />
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
          <div className='gap-y-5 flex flex-col items-center'>
            <MultipleSelect width={300} title='Location' />
            <MultipleSelect width={300} title='Category' />
            <MultipleSelect width={300} title='Job Type' />
            <MultipleSelect width={300} title='Specialism' />
            <MultipleSelect width={300} title='Experience' />
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

export default FilterJobs;
