import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/types/Product';
import Layout from '@/components/Layout/Layout';

const ProductDetail = ({ product }: { product: Product }) => {
    return (
      <div className="w-3/5 mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-6">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
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
    <h1>Heyy</h1>
    
      {product && <Layout>
      <ProductDetail product={product}/>
    </Layout>}
    </div>
  );
};

export default ProductPage;