import { Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetail } from './pages/ProductDetail'
import './App.css'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrderRedirectPage } from './pages/OrderRedirectPage'
import { CartProvider } from './context/CartContext'


function App() {
  

  return (
    <CartProvider>
    <Routes>
      <Route index element = {<HomePage />} />
      <Route path='products' element = {<ProductsPage />} />
      <Route path = 'checkout' element = {<CheckoutPage />} />
      <Route path='order-redirect' element = {<OrderRedirectPage />} />
      <Route path='product-detail/:id' element = {<ProductDetail />} />
    </Routes>
    </CartProvider>
  )
}

export default App
