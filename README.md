# Paradise Nursery 🌿

A modern e-commerce application for an indoor plant shopping store built with React, Redux Toolkit, and React Router DOM.

## Project Description

Paradise Nursery is a fully functional shopping application that showcases indoor plants from various categories. The application features a responsive design, state management using Redux Toolkit, and smooth navigation with React Router.

### Features

- **Landing Page**: Beautiful hero section with call-to-action button
- **Product Catalog**: 7 unique plants across 3 categories (Potted Plants, Flowering Plants, Succulents)
- **Shopping Cart**: Full cart functionality with add, remove, increase, and decrease quantity options
- **Responsive Design**: Mobile-first approach using CSS Flexbox and Grid
- **Redux State Management**: Centralized cart state management
- **Dynamic Navigation**: React Router for seamless page transitions
- **About Us Page**: Company information and contact details

## Technology Stack

- **React** - UI library (Functional Components with Hooks)
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with Flexbox and Grid

## Installation & Setup

### Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn

### Steps

1. **Clone or Navigate to the Project**
   ```bash
   cd "Paradise Nursery"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   ```

6. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
Paradise Nursery/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── ProductList.jsx
│   │   ├── ProductList.css
│   │   ├── CartPage.jsx
│   │   ├── CartPage.css
│   │   ├── AboutUs.jsx
│   │   └── AboutUs.css
│   ├── features/
│   │   └── cart/
│   │       └── cartSlice.js
│   ├── data/
│   │   └── plants.js
│   ├── store/
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Component Overview

### Home Component
- Landing page with background image from Unsplash
- Company name and tagline
- Call-to-action button to navigate to plants page

### Navbar Component
- Navigation links (Home, Plants, About Us, Cart)
- Dynamic cart badge showing item count
- Sticky positioning with responsive design

### ProductList Component
- Displays products organized by category
- 7 unique plants across 3 categories
- Add to Cart functionality with button feedback
- Responsive grid layout

### CartPage Component
- View all items in cart
- Modify quantities (increase/decrease)
- Remove items from cart
- Display total price calculation
- Checkout button with coming soon message
- Continue shopping button

### AboutUs Component
- Company mission and values
- Service highlights
- Contact information
- Responsive design with hover effects

## Redux Store Structure

### Cart Slice
```javascript
// State
{
  cartItems: [
    { id, name, price, image, quantity }
  ]
}

// Actions
- addItem(product)
- removeItem(id)
- increaseQuantity(id)
- decreaseQuantity(id)
- clearCart()

// Selectors
- selectCartItems(state)
- selectCartTotalCount(state)
- selectCartTotalPrice(state)
```

## Features Details

### Shopping Cart
- Add items to cart with visual feedback
- Increase/decrease quantity with buttons
- Remove individual items
- Calculate total price automatically
- Persistent cart count in navbar

### Product Management
- 6+ unique plants with:
  - High-quality images from Unsplash/Pexels
  - Product name
  - Price
  - Description
  - Category classification

### Responsive Design
- Mobile-first approach
- Flexbox and Grid layouts
- Media queries for different screen sizes
- Touch-friendly buttons and controls

## Available Routes

- `/` - Home/Landing page
- `/plants` - Product listing page
- `/cart` - Shopping cart page
- `/about` - About Us page

## Color Scheme

- Primary Green: `#2d5016`
- Secondary Green: `#a4d65e`
- Dark Text: `#333`
- Light Background: `#f5f7fa`
- White: `#ffffff`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lazy image loading with fallback placeholders
- Efficient Redux state management
- CSS animations for smooth transitions
- Optimized bundle size with Vite

## Future Enhancements

- Product search and filtering
- User authentication
- Payment integration
- Order tracking
- Product reviews and ratings
- Wishlist functionality
- Live chat support

## License

This project is open source and available for personal and commercial use.

## Contact

- Email: hello@paradisenursery.com
- Phone: 1-800-PLANTS-1
- Hours: Mon-Fri 9AM-6PM EST

---

**Paradise Nursery** - Bringing Nature Into Your Home 🌱
