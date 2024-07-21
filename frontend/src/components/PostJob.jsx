import { Box, Grid, TextField } from "@mui/material";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import Choices from "./Choices";

const PostJob = () => {
  return (
    <div className='lg:px-14 md:px-10 mb-auto mt-10 w-full space-y-6'>
      <h1 className='text-3xl font-[500] font-sans'>Post New Job</h1>
      <div className='space-x-1.5 font-[500] text-gray-500'>
        <span>Job Board</span>
        <span>/</span>
        <span>DashBoard</span>
        <span>/</span>
        <span className='text-indigo-400 cursor-pointer'>Company Profile</span>
      </div>
      <div className='border border-gray-200 rounded-lg pb-5'>
        <p className='text-xl bg-gray-100 font-semibold border-b border-gray-200 py-4 px-8 w-full'>
          Post a Job
        </p>
        <Box component='form' paddingY={4} paddingX={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className='pl-6 pr-10'>
                <TextField label='Job Title' size='small' fullWidth />
              </div>
            </Grid>
            <Grid xs={12} paddingX={5} paddingTop={3}>
              <SimpleMDE />
            </Grid>
            <Grid xs={12} md={6} paddingLeft={5} paddingRight={2}>
              <Choices
                items={[
                  "Marketing",
                  "Accounting & Finance",
                  "Programming & tech",
                ]}
                type='Select Experience'
              />
            </Grid>
            <Grid xs={12} md={6} paddingRight={5} paddingLeft={1}>
              <Choices items={["Female", "Male", "Both"]} type='Gender' />
            </Grid>
            <Grid xs={12} md={6} paddingLeft={5} paddingRight={2} marginTop={2}>
              <Choices
                items={["Full Time", "Remote", "Contract"]}
                type='Job Type'
              />
            </Grid>
            <Grid xs={12} md={6} paddingRight={5} paddingLeft={1} marginTop={2}>
              <TextField label='Salary' fullWidth />
            </Grid>
            <Grid xs={12} md={6} paddingLeft={5} paddingRight={2} marginTop={2}>
              <TextField label='People To Hire' fullWidth />
            </Grid>
            <Grid xs={12} md={6} paddingRight={5} paddingLeft={1} marginTop={2}>
              <TextField label='Application Dead Line' fullWidth />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default PostJob;
