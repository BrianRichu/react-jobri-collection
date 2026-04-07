
import { useState, useEffect } from "react"
import { products } from "../../data/products"
import { Link } from "react-router"
import { Footer } from "../shared-components/Footer"
import { Whatsapp } from "../shared-components/Whatsapp"
import './ProductsPage.css'
import { ScrollToTop } from "../shared-components/ScrollToTop"

export function ProductsPage(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [currentPage , setCurrentPage] = useState(1);
   const recordsPerPage = 16;
   const lastIndex = currentPage * recordsPerPage;
   const firstIndex = lastIndex - recordsPerPage;
   const records = products.slice(firstIndex , lastIndex);
   const npage = Math.ceil(products.length / recordsPerPage);
   const numbers = [...Array(npage).keys()].map(i => i + 1);

   // Load current page from localStorage on component mount
   useEffect(() => {
     const savedPage = localStorage.getItem('productsPage');
     if (savedPage) {
       const pageNum = parseInt(savedPage, 10);
       if (pageNum >= 1 && pageNum <= npage) {
         setCurrentPage(pageNum);
       }
     }
   }, [npage]);

   // Function to update current page and save to localStorage
   const updateCurrentPage = (page) => {
     setCurrentPage(page);
     localStorage.setItem('productsPage', page.toString());
   };

   function prePage(){
     if(currentPage !== 1){
       updateCurrentPage(currentPage - 1);
     }
   }

   function changeCPage(id){
     updateCurrentPage(id);
   }

   function nextPage(){
     if(currentPage !== npage){
       updateCurrentPage(currentPage + 1);
     }
   }


  return(
    <>
    <ScrollToTop />
    <header className="site-header">
  <div className="nav-wrapper">

  {/* LOGO */}
    <div className="nav-left">
      <Link to = "/">
        <img src="images/jobri logo.jpg" alt="Jobri Logo" />
      </Link>
    </div>

    {/* SEARCH */}
    <div className="nav-middle">
      <input type="search" placeholder="Search products..." id="search-input" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>

   { /* DESKTOP NAV */}
    <nav className="desktop-nav">
      <ul>
        <li><Link to ="/products">Sneakers</Link></li>
        <li><Link to ="/products">Watches</Link></li>
        <li><Link to ="/products">Clothing</Link></li>
      </ul>
    </nav>

   { /* CART (ALWAYS VISIBLE) */}
    <div className="cart-icon">
      <Link to ="/checkout">
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>

   { /* TOGGLE */}
    <button
      className="menu-toggle"
      id="openMenu"
      type="button"
      onClick={() => setIsMenuOpen(true)}
    >
      <i className="fa-solid fa-bars"></i>
    </button>

  </div>
</header>

{/* MOBILE MENU */}
<aside className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} id="mobileMenu">
  <button
    className="close-menu"
    id="closeMenu"
    type="button"
    onClick={() => setIsMenuOpen(false)}
  >
    <i className="fa-solid fa-xmark"></i>
  </button>

  <ul>
    <li>
      <Link to="/products" onClick={() => setIsMenuOpen(false)}>
        Sneakers
      </Link>
    </li>
    <li>
      <Link to="/products" onClick={() => setIsMenuOpen(false)}>
        Watches
      </Link>
    </li>
    <li>
      <Link to="/products" onClick={() => setIsMenuOpen(false)}>
        Clothing
      </Link>
    </li>
  </ul>
</aside>

{/* HEADING */}
<h1 className="discover">Quality & Affordable Items</h1>

{/* PRODUCTS */}
<div className="top-products js-top-products">

{records.map((product)=>{
  return (
    <div key={product.id} className="top-product">
      <Link to={`/product-detail/${product.id}`}>
        <img src={product.image} loading="lazy" alt={product.name} />
      </Link>
        
        <p className="product-name">{product.name}</p>
        <p className="product-price">ksh {product.priceShillings}</p>
        <button 
          className="add-cart-button js-add-to-cart"
        >
          Add to Cart
        </button>
    <nav>
      
    </nav>

      </div>
  )
})}
</div>

{/* PAGINATION */}
<nav className="pagination">
  <ul className="pagination-list">
    <li className="page-item">
      <a href="#" className="page-link" onClick={prePage}>Prev</a>
    </li>
    {
      numbers.map((n, i) => (
        <li key={i} className={`page-item ${currentPage === n ? 'active' : ''}`}>
          <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
        </li>
      ))
    }
    <li className="page-item">
      <a href="#" className="page-link" onClick={nextPage}>Next</a>
    </li>
  </ul>
</nav>

<Footer />

<Whatsapp />
    
    </>
  )
   
}