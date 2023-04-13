import React, { createContext, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  quantity: number;

};

type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
