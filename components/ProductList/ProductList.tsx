import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

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
    setCart([...cart, product]);
    console.log("cart", cart);
    
  };

  return (
    <div className="container mx-auto py-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
      {products &&
        products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="mx-auto" />
            <h3 className="text-lg font-medium my-2">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
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
