import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import ContactForm from './components/Contacto'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito'
import ScrollToTop from './assets/ScrollTop'
import Checkout from './components/Checkout'

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
            <Route path ='/sets'element = {<ItemListContainer/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/contacto' element= {<ContactForm/>}/>
            <Route path='/carrito' element= {<Carrito/>}/>
            <Route path='/checkout' element= {<Checkout/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
