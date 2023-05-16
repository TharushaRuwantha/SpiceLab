import './ProductHome.css';
import React from "react";
import Grid from '@mui/material/Grid';
import Cinnamon_image from '../../images/cinnamon.jpeg';
import tamarind_image from '../../images/tamarind.png';
import chili_image from '../../images/chili.jpg';




function ProductHome(){

    return(
        <Grid container>
                    <Grid item x5={3}>
                   
                    
                    <div class="card text-bg-dark">
                            <img src={Cinnamon_image} class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Sweet Spices</h5>
                                 
                            </div>
                    </div> 

                    <div class="card text-bg-dark">
                            <img src={Cinnamon_image} class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Sour Spices</h5>
                                 
                            </div>
                        </div>     




                    </Grid>
                    <Grid item x5={6}>
                    <div class="card text-bg-dark">
                            <img src={Cinnamon_image} class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Hot Spices</h5>
                                 
                            </div>
                        </div> 

                        <div class="card text-bg-dark">
                            <img src={Cinnamon_image} class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Aromatic Spices</h5>
                                 
                            </div>
                        </div> 

                    </Grid>


                    
                    <Grid item x5={3}>
                    <div class="card text-bg-dark">
                            <img src={Cinnamon_image} class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Exotic Spices</h5>
                                
                                
                            </div>
                        </div> 

                        <div class="card text-bg-dark">
                            <img src={Cinnamon_image} class="card-img"/>
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                 
                            </div>
                        </div> 

                    </Grid>

        </Grid>
        

    )
        

}

export default ProductHome;

