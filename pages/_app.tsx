import '@/styles/globals.css'
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { CartContext } from '@/context/CartContext';
import Navbar from '@/components/Navbar/Navbar';
import { Product } from '@/types/Product';

function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default App;
