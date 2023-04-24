import '@/styles/globals.css'
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { CartContext } from '@/context/CartContext';
import Navbar from '@/components/Navbar/Navbar';
import { Product } from '@/types/Product';
import Footer from '@/components/Footer/Footer';

function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </CartContext.Provider>
  );
}

export default App;
