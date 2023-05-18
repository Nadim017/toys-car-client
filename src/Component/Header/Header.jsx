import React from 'react';
import './Header.css';
import logo from '../../assets/car_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-gray-300">
      <div className="flex-1 brand_title">
        <img src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-3xl">Toy Cars Shop</a>
      </div>
      <div className="nav_items">
        <Link to="/">Home</Link>
        <Link>All Toys</Link>
        <Link>My Toys</Link>
        <Link>Add A Toy</Link>
        <Link to="/blog">Blogs</Link>
        <Link>Login</Link>

        <div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
