import './ProductAddToCart.css';
import React from "react";
import Grid from '@mui/material/Grid';
import chili_image from '../../images/chili.jpg';

//mekath update kara branch ekak hdla github add krnna oni
function ProductAddToCart(){
    return(

        <div>
           <Grid container>
              <Grid item x5={3}>
              </Grid>

                  
                    
                <Grid item x5={6}>
                <div class="container text-center">
                <div class="row align-items-start">

                <div class="col">
                   <img src={chili_image} class="ImgAdd"/>

                   {/* <div class="col">
                      <div class="row">
                        <button type="button" class="btn">Add TO Cart</button>
                    </div>
                    <div class="col">
                    <div class="row">
                        <button type="button" class="btn">qty</button>
                    
                    </div>
                    </div>
                   
                   </div> */}
                </div>

                <div class="col">
                <div className="AddPostPage_rightcomponent">
                     <h2 class="headh2">Chilli</h2>
                     <h4  class="headh4">Description</h4>
                     <p class="para"> Chilli is the dried ripe fruit of the genus Capsicum.</p>
                     <h4 class="Price">LKR 15 000.00</h4>
                    <button type="button" class="btn">Add To Cart</button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown button
                        </button>
                              <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">50</a></li>
                                    <li><a class="dropdown-item" href="#">10</a></li>
                                    <li><a class="dropdown-item" href="#">200</a></li>
                             </ul>
                    </div>
                    
                    

                </div>
                </div>

                </div>
                </div>

                </Grid>

                
                
                
                
                
                <Grid item x5={3}>

                </Grid>









              </Grid>






        </div>




    )
}


export default ProductAddToCart;