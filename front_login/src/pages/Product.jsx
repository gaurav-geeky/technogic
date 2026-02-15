

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import productarray from './productarray';


const Product = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const myproduct = productarray.find(
    (item) => item.id === Number(id)
  );

  if (!myproduct) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="w-full">

      <div className="flex justify-end m-4">
        <button
          className=" px-4 py-1 rounded bg-pink-300  font-bold 
        transform transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={() => navigate("/dashboard/home")}
        >
          Home
        </button>
      </div>


      {/* product detail */}
      <div className='w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto my-6 md:my-10 border rounded-lg shadow-sm flex flex-col md:flex-row gap-6 p-4 bg-amber-50 md:p-6'>

        {/* Image */}
        <div className="w-full md:w-1/2 h-60 sm:h-72 md:h-64 overflow-hidden rounded">
          <img
            src={myproduct.image}
            alt={myproduct.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className='w-full md:w-1/2 flex flex-col justify-center'>

          <div className="text-md text-gray-700">
            ₹ {myproduct.price}
          </div>

          <div className="text-lg sm:text-xl md:text-2xl font-semibold mt-3 md:mt-6">
            {myproduct.name}
          </div>

          <p className="text-gray-600 mt-3 md:mt-4 text-sm sm:text-base">
            {myproduct.description}
          </p>

        </div>

      </div>





    </div>
  )
}

export default Product;
