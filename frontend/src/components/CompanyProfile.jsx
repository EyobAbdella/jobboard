import { Box, Grid, TextField } from "@mui/material";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import Choices from "./Choices";

const CompanyProfile = () => {
  const industry = [
    "Industry",
    "Marketing",
    "Programming & Tech",
    "Agriculture",
  ];
  const size = ["size", "1-10", "11-20", "21-40"];
  return (
    <div className='lg:px-16 md:px-10 mb-auto mt-10 w-full space-y-6 overflow-y-scroll h-full'>
      <h1 className='text-3xl font-[500]'>Company Profile</h1>
      <div className='space-x-1.5 font-[500] text-gray-500'>
        <span>Job Board</span>
        <span>/</span>
        <span>DashBoard</span>
        <span>/</span>
        <span className='text-indigo-400 cursor-pointer'>Company Profile</span>
      </div>
      <div className='border border-gray-200 rounded-xl pb-5 w-full'>
        <p className='text-xl font-[500] px-5 bg-gray-100 border-b border-gray-200 py-5'>
          Profile
        </p>

        <Box component='form' py={5} px={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <label
                htmlFor='company-logo'
                className='flex justify-between w-full items-center '>
                <p className='pl-2 border-y border-l w-full border-gray-200 rounded-l-lg py-3.5'>
                  Choose Image
                </p>
                <span className='border-y border-x border-gray-200 rounded-r-lg pr-2 pl-5 bg-gray-200 py-3.5 '>
                  Browser
                </span>
              </label>
              <input id='company-logo' className='hidden' type='file' />
              <p className='text-xs mt-0.5 pl-0.5'>
                Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                files are .jpg & .png
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label='Company Name' fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label='Phone' fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <Choices
                items={["Marketing", "Programming & Tech", "Agriculture"]}
                type='Industry'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label='Location' fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <Choices items={["1-10", "11-30", "31-50"]} type='Team size' />
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className='border border-gray-200 rounded-lg p-8'>
        <p className='mb-6 text-xl font-[500] text-gray-900'>
          About The Company
        </p>
        <SimpleMDE />
        <button className='px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white'>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
