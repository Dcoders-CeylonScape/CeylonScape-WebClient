import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

import Logo2 from "../assets/images/logo2.png";
import User from "../assets/images/user.jpg";

const pages = ["Home", "Destinations", "Experience", "Trip Planner"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignupClick = () => {
    navigate("auth/sign-up");
  };

  const handleSigninClick = () => {
    navigate("auth/sign-in");
  };

  const handleApplyVisaClick = () => {
    navigate("visa-application");
  };

  return (
    <AppBar position="absolute" className={"!bg-white !bg-opacity-30 mt-5"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo2} className={"w-10 pt-2 mr-1"} alt="" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className={"!text-primary_pri70 !font-poppins !font-semibold"}
          >
            Ceylonscapes
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenuItem-root": {
                  textAlign: "center",
                  color: "black",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
                className={"!font-poppins !font-medium"}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              className={"!mr-4 !bg-white !rounded-full"}
            >
              <h1
                className={
                  "font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#1180B8] via-[#1EA0D9, #37B3E8, ##1EA0D9] to-[#37B3E8] opacity-80"
                }
              >
                Ceylon Ai
              </h1>
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              onClick={handleApplyVisaClick}
              className={
                "!mr-4 !bg-white !rounded-full !text-black !font-poppins !font-medium"
              }
            >
              Apply Visa
            </Button>
            {/* <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              onClick={handleSignupClick}
              className={
                "!mr-4 !bg-white !rounded-full !text-black !font-poppins !font-medium"
              }
            >
              Signup
            </Button> */}

            {/* <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              onClick={handleSigninClick}
              className={
                "!mr-4 !bg-white !rounded-full !text-black !font-poppins !font-medium"
              }
            >
              Sign In
            </Button> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img
                  src={User}
                  className={"w-[40px] h-[40px] rounded-full"}
                  alt=""
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
