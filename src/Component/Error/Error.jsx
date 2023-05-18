import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex justify-center items-start mt-5 mb-5 ">
      <div>
        <h3 className="">Page Not Found !!!!!!!!!! 😥</h3>
        <img src="/error.jpg" className="h-50%" alt="" />
        <p className=" mt-3 mb-3">Error : 444000000044444!</p>
        <Link to="/">
          <div className="text-center">
            <button className="btn btn-primary ">Go Back</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
