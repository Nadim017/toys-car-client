import React from 'react';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/img/banner-2.avif")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello,</h1>
          <h1 className="mb-5 text-3xl font-bold">Welcome to Toy Cars Shop</h1>
          <p className="mb-5 text-sky-100">
            Discover a world of joy and imagination with our car toy website,
            where little drivers can explore a wide selection of high-quality,
            interactive toy cars that bring excitement and endless fun to
            playtime.
          </p>
          <button className="btn btn-primary">Visit Toy Cars</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
