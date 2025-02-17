import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 w-11/12 mx-auto rounded-xl p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md glass">
        <h1 className="text-3xl font-bold text-green-800 text-center">Contact Us</h1>
        <form className="mt-4 space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800" />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800" />
          <textarea placeholder="Description" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800" rows="4"></textarea>
          <button type="submit" className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
