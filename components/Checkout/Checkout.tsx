import { useState } from 'react'

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  })

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
    <div className="container mx-auto py-8 mt-16">
  <div className="border rounded-md shadow-md">
    <div className="flex justify-between border-b pb-4 px-8">
      <h1 className="font-bold text-2xl py-4">Checkout</h1>
      <button className="text-blue-500 py-4">Back to cart</button>
    </div>
    <form className="px-8 pt-6 pb-8">
      <div className="mb-4">
        <label htmlFor="name" className="font-bold mb-2 block">Name</label>
        <input type="text" name="name" id="name" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="font-bold mb-2 block">Email</label>
        <input type="email" name="email" id="email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="font-bold mb-2 block">Address</label>
        <input type="text" name="address" id="address" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="font-bold mb-2 block">City</label>
        <input type="text" name="city" id="city" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="font-bold mb-2 block">Country</label>
        <input type="text" name="country" id="country" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="zip" className="font-bold mb-2 block">ZIP Code</label>
        <input type="text" name="zip" id="zip" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex justify-between border-t pt-6 mt-6">
        <div>
          <h2 className="font-bold text-lg">Order Summary</h2>
          <p className="text-gray-500">3 items</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500">Total</p>
          <h2 className="font-bold text-xl">$50</h2>
        </div>
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Pay Now</button>
      </div>
    </form>
  </div>
</div>


  )}

export default Checkout;