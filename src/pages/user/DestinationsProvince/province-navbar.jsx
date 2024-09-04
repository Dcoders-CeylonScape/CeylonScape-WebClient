import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = [
  { label: "Western", path: "provinces/western" },
  { label: "Southern", path: "provinces/southern" },
  { label: "Eastern", path: "provinces/eastern" },
  { label: "North", path: "provinces/northen" },
  { label: "Sabaragamuwa", path: "provinces/sabaragamuwa" },
  { label: "North Central", path: "provinces/northcentral" },
  { label: "North Western", path: "provinces/northwestern" },
  { label: "Uva", path: "provinces/uva" },
  { label: "Central", path: "provinces/central" },
];

function ProvinceNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(navItems[0].label);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item.label);
    navigate(`/${item.path}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center", height: "10vh" }}>
              <ListItemText
                primary={item.label}
                sx={{
                  color: selectedItem === item.label ? "#3494da" : "black",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textDecoration:
                    selectedItem === item.label ? "underline" : "none",
                  textUnderlineOffset: "8px",
                  textDecorationColor:
                    selectedItem === item.label ? "3px solid #3494da" : "none",
                }}
                onClick={() => handleItemClick(item)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="relative"
        component="nav"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 2 }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              gap: "16px",
            }}
          >
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <Button
                  sx={{
                    color: "black",
                    fontFamily: "Inter",
                    fontSize: {
                      xs: "8px",
                      sm: "12px",
                      md: "16px",
                    },
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    borderBottom:
                      selectedItem === item.label
                        ? "2px solid #3494da"
                        : "none",
                    borderRadius: 0,
                    textTransform: "none",
                  }}
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </Button>
                {index < navItems.length - 1 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderRightWidth: 1,
                      borderColor: "grey",
                      borderRightStyle: "solid",
                      height: "30px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default ProvinceNavbar;
