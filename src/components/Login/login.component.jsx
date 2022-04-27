import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { LoginConatainer, FormContainer } from "./login.styles";
import { Button } from "@mui/material";
import FormInput from "../Form-input/FormInput"
import SignUp from "../Sign-Up/sign-up.component";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    let {name, value} = e.target;

    setUserCredentials({...userCredentials, [name]:value});

  }

  const onSubmit = (e) => {
    e.preventDefault();
    let {username, password} = userCredentials;
    console.log("Username: ", username, "Password: ", password);
  }

  let {username, password} = userCredentials;
  return (
    <LoginConatainer>
      <Typography variant="h3" color="secondary">
        Login
      </Typography>
      <FormContainer onSubmit={onSubmit}>
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
          onChange={handleChange}
          value={password}
          label="Password"
        />
        <Button type="submit" variant="contained" color="secondary" sx={{width: "100%"}}>Sign in</Button>
        <SignUp modalText="Create Account"/>
      </FormContainer>
    </LoginConatainer>
  );
};

export default Login;
