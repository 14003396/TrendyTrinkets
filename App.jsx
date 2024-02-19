import './App.css'
import SellerRegister from './components/SellerRegister'
import SellerLogin from './components/SellerLogin'
import AddProduct from './components/AddProduct'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import SellerPoducts from './components/SellerProducts'
import ViewProduct from './components/ViewProduct'

function App() {
 
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<SellerLogin/>}/>
      <Route path='/sregister' element={<SellerRegister/>}/>
      <Route path='/slogin' element={<SellerLogin/>}/>
      <Route path='/addProduct' element={<AddProduct/>}/>
      <Route path='/sproducts' element={<SellerPoducts/>}/>
      <Route path='/viewProduct/:prodId' element={<ViewProduct/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
