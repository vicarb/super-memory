import React from 'react';

const Success = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-24 h-24 text-green-500 stroke-current stroke-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Payment Successful</h2>
        <p className="text-gray-600 mb-8 text-center">Thank you for your purchase.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = '/'}>Return to homepage</button>
      </div>
    );
  };
  

export default Success;
