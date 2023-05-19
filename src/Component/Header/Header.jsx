import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/car_logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProviders';

const Header = () => {
  const { user, logOut } = useContext(authContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="navbar bg-slate-100 text-black p-3">
      <div className="flex-1 brand_title">
        <img src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-2xl">Toy Cars Shop</a>
      </div>
      <div className="nav_items ">
        <NavLink to="/">Home</NavLink>
        <NavLink>All Toys</NavLink>
        <NavLink to="/blog">Blogs</NavLink>

        {user ? (
          <div className="flex items-center">
            <NavLink>My Toys</NavLink>
            <NavLink>Add A Toy</NavLink>{' '}
            <NavLink onClick={handleLogOut} className="btn btn-primary">
              Logout
            </NavLink>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  className="text-black"
                  src={user?.photoURL}
                  title={user?.displayName}
                />
              </div>
            </label>
          </div>
        ) : (
          <div className="signIn">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
