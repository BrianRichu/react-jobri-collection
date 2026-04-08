
import { useState, useEffect } from "react"
import { products } from "../../data/products"
import { Link } from "react-router"
import { Footer } from "../shared-components/Footer"
import { Whatsapp } from "../shared-components/Whatsapp"
import './ProductsPage.css'
import { ScrollToTop } from "../shared-components/ScrollToTop"
import { useCart } from "../context/CartContext"

export function ProductsPage(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { addToCart } = useCart()
   const recordsPerPage = 16;

   const [searchTerm, setSearchTerm] = useState(() => {
     return localStorage.getItem('productsSearch') || '';
   });

   const [currentPage, setCurrentPage] = useState(() => {
     const savedSearch = localStorage.getItem('productsSearch') || '';
     const savedPage = localStorage.getItem('productsPage');
     if (savedPage && !savedSearch) {
       const pageNum = parseInt(savedPage, 10);
       const totalPages = Math.ceil(products.length / recordsPerPage);
       return pageNum >= 1 && pageNum <= totalPages ? pageNum : 1;
     }
     return 1;
   });

   // Filter products based on search term
   const filteredProducts = products.filter(product => {
     const term = searchTerm.toLowerCase();
     const nameMatch = product.name.toLowerCase().includes(term);
     const keywordsMatch = Array.isArray(product.keywords) &&
       product.keywords.some(keyword =>
         keyword.toLowerCase().includes(term)
       );
     return nameMatch || keywordsMatch;
   });

   const lastIndex = currentPage * recordsPerPage;
   const firstIndex = lastIndex - recordsPerPage;
   const records = filteredProducts.slice(firstIndex , lastIndex);
   const npage = Math.ceil(filteredProducts.length / recordsPerPage);
   const numbers = [...Array(npage).keys()].map(i => i + 1);

   // Scroll to top when pagination changes
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [currentPage]);

   // Function to update current page and save to localStorage
   const updateCurrentPage = (page) => {
     setCurrentPage(page);
     localStorage.setItem('productsPage', page.toString());
   };

   // Function to handle search input changes
   const handleSearchChange = (e) => {
     const value = e.target.value;
     setSearchTerm(value);
     localStorage.setItem('productsSearch', value);
     setCurrentPage(1); // Reset to first page when searching
     localStorage.setItem('productsPage', '1');
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
      <input 
        type="search" 
        placeholder="Search products..." 
        id="search-input" 
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
<h1 className="discover">
  {searchTerm ? `Search results for "${searchTerm}" (${filteredProducts.length} items)` : 'Quality & Affordable Items'}
</h1>

{/* PRODUCTS */}
<div className="top-products js-top-products">
{filteredProducts.length === 0 ? (
  <div className="no-results">
    <p>No products found for "{searchTerm}"</p>
    <p>Try searching for something else or <button onClick={() => handleSearchChange({target: {value: ''}})} className="clear-search">clear search</button></p>
  </div>
) : (
  records.map((product)=>{
    return (
      <div key={product.id} className="top-product">
        <Link to={`/product-detail/${product.id}`}>
          <img src={product.image} loading="lazy" alt={product.name} />
        </Link>
          
          <p className="product-name">{product.name}</p>
          <p className="product-price">ksh {product.priceShillings}</p>
          <button 
            className="add-cart-button js-add-to-cart"
            onClick={() => {
              addToCart(product.id, 1);
            }}
          >
            Add to Cart
          </button>
      <nav>
        
      </nav>

        </div>
    )
  })
)}
</div>

{/* PAGINATION */}
{filteredProducts.length > 0 && (
  <nav className="pagination">
    <ul className="pagination-list">
      <li className="page-item">
        <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); prePage(); }}>Prev</a>
      </li>
      {
        numbers.map((n, i) => (
          <li key={i} className={`page-item ${currentPage === n ? 'active' : ''}`}>
            <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); changeCPage(n); }}>{n}</a>
          </li>
        ))
      }
      <li className="page-item">
        <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); nextPage(); }}>Next</a>
      </li>
    </ul>
  </nav>
)}

<Footer />

<Whatsapp />
    
    </>
  )
   
}