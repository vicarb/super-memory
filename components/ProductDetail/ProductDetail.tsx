import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Product } from '@/types/Product';
import { useState } from 'react';

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
      
    </div>
    <div className="mt-4">
        <label className="text-lg font-bold mr-2" htmlFor="quantity">
          Quantity:
        </label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border rounded-md px-2 py-1 mr-2"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </>
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