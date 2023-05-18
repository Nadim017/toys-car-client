import React, { useContext, useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../../Component/AuthProvider/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Register from './../Register/Register';

const Login = () => {
  const [error, setError] = useState('');

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

        setError('');
      })
      .catch((err) => {
        console.error(err);
        setError('email or password is incorrect');
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
  const handleGithubSignIn = () => {
    githubSign()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedInUser);
      })
      .catch((err) => {
        console.log('Error', err.message);
      });
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-5 mb-2">
        Please login :
      </h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p href="#" className="label-text-alt link link-hover">
                    don't have an account? <Link to="/register">Register</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
