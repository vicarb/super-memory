import { useState, useContext } from 'react'

import { CartContext } from '@/context/CartContext';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  })

  const { cart } = useContext(CartContext);

  // calculate the total price of all cart items
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    // Here you can trigger the function of your third-party API to process the payment
    console.log(formData)
  }
  return(
    <div className="container mx-auto mt-24">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 px-4">
        <div className="border rounded-md shadow-md p-4">
          <h2 className="font-bold text-lg mb-2">Delivery Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="123 Main St"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="Anytown"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
                State
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="state"
                type="text"
                placeholder="CA"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="zip">
                Zip
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="zip"
                type="text"
                placeholder="12345"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-8">
  <div className="border rounded-md shadow-md p-4">
    <h2 className="font-bold text-lg mb-2">Order Summary</h2>
    <div className="flex justify-between border-t pt-2 mt-2">
      <p className="text-gray-500">3 items</p>
      <p className="text-gray-500">$50</p>
    </div>
    <div className="flex justify-between border-t pt-2 mt-2">
      <p className="text-gray-500">Delivery</p>
      <p className="text-gray-500">$5</p>
    </div>
    <div className="flex justify-between border-t pt-2 mt-2">
      <p className="text-gray-500 font-bold">Total</p>
      <p className="text-gray-500 font-bold">$55</p>
    </div>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-blue-600">
      Pay Now
    </button>
  </div>
</div>
</div>
</div>


  )}

export default Checkout;