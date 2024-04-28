import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("auth/test");
      console.log("data: ", res.data);
    } catch (err) {
      console.error("error: ", err);
    }
    
  };

  return (
    <>
      <NavbarComponent />
      <form onSubmit={loginUser} className='w-25 m-auto p-4 mt-5 border border-dark rounded'>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot Password?
        </p>
        <p className="forgot-password text-right">
          Not a Member? <Link to="/signup">Want to sign up?</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
