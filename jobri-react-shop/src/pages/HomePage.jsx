import { Footer } from "../shared-components/Footer";
import { Whatsapp } from "../shared-components/Whatsapp";
import { Link } from "react-router";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="nav-wrapper">
          {/* LOGO */}
          <div className="nav-left">
            <Link to="/">
              <img src="images/jobri logo.jpg" alt="Jobri Collection Logo" />
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

      {/*Introduction section*/}
      <section className="middle-container">
        <div className="intro">
          <p>style that speaks for you</p>
          <h2>
            From fresh{" "}
            <span className="gradient-text">kicks and clean fits</span> to
            statement watches
          </h2>
          <p>Jobri Collection is your go to plug for all things fashion</p>
          <Link to="/products" className="products-link">
            <button className="products">
              View Products<i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
        <section className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="images/converse shoes.jpg" alt="Converse Shoes" />
            </div>
            <div className="slide">
              <img src="images/jacket-into.jpeg" alt="Watch" />
            </div>
            <div className="slide">
              <img src="images/watch into.jpeg" alt="Jacket" />
            </div>

            {/* duplicate slides for seamless looping */}
            <div className="slide">
              <img src="images/converse shoes.jpg" alt="Converse Shoes" />
            </div>
            <div className="slide">
              <img src="images/jacket-into.jpeg" alt="Watch" />
            </div>
            <div className="slide">
              <img src="images/watch into.jpeg" alt="Jacket" />
            </div>
          </div>
        </section>
      </section>

      <section className="featured-products">
        {/*Top Products Sections*/}
        <div className="top-products-section">
          <h1>Top Products</h1>
          <div className="top-products">
            <div className="top-product">
              <img
                src="images/sneakers/Brown Nike sb dunks.jpeg"
                alt=""
                srcSet=""
              />
              <p className="product-name">Nike Dunk Low "Cacao Wow" Sneakers</p>
              <p className="product-price">ksh 3,799</p>
            </div>
            <div className="top-product">
              <img
                src="images/clothing/black leather jacket.jpeg"
                alt=""
                srcSet=""
              />
              <p className="product-name">Black Leather Jacket</p>
              <p className="product-price">ksh 3,599</p>
            </div>
            <div className="top-product">
              <img src="images/watches/naviforce watch.jpeg" alt="" srcSet="" />
              <p className="product-name">Silver Naviforce Watch</p>
              <p className="product-price">ksh 4,499</p>
            </div>
            <div className="top-product">
              <img src="images/sneakers/knu vans.jpeg" alt="" srcSet="" />
              <p className="product-name">Knu Vans Sneakers</p>
              <p className="product-price">ksh 3,999</p>
            </div>
          </div>
          <div className="top-products">
            <div className="top-product">
              <img
                src="images/sneakers/grey new balance 9060.jpeg"
                alt=""
                srcSet=""
              />
              <p className="product-name">Grey New Balance 9060</p>
              <p className="product-price">ksh 4,799</p>
            </div>
            <div className="top-product">
              <img
                src="images/watches/omega automatic watch.jpeg"
                alt=""
                srcSet=""
              />
              <p className="product-name">Omega automatic Watch</p>
              <p className="product-price">ksh 7,999</p>
            </div>
            <div className="top-product">
              <img src="images/sneakers/samba stussy.jpeg" alt="" srcSet="" />
              <p className="product-name">Adidas Samba Stussy Sneakers</p>
              <p className="product-price">ksh 3,799</p>
            </div>
            <div className="top-product">
              <img
                src="images/kids/white kids nike sb dunks.jpeg"
                alt=""
                srcSet=""
              />
              <p className="product-name">Kids Nike SB Dunk Low Sneakers</p>
              <p className="product-price">ksh 3,299</p>
            </div>
          </div>
        </div>

        {/*featured Products Section*/}
        <div className="Categories-section">
          <h1>Featured Categories</h1>
          <div className="category-products">
            <div className="category-product">
              <img
                src="images/sneakers/Louis Vuitton X Nike SB Dunk Low.jpeg"
                alt=""
                srcSet=""
              />
              <div className="category-content">
                <p className="category-name">Sneakers</p>
                <p className="category-descrition">
                  Step up your footwear game with our collection of sneakers.
                  From everyday casual to sporty performance designs, find the
                  perfect pair that combines comfort, style, and durability.
                </p>
                <Link to="/products">
                  View More <i className="fa-solid fa-circle-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="category-product">
              <img src="images/watches/OFNS Couple set.jpeg" alt="" srcSet="" />
              <div className="category-content">
                <p className="category-name">Watches</p>
                <p className="category-descrition">
                  Timeless elegance on your wrist. Discover a range of watches
                  that blend functionality with fashion, from classic analog
                  designs to modern digital styles.
                </p>
                <Link to="/products">
                  View More <i className="fa-solid fa-circle-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="category-product">
              <img
                src="images/kids/kids Blue Nike Airmax Portal.jpeg"
                alt=""
                srcSet=""
              />
              <div className="category-content">
                <p className="category-name">Kids</p>
                <p className="category-descrition">
                  Fun, safe, and stylish products for children of all ages.
                  Clothing, shoes, and accessories designed to keep your little
                  ones comfortable and looking great.
                </p>
                <Link to="/products">
                  View More <i className="fa-solid fa-circle-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="category-product">
              <img
                src="images/clothing/Knitted Sweater.jpeg"
                alt=""
                srcSet=""
              />
              <div className="category-content">
                <p className="category-name">Clothing</p>
                <p className="category-descrition">
                  Trendy, comfortable, and high-quality apparel for every
                  occasion. Explore stylish outfits, casual wear, and statement
                  pieces that fit your personality and lifestyle.
                </p>
                <Link to="/products">
                  View More <i className="fa-solid fa-circle-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/products" className="products-link">
            <button className="category-button">
              View Products <i className="fa-solid fa-right-long"></i>
            </button>
          </Link>
        </div>
      </section>

      {/* footer section */}
      <Footer />

      {/*whatsapp icon section*/}
      <Whatsapp />
    </>
  );
}
