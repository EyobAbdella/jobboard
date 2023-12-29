import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const url = ["/", "/Companies", "/Jobs", "/Employee"];

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff", color: "#000", boxShadow: "none" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Logo
              </Typography>
              <DrawerComp />
              <button
                onClick={() => navigate("signup")}
                className=' bg-green-500 p-1.5 text-white font-semibold rounded hover:border border-green-500 duration-500 drop-shadow-2xl hover:bg-white'>
                Join Now <ArrowForwardOutlinedIcon />
              </button>
            </>
          ) : (
            <>
              <h1 className='text-2xl'>Logo</h1>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor='secondary'
                textColor='inherit'
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                  navigate(url[value]);
                }}>
                <Tab label='Home' />
                <Tab label='Companies' />
                <Tab label='Jobs' />
                <Tab label='Employee' />
              </Tabs>
              <button
                onClick={() => navigate("signup")}
                className='ml-auto bg-green-500 px-4 py-2.5 rounded hover:border border-green-500 duration-500 drop-shadow-2xl hover:bg-white'>
                Join Now <ArrowForwardOutlinedIcon />
              </button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
