import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import ContactForm from './components/Contacto'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
          <Route path ='/sets'element = {<ItemListContainer/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contacto' element= {<ContactForm/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
