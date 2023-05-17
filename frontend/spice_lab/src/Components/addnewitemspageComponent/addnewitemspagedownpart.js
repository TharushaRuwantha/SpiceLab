
import React, { useState } from "react";
import "../addnewitemspageComponent/addnewitemspagedownpart.css";
import itemimg from "../../images/nypic.png";
import Button from '@mui/material/Button';

function AddNewItemsPageDownPart() {
  const [formData, setFormData] = useState({
    Fullname: "",
    Weight: "",
    price: "",
    Description: ""
  });

  const [showAlert, setShowAlert] = useState(false); 

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8070/item/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({
          Fullname: "",
          Weight: "",
          price: "",
          Description: ""
        });
        setShowAlert(true);

        // Redirect to "/farmersproducts" after adding items
        window.location.href = "/farmersproducts";
      } else {
        alert("Failed to add items. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding items. Please try again.");
    }
  };

return (
    <div>
      <div className="row">
        <div className="col-sm-1"></div>

        <div className="col-sm-10 addnewitemspagedownpart">
          <div className="row">
            <div className="col-sm-1"></div>

            <div className="col-sm-10 addnewitemspagedownpartA">
              <div className="row">
                <div className="col-sm-4">
                  <div className="imgstyle imgstylemargin">
                    <center>
                      <div className="imgstylespace">
                        <Button variant="outlined" style={{ borderColor: '#000000' }}>
                          <input id="multiplefileupload" type="file" accept=".jpg,.gif,.png" multiple />
                        </Button>
                      </div>
                    </center>
                  </div>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-7 ">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-4 addnewitemspagefont ">Full Name</div>
                      <div className="col-sm-8 ">
                        <input
                          type="text"
                          className="form-controlNYaddnewitems"
                          placeholder="Type here"
                          required
                          name="Fullname"
                          value={formData.Fullname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row addpagespace">
                      <div className="col-sm-4 addnewitemspagefont ">Weight</div>
                      <div className="col-sm-8 ">
                        <input
                          type="text"
                          className="form-controlNYaddnewitems"
                          placeholder="Type here"
                          required
                          name="Weight"
                          value={formData.Weight}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row addpagespace">
                      <div className="col-sm-4 addnewitemspagefont">Price</div>
                      <div className="col-sm-8 ">
                        <input
                          type="text"
                          className="form-controlNYaddnewitems"
                          placeholder="Type here"
                          required
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          />
                          </div>
                          </div>
                          <div className="row addpagespace">
                          <div className="col-sm-12 addnewitemspagefont ">Description</div>
                          <textarea
                                              className="form-controlNYaddnewitems addpagespaceA"
                                              placeholder="Type here"
                                              required
                                              name="Description"
                                              value={formData.Description}
                                              onChange={handleChange}
                                            ></textarea>
                          </div>
                          <div className="row addpagespace">
                          <div className="col-sm-6"></div>
                          <div className="col-sm-3 ">
                          <center>
                          <Button variant="contained" style={{ backgroundColor: '#4D1003', color: 'white', width: '100px' }}>Cancel</Button>
                          </center>
                          </div>
                          <div className="col-sm-3">
                          <center>
                          <Button type="submit" variant="contained" style={{ backgroundColor: '#4D1003', color: 'white', width: '100px' }}>Finish</Button>
                          </center>
                          </div>
                          </div>
                          </form>
                          </div>
                          </div>
                          </div>
                          <div className="col-sm-1 "></div>
                          </div>
                          <div className="underpartaddpage"></div>
                          </div>
                          <div className="col-sm-1"></div>
                          </div>
                          <div className="row underpartaddpage"></div>
                          {/* Alert message */}
                          {showAlert && (
                          <div className="alert alert-success" role="alert">
                          Successfully Added Items
                          </div>
                          )}
                          </div>
                          );
                          }

                          export default AddNewItemsPageDownPart;

