import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Userprovider } from './context/user-context';
import { Productprovider } from './context/products-context';
import { CartProvider } from './context/cart-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Userprovider>
        <Productprovider>
          <CartProvider>
            <App/>
          </CartProvider>
        </Productprovider>
      </Userprovider>
    </BrowserRouter>
    
  </React.StrictMode>
)
