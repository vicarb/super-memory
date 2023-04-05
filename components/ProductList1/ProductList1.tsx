import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Product } from '@/types/Product';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get<{ data: Product[] }>('/api/products');
      setProducts(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <div className="w-full md:w-1/3 p-4" key={product._id}>
            <Link href={`/products/${product._id}`}>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="font-bold text-lg">{product.name}</h2>
                  <p className="mt-2">{product.description}</p>
                  <p className="mt-2">${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
