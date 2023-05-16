import './ProductShoppingCart.css';
import React from "react";
import cloves_image from '../../images/cloves.png';


function ProductShoppingCart(){

    return(

      


        <div class="container text-center">
         <div class="row align-items-start">

        
         
       {/* <div class="card mb-3">
        <div class="row g-0"> */}

        <div class="col">
        
        {/* <div class="col-md-4"> */}
      <img src={cloves_image } class="img-fluid rounded-start" />
      </div>
      {/* <div class="col">
                 <button type="button" class="btn btn-danger">Continue Shopping</button>
        <div class="row">
        </div> */}

    {/* <div class="col-md-20">
      <div class="card-body"> */}
      
      <div class="col">
      <div class="row">
        <h5 class="cardd">Name</h5>
         
        </div>
        </div>

        <div class="col">
        <div class="row">
        <h5 class="cardd">Price</h5>
        <div class="col">
              <button type="button" class="btn btn-success">Edit</button>
        <div class="row">
        </div>
        </div>
        </div>
        </div>

        
        <div class="col">
        <div class="row">
        <h5 class="cardd">Qty</h5>
        </div>
        </div>

        <div class="col">
        <div class="row">
        <h5 class="cardd">total</h5>
        <div class="col">
                 <button type="button" class="btn btn-danger">Remove</button>
        <div class="row">
        </div>
        </div>
        </div>
        </div>




      </div>
    </div>
   




       

       

    )
}

export default ProductShoppingCart;


