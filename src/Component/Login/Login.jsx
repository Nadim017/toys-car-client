import React, { useContext, useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../../Component/AuthProvider/AuthProviders';

import Register from './../Register/Register';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { signIn, GoogleSignIn, githubSign } = useContext(authContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathName || '/';
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
        navigate(from, { replace: true });
        setSuccess('Login successful');

        setError('');
      })
      .catch((err) => {
        console.error(err);
        setError('email or password is incorrect');
        setSuccess('');
      });
  };
  const signWithGoogle = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedInUser);
        // setUser(loggedInUser);
      })
      .catch((err) => {
        console.log('Error', err.message);
      });
  };

  return (
    <div className="w-2/3 mx-auto ">
      <h2 className="text-center text-2xl font-bold mt-5 mb-2">
        Please login :
      </h2>
      <div className="hero  bg-base-200 w-full ">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="shadow-lg">
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
                  <label className="label">
                    <p href="#" className="label-text-alt link link-hover">
                      don't have an account?
                      <Link to="/register" className="underline text-blue-300">
                        Register
                      </Link>
                    </p>
                  </label>
                  <p className="text-blue-300">{success}</p>
                  <p className="text-red-500">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="form-control mt-6">
                <button className="btn btn-secondary" onClick={signWithGoogle}>
                  Google Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
