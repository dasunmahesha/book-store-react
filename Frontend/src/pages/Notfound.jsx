import React from 'react'
import BackButton from "../components/Backbutton";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white border rounded-lg p-8 shadow-lg w-3/4 h-1/2 transform transition-transform duration-300 hover:scale-105">
        <BackButton />

        <h1 className="text-9xl text-center text-red-600 m-8">404</h1>
        <h2 className="text-4xl text-center text-gray-800 mb-4">Not Found</h2>
        <p className="text-lg text-gray-800 text-center">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default Notfound
