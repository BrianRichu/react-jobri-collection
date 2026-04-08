import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

export function OrderRedirectPage() {
  const { cart, clearCart } = useCart();
  const whatsappNumber = '254759871835';
  const redirectUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    if (!cart.length) return;

    const timer = setTimeout(() => {
      clearCart();
      window.location.href = redirectUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, [cart.length, clearCart, redirectUrl]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#faf7f4' }}>
        <div style={{ background: '#fff', padding: '48px 32px', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
          <h1 style={{ color: '#2b1e1a', fontSize: '2.2rem', marginBottom: '16px' }}>Thank you for your order!</h1>
          <p style={{ fontSize: '1.2rem', color: '#6b4f3f', marginBottom: '24px' }}>Redirecting to WhatsApp...</p>
          <div style={{ margin: '24px auto 0', width: '48px', height: '48px', border: '6px solid #c8a27a', borderTop: '6px solid #2b1e1a', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        </div>
      </div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`}</style>
    </>
  );
}
