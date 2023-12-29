import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const DrawerComp = () => {
  const pages = ["Home", "Companies", "Jobs", "Employee"];
  const url = ["/", "/Companies", "/Jobs", "/Employee"];
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handlePageClick = (index) => {
    navigate(url[index]);
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => handlePageClick(index)}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color='black' />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
