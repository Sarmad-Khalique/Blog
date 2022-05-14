import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/user.provider";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import DrawerComponent from "../Drawer/drawer.component";

const Header = () => {
  const { userLoggedIn, logoutUser } = useContext(UserContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="secondary"
          >
            DevBlog
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <>
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/contact">
                <Button color="inherit">Contact</Button>
              </Link>
              <Button color="inherit">About</Button>

              {userLoggedIn ? (
                <Button
                  onClick={() => logoutUser()}
                  color="secondary"
                  variant="contained"
                  sx={{ marginX: 1 }}
                >
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ marginX: 1 }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
