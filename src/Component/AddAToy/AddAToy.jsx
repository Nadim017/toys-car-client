import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

const AddAToy = () => {
  const handleAdd = (event) => {
    event.preventDefault();

    const photo = event.target.photo.value;
    const seller = event.target.seller.value;
    const email = event.target.email.value;
    const sub = event.target.sub.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const quantity = event.target.quantity.value;
    const details = event.target.details.value;
    const toyInfo = {
      photo,
      seller,
      email,
      sub,
      price,
      rating,
      quantity,
      details,
    };

    fetch('https://toys-car-server-sage.vercel.app/toy', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(toyInfo),
    }).then((res) => res.json().then((data) => console.log(data)));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="w-full container mx-auto ">
      <h2 className="text-center text-2xl font-bold mt-5 mb-2">Add Toy :</h2>
      <div className="hero  bg-base-200 w-full ">
        <div className="hero-content w-full">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleAdd} className="shadow-lg w-full">
                <div className="flex gap-10">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Phot URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo"
                      className="input input-bordered"
                      name="photo"
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      name="name"
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Seller</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Seller Name"
                      className="input input-bordered"
                      name="seller"
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Sub Category</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Sub category"
                      className="input input-bordered"
                      name="sub"
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      placeholder="price"
                      className="input input-bordered"
                      name="price"
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="number"
                      placeholder="rating"
                      className="input input-bordered"
                      name="rating"
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Quantity"
                      className="input input-bordered"
                      name="quantity"
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Details description</span>
                    </label>
                    <input
                      type="textarea"
                      placeholder="details"
                      className="input input-bordered"
                      name="details"
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
