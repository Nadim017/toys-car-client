import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/car_logo.png';
import { Link } from 'react-router-dom';
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
    <div className="navbar bg-black text-white p-3">
      <div className="flex-1 brand_title">
        <img src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-2xl">Toy Cars Shop</a>
      </div>
      <div className="nav_items">
        <Link to="/">Home</Link>
        <Link>All Toys</Link>
        <Link to="/blog">Blogs</Link>

        {user ? (
          <div>
            <Link>My Toys</Link>
            <Link>Add A Toy</Link> <Link onClick={handleLogOut}>Logout</Link>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} />
              </div>
            </label>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
