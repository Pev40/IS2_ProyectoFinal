import "./styles.css";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout as LogoutIcon, Menu as MenuIcon } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { publicRoutes, privateRoutes } from "routes/routes";
import AuthContext from "contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, token, logOut } = useContext(AuthContext);
  const [routes, setRoutes] = useState(publicRoutes);

  useEffect(() => {
    if (user && token) setRoutes(privateRoutes);
    else setRoutes(publicRoutes);
  }, [user, token]);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Sistema de Pagos
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="logout of current user"
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
              }}
            >
              {routes.map(({ path, title }) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Link className="Navbar__link" to={path} />
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Sistema de Pagos
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map(({ path, title }) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="Navbar__link" to={path} />
                {title}
              </Button>
            ))}
          </Box>
          {user && token && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Cerrar Sesión">
                <IconButton onClick={logout}>
                  <LogoutIcon style={{ color: "#fff" }} />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
