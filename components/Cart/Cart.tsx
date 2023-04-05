import React, { useContext } from 'react';
import { CartContext } from '../MyEcommerceApp/MyEcommerceApp';

type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
};

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addItemToCart = (item: Product) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (itemToRemove: Product) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };


  const calculateTotal = (items: Product[]) => {
    const total = cart.reduce((acc, item) => {
      const price = parseFloat(item.price.slice(1)); // remove the $ symbol and convert to a float
      return acc + price;
    }, 0);
    return total.toFixed(2);
  };
  
  return (
    <div>
      <h2 className="text-lg font-medium">Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center py-2">
              <img src={item.image} alt={item.title} className="h-10 w-10" />
              <div className="ml-2">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button className="ml-auto text-red-600" onClick={() => removeItemFromCart(item)}>
                Remove
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Total:</p>
            <p className="text-gray-600">${calculateTotal(cart)}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
