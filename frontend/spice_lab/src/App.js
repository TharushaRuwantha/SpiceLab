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
import BuyingRequest from './Components/buyingRequest/BuyingRequestPage';
import EditBuyingReq from './Components/editBuyingReqPage/editBuyingPage'
import ProductDetail from './Components/ProductDetailComponent/ProductDetail';
import ProductAddToCart from './Components/ProductAddToCartComponent/ProductAddToCart';
import ProductShoppingCart from './Components/ProductShoppingCartComponent/ProductShoppingCart';
import ShippingPayment from './Components/PShippingPaymentComponent/ShippingPayment';
import ProductUpdateCart from './Components/ProductUpdateCartComponent/ProductUpdateCart';
import AddExpenditure from './Components/expensef/AddExpenditure';
import AllExpenditures from './Components/expensef/AllExpenditures';
import UpdateExpenditure from './Components/expensef/UpdateExpenditure';
import AddIncome from './Components/incomef/AddIncome';
import AllIncomes from './Components/incomef/AllIncomes';
import UpdateIncome from './Components/incomef/UpdateIncome';
import Statements from './Components/Statements/Statements';





export default function App() {
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
          <Route path="/buyingrequest" element={<BuyingRequest/>}/>
          <Route path="/editbuyingpage" element={<EditBuyingReq/>}/>
          <Route path="/ProductDetail" element={<ProductDetail/>}/>  
          <Route path="/ProductAddToCart" element={<ProductAddToCart/>}/>
          <Route path="/ProductShoppingCart" element={<ProductShoppingCart/>}/>
          <Route path="/ProductUpdateCart" element={<ProductUpdateCart/>}/>
          <Route path="/ShippingPayment" element={<ShippingPayment/>}/>
          <Route path="/expense/add" element={<AddExpenditure />} />
          <Route path="/expense/list" element={<AllExpenditures />} />
          <Route path="/expense/update/:id" element={<UpdateExpenditure />} />
          <Route path="/income/add" element={<AddIncome />} />
          <Route path="/income/list" element={<AllIncomes />} />
          <Route path="/income/update/:id" element={<UpdateIncome />} />
          <Route path="/statement/list" element={<Statements />} />



        </Routes>
        <Footer/>
      </div>
      </Router>
    
  )
}