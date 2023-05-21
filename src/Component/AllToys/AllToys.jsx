import React, { useContext, useEffect, useState } from 'react';
import Toys from './Toys/Toys';
import { authContext } from '../AuthProvider/AuthProviders';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const { user, loading } = useContext(authContext);
  console.log(toys);

  useEffect(() => {
    fetch('https://toys-car-server-sage.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center mt-10 mb-10">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <>
          {toys.map((toy) => (
            <Toys key={toy._id} toy={toy}></Toys>
          ))}
        </>
      )}
    </div>
  );
};

export default AllToys;
