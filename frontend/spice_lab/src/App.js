import './App.css';
import Register from './Components/RegistrationForm/registrationPage';
import Footer from './Components/footerComponent/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Footer/>
        
        <Routes>
          <Route path="/register" element={<Register/>}/>        
        </Routes>
      </div>
      </Router>
    
  )
}

export default App;
