import React, { useEffect, useState } from 'react';
import Toys from './Toys/Toys';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch('https://toys-car-server-sage.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
  return (
    <div>
      {toys.slice(0, 20).map((toy) => (
        <Toys key={toy._id} toy={toy}></Toys>
      ))}
    </div>
  );
};

export default AllToys;
