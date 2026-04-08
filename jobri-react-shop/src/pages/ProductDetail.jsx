import { useParams, Link } from "react-router"
import { products } from "../../data/products"
import { Whatsapp } from "../shared-components/Whatsapp"
import { Footer } from "../shared-components/Footer"
import './ProductDetail.css'
import { ScrollToTop } from "../shared-components/ScrollToTop"
import { useCart } from "../context/CartContext"

export function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product.id, 1)
    alert('Added to cart!')
  }

  if (!product) {
    return (
      <div className="product-detail-missing">
        <p>Sorry, we could not find that product.</p>
        <Link to="/products">Back to products</Link>
      </div>
    )
  }

  return (
    <>
    <ScrollToTop />
      <header className="site-header js-header">
        <div className="nav-wrapper">
          {/* LOGO */}
          <div className="nav-left">
            <Link to="/">
              <img src="/images/jobri logo.jpg" alt="Jobri Collection Logo" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav-right desktop-nav">
            <ul>
              <li>
                <i className="fa-solid fa-phone-volume"></i>
              </li>
              <p>+254 759 871 835</p>
              <li className="cart">
                <Link to="/checkout">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>My Cart</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">ksh {product.priceShillings}</p>
          <button className="add-cart-button js-add-to-cart" type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <ul className="product-extra-info">
            <li>🚚 Fast Door Delivery</li>
            <li>💳 Secure Payment</li>
            <li>🔄 Easy Returns</li>
          </ul>
        </div>
      </main>

      <section className="product-description">
        <h3>Description</h3>
        <p>{product.description}</p>
      </section>

      <section className="product-faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <button className="faq-question" type="button">
            How long does delivery take?<span>+</span>
          </button>
          <p className="faq-answer">Delivery usually takes 1-2 business days within Kenya.</p>
        </div>
        <div className="faq-item">
          <button className="faq-question" type="button">
            Can I return the product if it doesn't fit?<span>+</span>
          </button>
          <p className="faq-answer">Yes, we offer easy returns within 2 days of purchase. However items returned must be in same condition as when purchased and returns are to exchange to a fitting size.</p>
        </div>
        <div className="faq-item">
          <button className="faq-question" type="button">
            Is the product authentic?<span>+</span>
          </button>
          <p className="faq-answer">All products sold are 100% authentic and original.</p>
        </div>
      </section>

      <Footer />
      <Whatsapp />
    </>
  )
}