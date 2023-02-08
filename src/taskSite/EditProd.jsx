import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const style={width:400, position:'absolute', top:'50%', left:'50%', p:4,
    transform: 'Translate(-50%,-50%)',
    border:'2px solid #000', borderRadius:'6px',
    bgcolor:'background.paper' , boxShadow:24 }

function EditProd({setAddEdit, addEdit, localData, setLocalData, selectedProd, fetchData }) {
    const [editProd, setEditProd] = useState(localData[selectedProd])
    
    let submit=()=>{ 
        let temp = localData.splice(selectedProd,1,editProd);
        setLocalData(localData)
        setAddEdit(false)
        fetchData();
       }

  return (
    <div>
        <Modal open={addEdit} 
          >
            <Box sx={style}>
                <Typography>Add Product</Typography>
                <TextField sx={{width:'90%', margin:1}} label='product name' variant='outlined' value={editProd.name} onChange={(e)=>{setEditProd({...editProd, name:e.target.value})}} />
                <TextField sx={{width:'90%', margin:1}} label='description' variant='outlined' value={editProd.desc} onChange={(e)=>{setEditProd({...editProd, desc:e.target.value})}} />
                <TextField sx={{width:'90%', margin:1}} label='price' variant='outlined' value={editProd.price} onChange={(e)=>{setEditProd({...editProd, price:e.target.value})}} />
                <Stack direction={'row'} sx={{justifyContent:'space-evenly', margin:2 }}>
                <Button  variant='contained' color='warning'  onClick={()=>setAddEdit(false)}  >Cancel</Button>
                <Button  variant='contained'   onClick={submit} >Update</Button>
                </Stack>
            </Box>
        </Modal>

    </div>
  )
}

export default EditProd