import './Footer.css'

export function Footer (){
  return(
    <footer className="site-footer">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-column">
            <h3>Jobri Collection</h3>
            <p>
              Your go-to fashion store for sneakers, watches, clothing, and kids
              wear. Quality, style, and affordability — all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Sneakers</a>
              </li>
              <li>
                <a href="#">Watches</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="products.html" target="_blank">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>
              <i className="fa-solid fa-phone"></i> +254 759 871 835
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@jobricollection.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Kenya
            </p>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://wa.me/254759871835" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Jobri Collection. All rights reserved.</p>
        </div>
      </footer>
  )
}