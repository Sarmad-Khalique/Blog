import React , { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormContainer } from "./sign-up.styles";
import FormInput from "../Form-input/FormInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const SignUp = ({ modalText }) => {
  const [open, setOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
      username: "",
      password: "",
      confirmPassword: ""
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
      let {name, value} = e.target;

      setUserCredentials({
          ...userCredentials,
          [name]: value
      })
  }

  let {username, password, confirmPassword} = userCredentials;
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ width: "100%", marginY: 1 }}
        onClick={handleOpen}
      >
        {modalText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h3"
            color="secondary"
          >
            Create Account
          </Typography>
          <FormContainer>
            <FormInput
              type="username"
              name="username"
              onChange={handleChange}
              value={username}
              label="Username"
            />
            <FormInput
              type="password"
              name="password"
              onChange={() => {}}
              value={password}
              label="Password"
            />
            <FormInput
              type="password"
              name="password"
              onChange={()=>{}}
              value={confirmPassword}
              label="Confirm Password"
            />
            <Button variant="contained" color="secondary" sx={{width:"100%"}}>Sign Up</Button>
          </FormContainer>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default SignUp;
