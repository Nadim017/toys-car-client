import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProviders';
import Toys from '../AllToys/Toys/Toys';

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(authContext);
  console.log(myToys);

  useEffect(() => {
    fetch(`https://toys-car-server-sage.vercel.app/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  return (
    <div>
      {myToys.slice(0, 20).map((toy) => (
        <Toys key={toy._id} toy={toy}></Toys>
      ))}
    </div>
  );
};

export default MyToys;
