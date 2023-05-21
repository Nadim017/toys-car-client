import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { authContext } from '../AuthProvider/AuthProviders';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const { user } = useContext(authContext);
  const toy = useLoaderData();
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

    fetch(`https://toys-car-server-sage.vercel.app/toy/${toy._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(toyInfo),
    }).then((res) => res.json().then((data) => console.log(data)));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Update successful',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="w-full container mx-auto ">
      <h2 className="text-center text-2xl font-bold mt-5 mb-2">Update Toy :</h2>
      <div className="hero  bg-base-200 w-full ">
        <div className="hero-content w-full">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleAdd} className="shadow-lg w-full">
                <div className="flex gap-10">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo"
                      className="input input-bordered"
                      name="photo"
                      defaultValue={toy.photo}
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
                      defaultValue={toy.name}
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
                      defaultValue={toy.seller}
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
                      defaultValue={user?.email}
                      disabled
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
                      defaultValue={toy.sub}
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
                      defaultValue={toy.price}
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
                      defaultValue={toy.rating}
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
                      defaultValue={toy.quantity}
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
                      defaultValue={toy.details}
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
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

export default Update;
