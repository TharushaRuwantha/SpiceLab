import './ProductDetail.css';
import React from "react";
import ginger_image from '../../images/ginger.png';
import saffron_image from '../../images/saffron.png';
import nutmeg_image from '../../images/nutmeg.png';
import turmeric_image from '../../images/turmeric.png';
import pepper_image from '../../images/pepper.png';
import garlic_image from '../../images/garlic.png';
import mace_image from '../../images/mace.png';
import cardamom_image from '../../images/cardamom.png';


function ProductDetail(){
    return( 

<div class="container text-center">
    <div class="row row-cols-4">

{/* 
  <div class="col-sm-9 p-3">
            
             meh tika comments ayn krla ghla blnna 
             <div class="card mb-3">
                <div class="row g-0">
                   <div class="col-md-12">
                        <img src={cloves_image}class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
                 <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>

    </div>  */}


    <div class="col">
        <div class="card">
         <img src={ginger_image}class="card-img-top"/>
         
             <div class="card-body">
                 <p class="card-text">ghghg</p>
            </div> 
        </div>
    </div>


    <div class="col">
        <div class="card">
            <img src={saffron_image}class="card-img-top"/>
              <div class="card-body">
                 <p class="card-text"></p>
              </div>
        </div>
    </div>


    <div class="col">
        <div class="card">
          <img src={nutmeg_image}class="card-img-top"/>
            <div class="card-body">
                <p class="card-text"></p>
            </div>
        </div>
    </div>


    <div class="col">
        <div class="card">
            <img src={turmeric_image}class="card-img-top"/>
               <div class="card-body">
                  <p class="card-text"></p>
                </div>
            </div>
        </div>

 

  


    <div class="col">
         <div class="card">
           <img src={pepper_image}class="card-img-top"/>
               <div class="card-body">
                  <p class="card-text"></p>
                </div>
        </div>
    </div>

    <div class="col">
         <div class="card">
           <img src={garlic_image}class="card-img-top"/>
                <div class="card-body">
                    <p class="card-text"></p>
                </div>

        </div>
    </div>

        <div class="col">
         <div class="card">
           <img src={mace_image}class="card-img-top"/>
                <div class="card-body">
                    <p class="card-text"></p>
                </div>

        </div>
    </div>


        <div class="col">
         <div class="card">
           <img src={cardamom_image}class="card-img-top"/>
                <div class="card-body">
                    <p class="card-text"></p>
                </div>

        </div>
        </div>

</div>
</div>



)

}

export default ProductDetail;



