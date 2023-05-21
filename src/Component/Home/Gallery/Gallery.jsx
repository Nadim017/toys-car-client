import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mt-5 mb-5 container mx-auto">
      <div className="card w-96 glass">
        <figure>
          <img className="w-full h-[200px]" src="/img/gal-1.avif" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
          <p>How to park your car at your garage?</p>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img className="w-full h-[200px]" src="/img/gal-2.avif" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sports Car</h2>
          <p>A sleek and fast sports car toy for endless racing fun!</p>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img className="w-full h-[200px]" src="/img/gal-3.avif" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mini Police Car</h2>
          <p>
            It will give you a vive of like a police is running to arrest the
            thief
          </p>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img className="w-full h-[200px]" src="/img/gal-4.avif" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Regular Car</h2>
          <p>Unique taxy car which is waiting to take passenger</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img className="w-full h-[200px]" src="/img/gal-5.avif" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mini Police Car</h2>
          <p>Unique design for kids to play and give the vive of real car</p>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img className="w-full h-[200px]" src="/img/gal-6.avif" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Racing Car</h2>
          <p>
            Look and design is in top notch,it will give you feel something new
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
