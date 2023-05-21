import React from 'react';

const TabToy = ({ toy }) => {
  const { _id, seller, name, price, quantity, details, img, rating } = toy;
  console.log({ toy });
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[200px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name: {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <button>View details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabToy;
