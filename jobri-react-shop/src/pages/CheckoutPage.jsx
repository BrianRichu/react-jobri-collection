import { Whatsapp } from "../shared-components/Whatsapp";
import { Link } from 'react-router';
import { products } from "../../data/products";
import { deliveryOptions } from "../../data/deliveryOptions";
import { useCart } from '../context/CartContext';
import './CheckoutPage.css'

export function CheckoutPage(){
  const { cart, updateQuantity } = useCart();

  const deliveryOption = deliveryOptions.find(option => option.id === cart[0]?.deliveryOptionId) || deliveryOptions[0];
  const expectedDeliveryDate = new Date(Date.now() + deliveryOption.deliveryDays * 24 * 60 * 60 * 1000)
    .toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });

  const subtotal = cart.reduce((sum, cartItem) => {
    const product = products.find(p => p.id === cartItem.id);
    return product ? sum + product.priceShillings * cartItem.quantity : sum;
  }, 0);

  const deliveryPrice = deliveryOption.priceShillings;
  const total = subtotal + deliveryPrice;

  return(
    <>
    {/* HEADER */}
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img
              className="jobri-logo"
              src="images/jobri logo.jpg"
              alt="Jobri Logo"
            />
          </Link>
        </div>

        <div className="checkout-header-middle-section">Checkout</div>
      </div>
    </div>

    {/* MAIN */}
    <div className="main">
      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <div className="empty-cart">Your cart is empty.</div>
        </div>
      ) : (
        <>
          <div className="page-title">Review your order</div>

          <div className="checkout-grid">
            {/* ORDER SUMMARY */}
            <div className="order-summary">
              {cart.map(cartItem => {
                const product = products.find(p => p.id === cartItem.id);
                if (!product) return null;
                const itemTotal = product.priceShillings * cartItem.quantity;
                return (
                  <div key={cartItem.id} className="cart-item-box">
                    <div className="delivery-date">Delivery date: {expectedDeliveryDate}</div>
                    <div className="cart-item">
                      <img className="product-image" src={product.image} alt={product.name} />
                      <div className="item-details">
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">ksh {product.priceShillings}</div>
                        <div className="quantity">Quantity: {cartItem.quantity}</div>
                        <button
                          className="delete-link"
                          type="button"
                          onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="payment-summary">
              <div className="payment-summary-title">Order Summary</div>
              <div className="payment-summary-row">
                <div>Items:</div>
                <div className="payment-summary-money">Ksh {subtotal}</div>
              </div>
              <div className="payment-summary-row">
                <div>Shipping & Handling:</div>
                <div className="payment-summary-money">Ksh {deliveryPrice}</div>
              </div>
              <div className="payment-summary-row">
                <div>Expected Delivery:</div>
                <div className="payment-summary-link">{expectedDeliveryDate}</div>
              </div>
              <div className="payment-summary-row total-row">
                <div>Order Total:</div>
                <div className="payment-summary-money">Ksh {total}</div>
              </div>
              <button className="place-order-button">Place your order</button>
            </div>
          </div>
        </>
      )}
    </div>
    {/*whatsapp icon section*/}
    <Whatsapp />
    </>
  )
}