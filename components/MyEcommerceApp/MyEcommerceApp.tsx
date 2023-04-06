import React, { useState, useEffect, useContext } from 'react';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import { CartContext } from '@/context/CartContext';
import CenteredHeader from '../CenteredHeader/CenteredHeader';
import { Product } from '@/types/Product';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    price: '$10.00',
    description: 'This is a description for product 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Product 2',
    price: '$20.00',
    description: 'This is a description for product 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Product 3',
    price: '$30.00',
    description: 'This is a description for product 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Product 4',
    price: '$40.00',
    description: 'This is a description for product 4',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Product 5',
    price: '$50.00',
    description: 'This is a description for product 5',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Product 6',
    price: '$60.00',
    description: 'This is a description for product 6',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Product 7',
    price: '$70.00',
    description: 'This is a description for product 7',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Product 8',
    price: '$80.00',
    description: 'This is a description for product 8',
    image: 'https://via.placeholder.com/150',
  },
];

export const MyEcommerceApp = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <CenteredHeader header="Products" subheader="Explore our collection of products, 24 hrs delivery" />
      <ProductList products={mockProducts} />
      <Cart />
    </>
  );
};

export default MyEcommerceApp;
