import {  Button, Container, Paper, Stack,  TextField,  Typography,} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ fname: "", lname: "", email: "", password: "", role: ""  });
 
  let cancelReg = () => {
    navigate("/");
    console.log(user); };

  let register = async () => {
      let res = await axios.post( "https://products-jwt.onrender.com/users/register",  user );
      navigate("/");   }

  return (
    <div>
      <Container align="center">
        <Paper elevation={8} style={{ width: "35%", padding: "30px 20px", justifyContent: "center", margin: "50px" }} >
          <Typography variant="h6" mb={2} fontWeight="bolder"> Registration Page </Typography>
          <TextField variant="outlined" label="first name" margin="dense" fullWidth onChange={(e) => { setUser({ ...user, fname: e.target.value }); }} />
          <TextField  variant="outlined"  label="last name"  margin="dense"  onChange={(e) => {  setUser({ ...user, lname: e.target.value });  }}  fullWidth  />
          <TextField  variant="outlined"  label="email"  margin="dense"  onChange={(e) => {  setUser({ ...user, email: e.target.value });  }}  fullWidth  />
          <TextField  variant="outlined" label="password" margin="dense" onChange={(e) => {  setUser({ ...user, password: e.target.value }); }} fullWidth  />
          <TextField variant="outlined" label="role"  margin="dense" onChange={(e) => { setUser({ ...user, role: e.target.value }); }} fullWidth />
          <Stack direction={"row"} sx={{ justifyContent: "space-evenly", mt: 2 }} >
            <Button variant="contained" onClick={cancelReg}> cancel </Button>
            <Button variant="contained" onClick={register}> Register </Button>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

export default Register;
