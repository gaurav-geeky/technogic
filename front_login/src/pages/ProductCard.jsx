import React from "react";

const ProductCard = ({ product, seeProduct }) => {
    return (
        <div
            onClick={seeProduct}
            className="cursor-pointer border rounded p-4 hover:shadow-md transform transition-transform duration-300 ease-in-out 
            hover:scale-103 "
        >
            {/* Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded "
            />

            {/* Name */}
            <div className="flex items-center justify-around ">
                <h3 className="mt-3 font-semibold text-lg ">
                    {product.name}
                </h3>
                <div className=" mt-3"> &#8377; {product.price} </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 line-clamp-2 ">
                {product.description}
            </p>
        </div>
    );
};

export default ProductCard;
