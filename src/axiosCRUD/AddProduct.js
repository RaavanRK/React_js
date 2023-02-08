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
  p: 4,
};

function AddProduct({ open, setAddopen, product }) {
  const handleClose = () => setAddopen(false);
  const [addData, setAddData] = useState({ pName:'', pPrice:'', pDesc:'',pImg:''}) // setting the initial values

  let addformData=async ()=>{ 
    let result= await axios.post('https://p-9x7e.onrender.com/products/add-product',addData) //inserting products
    if(result.data.error){ alert('kuchh to galat hua hai...')}
    else{alert(result.data.message)}
    handleClose();
    product();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add your product
          </Typography>
          <TextField sx={{width:'90%'}} label="Product Name" variant="standard" onChange={(e)=>{setAddData({...addData, pName:e.target.value})}}/>
          <TextField sx={{width:'90%'}} label="Product Desc" variant="standard" onChange={(e)=>{setAddData({...addData, pDesc:e.target.value})}}/>
          <TextField sx={{width:'90%'}} label="Product Image Url" variant="standard" onChange={(e)=>{setAddData({...addData, pImg:e.target.value})}}/>
          <TextField sx={{width:'90%'}} label="Product price" variant="standard" onChange={(e)=>{setAddData({...addData, pPrice:e.target.value})}}/>
          <Button variant="contained" sx={{marginLeft:'15px' ,marginTop:'10px'}} onClick={addformData}> Add </Button>
          <Button variant="contained" sx={{marginLeft:'15px' ,marginTop:'10px'}} onClick={handleClose}> Cancel </Button>
        </Box>
        
      </Modal>
    </div>
  );
}

export default AddProduct;
