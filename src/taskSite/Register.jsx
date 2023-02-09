import {  Button, Container, Paper, Stack,  TextField,  Typography,} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./Validation";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ fname: "", lname: "", email: "", password: "", role: ""  });

  const [valName, setValName ] = useState({error: false, message:'',  isDisabled : true});
  const [valEmail, setValEmail] = useState({error: false,  message:'', isDisabled:true  });
  const [valPassword, setValPassword ] = useState({error: false,  message:'', isDisabled: true })
  
 
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

          <TextField variant="outlined" label="first name" margin="dense" fullWidth onChange={(e) => { setUser({ ...user, fname: e.target.value }); }}
            error={valName.error} helperText={valName.message} onKeyUp={(v)=>{setValName(validation("name", v.target.value))}} />

          <TextField  variant="outlined"  label="last name"  margin="dense"  onChange={(e) => {  setUser({ ...user, lname: e.target.value });  }}
            error={valName.error} helperText={valName.message} onKeyUp={(v)=>{setValName(validation("name", v.target.value))}}  fullWidth  />

          <TextField  variant="outlined"   label="email"  margin="dense"  onChange={(e) => {  setUser({ ...user, email: e.target.value });  }}  fullWidth  
            error={valEmail.error} helperText={valEmail.message} onKeyUp={(v)=>{setValEmail(validation("email",v.target.value))}} />
         
          <TextField  variant="outlined" label="password" margin="dense" onChange={(e) => {  setUser({ ...user, password: e.target.value }); }} fullWidth 
            error={valPassword.error} helperText={valPassword.message} onKeyUp={(v)=>{setValPassword( validation("password", v.target.value ))}} />

          <TextField variant="outlined" label="role"  margin="dense" onChange={(e) => { setUser({ ...user, role: e.target.value }); }} fullWidth />

          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select onChange={handleChange} label="age ">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}

          <Stack direction={"row"} sx={{ justifyContent: "space-evenly", mt: 2 }} >
            <Button variant="contained" onClick={cancelReg}> cancel </Button>
            <Button variant="contained" onClick={register}
             disabled={valEmail.isDisabled || valName.isDisabled || valPassword.isDisabled }> Register </Button>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

export default Register;
