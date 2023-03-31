import { useState, useEffect } from 'react';
import axios from 'axios';
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
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
