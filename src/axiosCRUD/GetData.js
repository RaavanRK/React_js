import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function GetData() {
  const [data, setData] = useState([]); //to fetch and store API information in data variable
  const [addopen, setAddopen] = useState(false); //to open addProduct Modal in AddProduct.js page
  const [editopen, setEditopen] = useState(false) //to open editProduct Modal in EditProduct.js page
  const [selectedData, setSelectedData] = useState({})

  useEffect(() => { product() }, []); //call product() function only once so not to render api again & again

  const product = async () => {
    let response = await axios.get(
      "https://p-9x7e.onrender.com/products/products"  );
    if (response.data.error) {
      alert("error aala re");  } 
    else {  setData(response.data.data);  }
  };

  let openModal = () => {
    setAddopen(true); };

  let deleteData = async (id) => {
    let del = await axios.delete(
      `https://p-9x7e.onrender.com/products/delete-product/${id}`
    );
    if (del.data.error) {
      alert("chukichi id ahe bhava..");  } 
    else {
      alert(del.data.message);  }
    product();
  };

  let openEdit=(data2)=>{
    setEditopen(true);
    setSelectedData(data2) 
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Id</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Product Price</TableCell>
            <TableCell>Product Description</TableCell>
            <TableCell>Product Image</TableCell>
            <TableCell>
              <Button variant="contained" onClick={openModal}>
                Add Product
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element) => {
            return (
              <TableRow key={element._id}>
                <TableCell>{element._id}</TableCell>
                <TableCell>{element.pName}</TableCell>
                <TableCell>{element.pPrice}</TableCell>
                <TableCell>{element.pDesc}</TableCell>
                <TableCell>
                  <img
                    src={`${element.pImg}`}
                    alt="product img"
                    height={"100px"}
                    width={"100px"}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => deleteData(element._id)}
                  >
                    Delete
                  </Button>
                  <Button variant="outlined" startIcon={<EditIcon />} onClick={()=>{openEdit(element)}} >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* calling the AddProduct.js after checking addopen is true */}
      {addopen && (  <AddProduct open={addopen} setAddopen={setAddopen} product={product} />  )}
      {/* addopen-> will pass the true to open the model
      setAddopen-> to change the open state of modal after changes
      product-> to only show product list after changes */}

      {/* calling the EditProduct.js after checking editopen is true */}
      { editopen && ( <EditProduct editopen={editopen} setEditopen={setEditopen} selectedData={selectedData} product={product}/> )}
      {/* editopen-> pass true to open edit Modal
      setEditopen-> close the modal after editing
      selectedData-> pass the selected product as a object to make edit
      product-> to show the list of products after changes */}
    </div>
  );
}

export default GetData;
