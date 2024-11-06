import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const pages = ["Products", "Solutions", "Resources", "Pricing"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#043873" }}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 2 }}>
            <img src={Logo} alt="Logo" style={{ height: "20px" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={Logo} alt="Logo" style={{ height: "20px" }} />
          </Box>

          <Box sx={{ display: { xs: "none", md: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                endIcon={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}
                sx={{
                  my: 2,
                  color: "white",
                  marginRight: "5%",
                  fontSize: "14px",
                  fontWeight: "light",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              sx={{
                fontWeight: 700,
                fontWeight: 400,
                fontSize: "12px",
                textTransform: "none",
                backgroundColor: "#FFE492",
                color: "black",
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="info"
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                textTransform: "none",
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              Try Whitepace free
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button sx={{ textTransform: "none" }}>{page}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
