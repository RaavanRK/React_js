import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from 'react';
import AddProd from './AddProd';
import EditProd from './EditProd';

function Home() {
  const tabData=[{
    name:'blah', desc:'blah blah blah', price:'123' },
    {name:'blah', desc:'blah blah blah', price:'123'},
    {name:'blah', desc:'blah blah blah', price:'123'}  ]
  
  const [localData,setLocalData]=useState(tabData)
  const [addOpen, setAddOpen]  = useState(false)

  const [addEdit, setAddEdit] = useState(false)
  const [selectedProd, setSelectedProd] = useState()
  let edit=(index)=>{
    setAddEdit(true);
    setSelectedProd(index);    }
   
  useEffect(() => {fetchData()}, [])
  
  let fetchData=()=>{
   let  logCred=localStorage.getItem('logCred')
    if(logCred==null){
      let temp=localData
      localStorage.setItem('localData',JSON.stringify(temp));
    }else{
      let temp=JSON.parse(localStorage.getItem('localData'));
      setLocalData(temp);   }  
  }

  let delProd=(index)=>{
    setLocalData(localData.splice(index,1))
    console.log(localData)
    fetchData();
  }
   
  return (
    <>  <Box  width={'80%'} ml={'10%'} mt={4}>
          <Box sx={{display:'flex' ,justifyContent:'end'}}><Button variant='contained' onClick={()=>{setAddOpen(true)}} >Add Product</Button> </Box>
        <Table >
          <TableHead >  
            <TableRow>  
              <TableCell sx={{fontSize:'40px'}}>Name</TableCell>
              <TableCell sx={{fontSize:'40px'}}>Description</TableCell>
              <TableCell sx={{fontSize:'40px'}}>Price</TableCell>
              <TableCell sx={{fontSize:'40px'}}>Operation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>           
              { localData.map((elem, index)=>{
                return(
                  <TableRow key={index}>
                    <TableCell> {elem.name} </TableCell>
                    <TableCell> {elem.desc} </TableCell>
                    <TableCell> {elem.price} </TableCell>
                    <TableCell >
                      <Button variant='outlined' color='error' startIcon={<EditIcon/>} onClick={()=>edit(index)}>Edit</Button>
                      <Button variant='outlined' color='success' startIcon={<DeleteIcon/>} onClick={()=>delProd(index)}>Delete</Button>
                    </TableCell> 
                  </TableRow> ) 
              })}
            
          </TableBody>
        </Table>
        </Box>

        {addOpen && (<AddProd addOpen={addOpen} setAddOpen={setAddOpen} localData={localData} setLocalData={setLocalData} fetchData={fetchData} />)}

        {addEdit && ( <EditProd addEdit={addEdit} setAddEdit={setAddEdit} 
                                localData={localData} setLocalData={setLocalData} 
                                selectedProd={selectedProd} fetchData={fetchData} />)}
    </>
  )
}

export default Home