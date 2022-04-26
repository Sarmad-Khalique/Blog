import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">About</Button>

          <Link to="/login">
            <Button color="secondary" variant="contained" sx={{ marginX: 1 }}>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
