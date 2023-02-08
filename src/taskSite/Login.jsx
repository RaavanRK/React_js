import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

function Login() {
    const navigate = useNavigate()
    const [logCred, setLogCred] = useState({email:'',password:''})

    useEffect(() => {fetchLogin()}, [])
    
    const fetchLogin= async()=>{
        try{
            let res= await axios.post("https://products-jwt.onrender.com/users/login",logCred) ;
            localStorage.setItem("logcred",JSON.stringify(res));
            console.log(res)
            if(localStorage.getItem("logcred")){
                // route to home page
                navigate('/Home')
            } else {alert(res.data.error)} }
        catch(e){}
    }

  return (
    <div>
        <Container align='center'>
            <Paper elevation={10} style={{width:'30%' , justifyContent :'center', padding: '30px 20px', margin:'50px'}}>
                <Typography variant='h6'> Login Page</Typography>
                <TextField fullWidth label='username' variant='outlined' margin='dense' onChange={(e)=>{setLogCred({...logCred, email:e.target.value})}}></TextField>
                <TextField fullWidth label='password' variant='outlined' margin='dense' onChange={(event)=>{ setLogCred({ ...logCred, password:event.target.value} )}} ></TextField>
                <Button variant='contained' onClick={()=>{fetchLogin()}} sx={{marginTop:'10px'}}>Login</Button> 
                <Typography> Not a user ? <Link href="/Register" underline="hover"> {'Register'} </Link></Typography>        
            </Paper>
        </Container>
    </div>
  )
}

export default Login