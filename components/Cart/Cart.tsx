import React, { useState, useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import axios, {AxiosError} from 'axios';


type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
};

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);



  const handleCheckout = async () => {
    setLoading(true);

    try {

      const response = await axios.post('/api/checkout', {
        total: calculateTotal(cart),
        sessionId: Math.floor(Math.random() * 1000000000).toString(),
        buyOrder: Math.floor(Math.random() * 1000000000).toString(),
        returnUrl: 'http://127.0.0.1:3000/success',
      });
      console.log("this is response", response.data);
      const url = response.data.url;
      const token = response.data.token;
  
      const form = document.createElement('form');
      form.method = 'post';
      form.action = url;
  
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'token_ws';
      tokenInput.value = token;
  
      form.appendChild(tokenInput);
  
      document.body.appendChild(form);

      form.submit();
      
      // window.location = response.data.url;
    } catch (error: AxiosError | any) {
      console.error(error);
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      }
    }
    setLoading(false);
  };
  console.log('cart items:', cart); 

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
    <div className="container mx-auto px-4 py-8 mt-16">
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleCheckout}>
  {loading ? "Loading..." : "Checkout"}
</button>

    </div>
  )}
</div>

  );
};

export default Cart;
