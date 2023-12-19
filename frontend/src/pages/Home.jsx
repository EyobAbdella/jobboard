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
} from "@mui/material";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import MultipleSelect from "../components/MultipleSelect";
import { useTheme } from "@mui/material/styles";
const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className='bg-[#f4f5fa] px-6 h-full space-y-8'>
      <h1 className='text-4xl'>The Easiest Way to Get Your New Job</h1>
      <p className='text-gray-400 text-sm'>
        Find jobs, Employment & Career Opportunities
      </p>
      <img src={Job} className='h-[500px]' alt='' />
      <Stack spacing={2} direction={isSmallScreen ? "column" : "row"}>
        <TextField
          id='outlined-basic'
          label='Job title, keyword or company name'
          variant='outlined'
          sx={{ height: 45, width: 300 }}
        />
        <MultipleSelect />
        <Button sx={{ height: 45, py: 3.3 }} variant='outlined'>
          Search
        </Button>
      </Stack>

      <h1 className='text-4xl text-center'>Popular Categories</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Category
            icon={
              <ArchitectureOutlinedIcon
                style={{ fontSize: 120, color: "#8549ff" }}
              />
            }
            title={"Design, Art and Multimedia"}
            openPosition={20}
          />
        </Box>
      </div>
    </div>
  );
};

export default Home;
