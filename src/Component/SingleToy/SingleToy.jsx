import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
  const toy = useLoaderData();
  const { img, name, seller, email, price, quantity, details, rating } = toy;
  console.log(toy);

  return (
    <div className="w-150 mx-auto mt-16 p-4">
      <div className="card w-150 bg-base-100 shadow-xl p-3">
        <figure>
          <img
            className="w-96 h-[200px] rounded-lg"
            src={
              img
                ? img
                : 'https://images.unsplash.com/photo-1676084616388-b5d0967f4acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
            }
            alt="img"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-center text-2xl font-bold">Name: {name}</h2>
          <div className="flex gap-10 justify-evenly items-center">
            <div>
              <p className="text-xl font-bold">Seller: {seller}</p>
              <p className="text-xl font-bold">Email: {email}</p>
              <h4 className="text-xl font-bold">Price: {price}</h4>
            </div>
            <div>
              <h4 className="text-xl font-bold">Quantity: {quantity}</h4>
              <h4 className="text-xl font-bold">Rating: {rating}</h4>
            </div>
          </div>
          <p className="text-xl">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
