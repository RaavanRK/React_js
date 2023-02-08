
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const style={width:400, position:'absolute', top:'50%', left:'50%', p:4,
    transform: 'Translate(-50%,-50%)',
    border:'2px solid #000', borderRadius:'6px',
    bgcolor:'background.paper' , boxShadow:24 }

function AddProd({addOpen, setAddOpen, localData, setLocalData, fetchData}) {
    const [newProd, setNewProd] = useState({ name:'', desc:'', price:''})
    
    let addProduct=()=>{
        let temp =localData
        temp.push(newProd);
        setLocalData(temp);
        setAddOpen(false);
        fetchData();
             }

  return (
    <div>   
        <Modal open={addOpen} 
          >
            <Box sx={style}>
                <Typography>Add Product</Typography>
                <TextField sx={{width:'90%', margin:1}} label='product name' variant='outlined' onChange={(e)=>{setNewProd({...newProd, name:e.target.value})}}/>
                <TextField sx={{width:'90%', margin:1}} label='description' variant='outlined' onChange={(e)=>{setNewProd({...newProd, desc:e.target.value})}}/>
                <TextField sx={{width:'90%', margin:1}} label='price' variant='outlined' onChange={(e)=>{setNewProd({...newProd, price:e.target.value})}}/>
                <Stack direction={'row'} sx={{justifyContent:'space-evenly', margin:2 }}>
                <Button  variant='contained' onClick={()=>   setAddOpen(false)}>Cancel</Button>
                <Button  variant='contained' onClick={addProduct}>Add</Button>
                </Stack>
            </Box>
        </Modal>
    </div>
  )
}

export default AddProd