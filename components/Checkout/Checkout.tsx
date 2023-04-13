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
    <div class="container mx-auto p-4 mt-16">
  <div class="md:flex md:justify-center">
    <div class="md:w-1/2 px-8 py-6">
      <h2 class="font-bold text-lg mb-2">Delivery Information</h2>
      <form class="grid grid-cols-2 gap-4">
        <div class="col-span-2 sm:col-span-1">
          <label for="name" class="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            class="form-input w-full"
            placeholder="John Doe"
          />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label for="email" class="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            class="form-input w-full"
            placeholder="johndoe@example.com"
          />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label for="address" class="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            id="address"
            type="text"
            class="form-input w-full"
            placeholder="123 Main St"
          />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label for="city" class="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            id="city"
            type="text"
            class="form-input w-full"
            placeholder="San Francisco"
          />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label for="state" class="block text-gray-700 font-bold mb-2">
            State
          </label>
          <input
            id="state"
            type="text"
            class="form-input w-full"
            placeholder="CA"
          />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label for="zip" class="block text-gray-700 font-bold mb-2">
            ZIP
          </label>
          <input
            id="zip"
            type="text"
            class="form-input w-full"
            placeholder="94103"
          />
        </div>
        <div class="col-span-2 mt-4">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
    <div class="md:w-1/2 px-8 py-6">
      <div class="border rounded-md shadow-md p-4">
        <h2 class="font-bold text-lg mb-2">Order Summary</h2>
        <div class="flex justify-between border-t pt-2 mt-2">
          <p class="text-gray-500">3 items</p>
          <p class="text-gray-500">$50</p>
        </div>
        <div class="flex justify-between border-t pt-2 mt-2">
          <p class="text-gray-200">Hello</p>
          </div>
        <div class="flex justify-between border-t pt-2 mt-2">
          <p class="text-gray-500">Shipping</p>
          <p class="text-gray-500">$5</p>
        </div>
        <div class="flex justify-between border-t pt-2 mt-2">
          <p class="text-gray-500">Tax</p>
          <p class="text-gray-500">$2.5</p>
        </div>
        <div class="flex justify-between border-t pt-2 mt-2">
          <p class="font-bold">Total</p>
          <p class="font-bold">$57.5</p>
        </div>
      </div>
    </div>
  </div>
</div>


  )}

export default Checkout;