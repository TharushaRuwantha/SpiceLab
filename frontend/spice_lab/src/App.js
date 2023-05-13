import './App.css';
import Register from './Components/RegistrationForm/registrationPage';
import Footer from './Components/footerComponent/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/navbarComponent/navbar';
import FarmersProducts from './Components/FarmersProductsComponents/farmersproducts';


function App() {
  return (
    <Router>
      <div>

        <Navbar/> 

      

        
        <Routes>
          <Route path="/register" element={<Register/>}/>    
          <Route path="/farmersproducts" element={<FarmersProducts/>}/>     
        </Routes>


        <Footer/>
        

      </div>
      </Router>
    
  )
}

export default App;
