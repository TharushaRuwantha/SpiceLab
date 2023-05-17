import React, { useState, useEffect } from "react";
import "../FarmersProductsComponents/farmersproducatsdownpart.css";

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function FarmersProductsDownPart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:8070/item");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await fetch(`http://localhost:8070/item/delete/${itemId}`, {
        method: 'DELETE'
      });
      // Refresh the items after deletion
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10 outborderA">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
              <center className="textB">Product Code</center>
            </div>
            <div className="col-sm-3">
              <center className="textB">Items</center>
            </div>
            <div className="col-sm-2">
              <center className="textB">Quantity</center>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>

      {items.map((item) => (
        <div className="row" key={item._id}>
          <div className="col-sm-1">
            <center><Checkbox /></center>
          </div>
          <div className="col-sm-2 textA">
            <center>{item._id}</center>
          </div>
          <div className="col-sm-3 textA">
            <center>{item.Fullname}</center>
          </div>
          <div className="col-sm-2 textA">
            <center>{item.Weight}KG</center>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-6">
                <center>
                  <Button variant="contained" style={{ backgroundColor: '#4D1003', color: 'white', width: '100px' }}>
                    Edit
                  </Button>
                </center>
              </div>
              <div className="col-sm-6">
                <center>
                  <Button variant="contained" style={{ backgroundColor: '#4D1003', color: 'white', width: '100px' }} onClick={() => handleDelete(item._id)}>
                    Delete
                  </Button>
                </center>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="outborderC"></div>
    </div>
  );
}

export default FarmersProductsDownPart;
