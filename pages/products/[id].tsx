import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/types/Product';

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get<{ data: Product }>(`/api/products/${id}`);
      setProduct(data.data);
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="flex flex-wrap justify-center">
      {product && <ProductDetail product={product} />}
    </div>
  );
};

export default ProductPage;