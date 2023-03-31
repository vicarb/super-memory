// pages/products/[id].tsx

import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Product } from '@/types/Product';


type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  return (

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
      </div>

  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await axios.get<{ data: Product }>(`/api/products/${params?.id}`);
  return {
    props: {
      product: data.data,
    },
  };
};

export default ProductDetail;
