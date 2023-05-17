import React from "react";
import Grid from '@mui/material/Grid';
import Cinnamon_image from '../../images/cinnamon.jpeg';
import tamarind_image from '../../images/tamarind.png';
import chili_image from '../../images/chili.jpg';
import nutmeg_image from '../../images/nutmeg.png';
import turmeric_image from '../../images/turmeric.png';
import saffron_image from '../../images/saffron.png';

import './ProductHome.css';

function ProductHome() {
  return (
    <div className="image-container">
      <div className="card-container">
        <div className="card">
          <h5 className="card-title">Sweet Spices</h5>
          <img src={Cinnamon_image} alt="Cinnamon" className="card-img" />
        </div>
        <div className="card">
          <h5 className="card-title">Sour Spices</h5>
          <img src={tamarind_image} alt="Tamarind" className="card-img" />
        </div>
        <div className="card">
          <h5 className="card-title">Hot Spices</h5>
          <img src={chili_image} alt="Chili" className="card-img" />
        </div>
        <div className="card">
          <h5 className="card-title">Aromatic Spices</h5>
          <img src={nutmeg_image} alt="Nutmeg" className="card-img" />
        </div>
        <div className="card">
          <h5 className="card-title">Exotic Spices</h5>
          <img src={turmeric_image} alt="Turmeric" className="card-img" />
        </div>
        <div className="card">
          <h5 className="card-title">Card title</h5>
          <img src={saffron_image} alt="Saffron" className="card-img" />
        </div>
      </div>
    </div>
  );
}

export default ProductHome;
