# react-jobri-collection

A React migration of the Jobri Collection shop, built with Vite and React.

## Project Overview

This repository contains a working React storefront for Jobri Collection, including:

- Product listing page with search, pagination, and product cards
- Product detail page with a working "Add to Cart" button
- Cart state and persistence using React Context and `localStorage`
- Checkout page showing cart items, delivery details, and order summary
- Delete button behavior that decrements quantity and removes the item when quantity reaches zero
- WhatsApp order flow with a thank-you redirect page and auto-navigation to WhatsApp

## Key Features

- `CartContext` manages cart state globally across the app
- Products are loaded from local data files in `data/`
- Cart contents persist across page reloads using `localStorage`
- Checkout page adapts to an empty cart and hides the order summary when no items remain
- WhatsApp redirect page displays a thank-you message and loading spinner before redirecting

## Routes

The app uses React Router and includes these routes:

- `/` — Home page
- `/products` — Products list page
- `/product-detail/:id` — Product detail page
- `/checkout` — Checkout page
- `/order-redirect` — WhatsApp redirect page

## Setup and Run

```bash
cd jobri-react-shop
npm install
npm run dev
```

Then open the provided Vite URL in your browser.

## Files of Interest

- `src/App.jsx` — app routes and context provider
- `src/context/CartContext.jsx` — cart state management and persistence
- `src/pages/CheckoutPage.jsx` — checkout layout and order summary
- `src/pages/OrderRedirectPage.jsx` — thank-you redirect flow
- `src/pages/ProductDetail.jsx` — product detail and add-to-cart handling
- `src/pages/ProductsPage.jsx` — product list and add-to-cart buttons
- `data/products.js`, `data/cart.js`, `data/deliveryOptions.js` — app data

## Notes

- The checkout order is sent to WhatsApp via a prefilled message URL.
- The project is a migration from the original Jobri shop built in plain JavaScript.
