import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

type ProductListProps = {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, newProduct]);
    }
  };
  
  return (
    <div className="container mx-auto py-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
      {products &&
        products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <Link href={`/products/${product.id}`}>
            <img src="https://cdn.shopify.com/s/files/1/0352/4571/9597/products/River_Black_Front_S_close-up_540x.jpg?v=1657634429" alt={product.title} className="mx-auto" />
            <h3 className="text-lg font-medium my-2">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            </Link>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-bold">{product.price}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default ProductList;
