import React, { useEffect } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4  };

function EditProduct({ editopen, setEditopen, selectedData, product }) {
    const [editData, setEditData] = useState(selectedData)
    useEffect(() => {
    setEditData({...selectedData})
    }, [selectedData])
    
    const handleClose=()=>{ setEditopen(false);}

    let UpdateData=async()=>{
        let res = await axios.put(`https://p-9x7e.onrender.com/products/edit-product/${selectedData._id}`,editData)
        if(res.data.error){ alert('edit nahi jhal na....')}
        else{ alert(res.data.message) }
        handleClose()
        product();      
    }

  return (
    <div>
      <Modal
        open={editopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit your product
          </Typography>
          <TextField sx={{width:'90%'}} label="Product Name" variant="standard" value={editData.pName} onChange={(e)=>{setEditData({...editData, pName: e.target.value})}} 
           />
          <TextField sx={{width:'90%'}} label="Product Desc" variant="standard" value={editData.pDesc} onChange={(e)=>{setEditData({...editData, pDesc: e.target.value})}}/>
          <TextField sx={{width:'90%'}} label="Product Image Url" variant="standard" value={editData.pImg} onChange={(e)=>{setEditData({...editData, pImg: e.target.value})}}/>
          <TextField sx={{width:'90%'}} label="Product price" variant="standard" value={editData.pPrice} onChange={(e)=>{setEditData({...editData, pPrice: e.target.value})}}/>
          <Box sx={{display:"flex", justifyContent:"space-evenly"}} >
          <Button variant="contained" sx={{marginLeft:'15px' ,marginTop:'10px'}} onClick={UpdateData}> Update </Button>
          <Button variant="contained" sx={{marginLeft:'15px' ,marginTop:'10px'}} onClick={handleClose}> Cancel </Button>
          </Box>
        </Box>
        
      </Modal>
    </div>
  )
}

export default EditProduct