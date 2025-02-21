import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
            <Link to={'/'} className="items"><h1>MERN- Blog App</h1></Link>
        </div>
        <div className="right">
            <Link to={'/'} className="items"><h3>Home</h3></Link>
            <Link to={'/login'} className="items"><h3>Login</h3></Link>
            <Link to={'/register'} className="items"><h3>Register</h3></Link>
            <Link to={'/profile'} className="items"><h3>Profile</h3></Link>
            <Link to={'/addblog'} className="items"><h3>Add Blog</h3></Link>
            <div className="logout">
                <button>Logout</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
