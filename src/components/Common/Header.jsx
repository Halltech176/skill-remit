import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { FaHome } from "react-icons/fa";
import { RiNodeTree } from "react-icons/ri";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
// import MuiAppBar, { AppBarProps  as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
// import { useLocaation } from "react-router";
const Header = () => {
  const [side, setSide] = useState("left");
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "FAQ'S",
      route: "/faqs",
    },
  ];
  const links_1 = ["/", "/about"];
  const renderLinks = routes.map((data, index) => {
    console.log(data.route);
    return (
      <li
        className={` ${
          data.route === path ? "active_route" : ""
        } my-5 mx-6 font-dm  font-medium`}
      >
        <Link to={data.route}>{data.name}</Link>
      </li>
    );
  });
  // const links_2 = ['/',/]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerWidth = 240;
  return (
    <>
      <Box className="flex md:hidden">
        <CssBaseline />
        <AppBar position="fixed" elevation={0} open={open}>
          <Toolbar className="bg-primary">
            <Box noWrap sx={{ flexGrow: 1 }} component="div">
              <Logo />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          // variant="persistent"
          anchor="right"
          open={open}
        >
          {/* <DrawerHeader> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          {/* </DrawerHeader> */}
          <Divider />
          <List className="text-normal font-black text-md">
            {["Home", "About"].map((text, index) => (
              <Link
                to={links_1[index]}
                key={text}
                onClick={handleDrawerClose}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <FaHome size="1.5rem" />
                    ) : (
                      <RiNodeTree size="1.5rem" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
          <Divider />
          <List className="text-normal font-black text-md">
            {["FAQ'S"].map((text, index) => (
              <Link
                to="/faqs"
                key={text}
                onClick={handleDrawerClose}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>{<MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
          <button className="bg-primary m-3 px-3 py-2 rounded-md text-white text-md font-bold">
            Download App
          </button>
        </Drawer>
      </Box>
      <header className="header text-white bg-primary hidden items-center p-2 px-4 md:px-32 md:flex justify-between">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center">
            {renderLinks}

            <button className="bg-white m-3 px-3 py-2 rounded-md text-normal text-md font-bold">
              Download App
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
