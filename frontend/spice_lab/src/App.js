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
import ProductHome from './Components/ProductHomeComponent/ProductHome';
// import BuyingRequest from './Components/buyingRequest/BuyingRequestPage';
import ProductDetail from './Components/ProductDetailComponent/ProductDetail';
import ProductAddToCart from './Components/ProductAddToCartComponent/ProductAddToCart';
import ProductShoppingCart from './Components/ProductShoppingCartComponent/ProductShoppingCart';
import ShippingPayment from './Components/PShippingPaymentComponent/ShippingPayment';
import ProductUpdateCart from './Components/ProductUpdateCartComponent/ProductUpdateCart';





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
          <Route path="/ProductHome" element={<ProductHome/>}/>  
          <Route path="/addnewitemspage" element={<AddNewItemsPage/>}/> 
          <Route path="/profileeditpage" element={<ProfileEditPage/>}/>
          {/* <Route path="/buyingrequest" element={<BuyingRequest/>}/> */}
          <Route path="/editbuyingpage" element={<EditBuyingReq/>}/>
          <Route path="/ProductDetail" element={<ProductDetail/>}/>  
          <Route path="/ProductAddToCart" element={<ProductAddToCart/>}/>
          <Route path="/ProductShoppingCart" element={<ProductShoppingCart/>}/>
          <Route path="/ProductUpdateCart" element={<ProductUpdateCart/>}/>
          <Route path="/ShippingPayment" element={<ShippingPayment/>}/>



        </Routes>
        <Footer/>
      </div>
      </Router>
    
  )
}

export default App;
