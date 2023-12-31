import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyToys from '../../MyToys/MyToys';
import { authContext } from '../../AuthProvider/AuthProviders';

const Toys = ({ toy, handleDelete, children, handleUpdate }) => {
  const { _id, seller, name, sub, price, quantity, email } = toy;

  const { user } = useContext(authContext);

  return (
    <div className="overflow-x-auto container mx-auto mt-5 mb-5">
      <table className="table w-full md:w-[100%] sm:w-[100%]">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>view details</th>
            {children ? (
              <>
                <th></th>
                <th></th>
              </>
            ) : (
              ''
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th>{seller}</th>
            <td>{name}</td>
            <td>{sub}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
              <Link to={`/toy/${_id}`}>
                <button className="btn btn-primary">View Details button</button>
              </Link>
            </td>
            {children}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Toys;
