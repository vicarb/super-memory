import { useRouter } from 'next/router';
import { Product } from '@/types/Product';
import { mockProducts } from '@/components/MyEcommerceApp/MyEcommerceApp';
import { log } from 'console';
import { mock } from 'node:test';
import { motion } from 'framer-motion';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '@/context/CartContext';



const ProductDetail = () => {
  const { cart, setCart } = useContext(CartContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  console.log(mockProducts);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);


  const product: Product | undefined  = mockProducts.find((p) => p.id === parseInt(id as string));
  console.log("product",product);
  
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

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>

    <div
    className={`mt-24 container mx-auto my-10 px-4 lg:px-0 ${
      isLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'
    }`}
  >
    <div className="mt-24 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
        src="https://cdn.shopify.com/s/files/1/0352/4571/9597/products/River_Black_Front_S_close-up_540x.jpg?v=1657634429"
          alt={product.title}
          className="w-full object-cover object-center rounded-lg shadow-lg"
          style={{ maxHeight: '500px' }}
        />
      </div>
      
      <div className="w-full lg:w-1/2 lg:pl-10">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 text-lg mb-6 ">{product.description}</p>
        <div className="flex items-center mb-8">
          <span className="text-3xl font-bold">{product.price}</span>
          <button className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300">
            Add to Cart
          </button>
        </div>
        <p className="text-gray-700  mb-4 text-lg">
          Free Shipping on All Orders Over $50
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-lg">Quantity:</span>
          <div className="flex items-center">
            <button className="border border-gray-300 py-1 px-2 rounded-lg mr-2 hover:border-gray-400 transition-all duration-300">
              -
            </button>
            <span className="text-gray-700 font-bold text-lg">1</span>
            <button className="border border-gray-300 py-1 px-2 rounded-lg ml-2 hover:border-gray-400 transition-all duration-300">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default ProductDetail;