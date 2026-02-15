

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import productarray from "./productarray";


const Home = () => {
  const navigate = useNavigate();


  // slider banner images
  const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/091f5b179696429.64fea5e228032.jpg",

    "https://images.unsplash.com/photo-1515940175183-6798529cb860?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pYyUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D",

    "https://image.slidesdocs.com/responsive-images/background/banner-featuring-3d-illustration-of-digital-devices-laptop-mobile-phone-and-tablet-pc-on-purple-wall-shelf-powerpoint-background_ed6b3f53e7__960_540.jpg",

    "https://www.digiwebart.com/wp-content/uploads/2020/12/Digital-Marketing-Company-In-Gujarat.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">

      {/* Intro Section */}
      <div className="w-[85%] md:w-[70%] mx-auto text-center my-6">

        <div className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          About Technogiq
        </div>

        <div className="text-gray-600 leading-relaxed text-sm md:text-base">
          Technogiq IT Solutions Pvt. Ltd. is a Bhopal-based IT services, outsourcing,
          and consulting firm founded in 2019, specializing in custom web applications,
          Android app development, digital marketing, and cloud computing.
          With a team of over 100 developers, they serve global clients,
          providing cost-effective business solutions, IT infrastructure,
          and AI-powered applications.
        </div>

      </div>

      {/* Slider BELOW heading */}
      <div className="flex justify-center">

        <div className="h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] w-[92%] sm:w-[85%] md:w-[80%] lg:w-[70%] overflow-hidden rounded">
          <img
            src={images[current]}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Products Section */}
      <div className="w-[92%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto my-10">

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">

          {productarray.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              seeProduct={() => navigate(`/dashboard/product/${product.id}`)}
            />
          ))}

        </div>

      </div>


    </div>
  );
};

export default Home;

// 
