import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials');
    }
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('authToken', json.authToken);
      console.log(localStorage.getItem('authToken'));
      navigate('/');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Side (Image) */}
        <div className="col-md-6 d-none d-md-block p-0" style={{ backgroundImage: `url('./AuthImage.jpg')`, backgroundSize: 'cover', height: '100vh' }}>
          <div className="overlay d-flex align-items-center justify-content-center text-white">
          
          </div>
        </div>

        {/* Right Side (Login Form) */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="container" style={{ margin: "40px", padding: "20px", border: "2px solid #ccc", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <form onSubmit={handleSubmit} className="text-start">
              <div className="mb-3">
                <div className="text-center text-black mb-4">
                  <h2 className="mb-3" style={{ color: "darkorange", fontWeight: 700 }}>Welcome Back!</h2>
                  <p className="lead">Login to continue to Eager Eats</p>
                </div>

                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  style={{ width: "100%", marginBottom: "10px", border: "1px solid #ccc", padding: "8px", borderRadius: "5px" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  id="exampleInputPassword1"
                  required
                  style={{ width: "100%", marginBottom: "10px", border: "1px solid #ccc", padding: "8px", borderRadius: "5px" }}
                />
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <Link to="/createuser" className="m-3 btn btn-danger">
                I'm a new user
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
