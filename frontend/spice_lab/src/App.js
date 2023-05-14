import './App.css';
import Register from './Components/RegistrationForm/registrationPage';
import Footer from './Components/footerComponent/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbarComponent/navbar';
import FarmersProducts from './Components/FarmersProductsComponents/farmersproducts';
import EditItemsPage from './Components/edititemspageComponent/edititemspage';
import AddRequest from './Components/addRequestComponent/addRequestPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar/> 
        <Routes>
          <Route path="/register" element={<Register/>}/>    
          <Route path="/farmersproducts" element={<FarmersProducts/>}/>         
          <Route path="/edititemspage" element={<EditItemsPage/>}/>    
          <Route path="/addrequest" element={<AddRequest/>}/> 
        </Routes>
        <Footer/>
      </div>
      </Router>
    
  )
}

export default App;
