import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import Herosection from './components/Herosection'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Ekart from './pages/Ekart'
import SearchProduct from './pages/SearchProduct'

function App() {
  return (
    <BrowserRouter>

      <Header />
           <Routes>
            <Route  path='/' element={<Landingpage/>} />
            <Route  path='/ecart' element={<Ekart/>} />
            <Route  path='/search' element={<SearchProduct/>} />
            </Routes>
      <Footer />



    </BrowserRouter>
  )
}

export default App