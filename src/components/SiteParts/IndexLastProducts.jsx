import React, { useEffect, useState } from 'react'

export default function IndexLastProducts() {
  const[products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  },[]);
  return (
    <>
      {products ? products.map((product) => (
        <div key={product.id} className="p-4">
          <img src={product.thumbnail.image_path} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-800 font-semibold">${product.price}</p>
        </div>
      )) : (
        <div className="p-4">Loading...</div>
      )}
    </>
  )
}
