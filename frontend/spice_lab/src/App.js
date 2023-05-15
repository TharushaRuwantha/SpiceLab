import './App.css';
import Register from './Components/RegistrationForm/registrationPage';
import Footer from './Components/footerComponent/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/navbarComponent/navbar';
import FarmersProducts from './Components/FarmersProductsComponents/farmersproducts';
import EditItemsPage from './Components/edititemspageComponent/edititemspage';

import ProductsSummaryPage from './Components/productssummarypageComponent/productssummarypage';
import AddRequest from './Components/addRequestComponent/addRequestPage';
import AddNewItemsPage from './Components/addnewitemspageComponent/addnewitemspage';
import ProfileEditPage from './Components/profileeditComponent/profileeditpage';



function App() {
  return (
    <Router>
      <div>
        <Navbar/> 
        <Routes>
          <Route path="/register" element={<Register/>}/>    

                
         
          <Route path="/productssummary" element={<ProductsSummaryPage/>}/> 
            

          <Route path="/farmersproducts" element={<FarmersProducts/>}/>            
          <Route path="/addrequest" element={<AddRequest/>}/> 
          <Route path="/edititemspage" element={<EditItemsPage/>}/>   
          <Route path="/addnewitemspage" element={<AddNewItemsPage/>}/> 
          <Route path="/profileeditpage" element={<ProfileEditPage/>}/>

        </Routes>
        <Footer/>
      </div>
      </Router>
    
  )
}

export default App;
