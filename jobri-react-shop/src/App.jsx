import { Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetail } from './pages/ProductDetail'
import './App.css'


function App() {
  

  return (
    <>
    <Routes>
      <Route index element = {<HomePage />} />
      <Route path='products' element = {<ProductsPage />} />
      <Route path='product-detail/:id' element = {<ProductDetail />} />
    </Routes>
    </>
  )
}

export default App
