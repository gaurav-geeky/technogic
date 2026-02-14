// import React from 'react'
// import { useParams } from 'react-router-dom';
// import productarray from './productarray';


// const Product = () => {

//   const { id } = useParams();

//   const myproduct = productarray.find(
//     (item) => item.id === Number(id)
//   );

//   if (!myproduct) {
//     return <h1> Product not found.</h1>
//   }

//   return (
//     <>
//       <h1> this is product page .... </h1>

//       <div>
//         <img
//           src={myproduct.image}
//           alt={myproduct.name}
//           className='w-full h-full object-cover'
//         />
//       </div>
//     </>
//   )
// }

// export default Product; 

import React from 'react'
import { useParams } from 'react-router-dom';
import productarray from './productarray';

const Product = () => {

  const { id } = useParams();

  const myproduct = productarray.find(
    (item) => item.id === Number(id)
  );

  if (!myproduct) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="w-[80%] md:w-[60%] mx-auto my-10">

      <div className="h-64 overflow-hidden rounded">
        <img
          src={myproduct.image}
          alt={myproduct.name}
          style={{ height: "300px", width: "300px", border: "1px solid black"}}
          // className="w-full h-full "
        />
      </div>

      <div>₹ {myproduct.price} </div>

      <div className="text-2xl font-semibold mt-6">
        {myproduct.name}
      </div>

      <p className="text-gray-600 mt-4">
        {myproduct.description}
      </p>

    </div>
  )
}

export default Product;
