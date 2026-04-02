import './Whatsapp.css'

export function Whatsapp() {
  return(
    <a
        href="https://wa.me/254759871835?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20products"
        className="whatsapp-chat"
        target="_blank"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span>Chat with us</span>
      </a>
  )
}