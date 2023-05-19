import React from 'react';

const Toys = ({ toy }) => {
  const { seller, toyName, subCategory, price, availableQuantity } = toy;
  return (
    <div className="overflow-x-auto container mx-auto mt-5 mb-5">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>view details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th>{seller}</th>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
              <button className="btn btn-primary">View Details button</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Toys;
