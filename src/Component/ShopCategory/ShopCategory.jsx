import React, { useEffect, useState } from 'react';

const ShopCategory = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);

  useEffect(() => {
    fetch('https://toys-car-server-sage.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toys]);
  return (
    <div>
      <div className="text-center">
        <div className="btn-group ">
          <button className="btn btn-active">Sports Car</button>
          <button className="btn">Truck</button>
          <button className="btn">Regular Car</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
