import React from 'react';
import { Link } from 'react-router-dom';
import MyToys from '../../MyToys/MyToys';

const Toys = ({ toy }) => {
  const { _id, seller, toyName, subCategory, price, availableQuantity } = toy;
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
              <button className="btn btn-primary">
                {/**<Link to={`/toy/:${_id}`}>View Details button</Link>*/}
                <Link to={`/toy/:${_id}`}>View Details button</Link>
              </button>
            </td>
            {<MyToys></MyToys> ? (
              <>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button className="btn btn-primary">Delete</button>
                </td>
              </>
            ) : (
              ''
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Toys;
