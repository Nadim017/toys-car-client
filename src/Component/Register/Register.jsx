import React, { useContext, useState } from 'react';
import { authContext } from '../../Component/AuthProvider/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(authContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // if (password < 6) {
    //   setError('Please enter password 6 or than 6 character');
    // }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
        setError('password should be 6 or than 6 character');
      });
  };
  return (
    <div className="w-3/2 mx-auto">
      <h2 className="text-center text-2xl font-bold mt-5 mb-2">
        Please Register :
      </h2>
      <div className="hero  bg-base-200 w-full">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body w-full">
              <div className="form-control">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <label className="label">
                <p href="#" className="label-text-alt link link-hover">
                  Already have an account?{' '}
                  <Link to="/login" className="underline text-blue-300">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
