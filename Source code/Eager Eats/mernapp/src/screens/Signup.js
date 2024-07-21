import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', geolocation: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.geolocation }));
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.geolocation }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials');
    } else {
      navigate('/login'); // Redirect to login page upon successful signup
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

        {/* Right Side (Signup Form) */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="container" style={{ margin: "40px", padding: "20px", border: "2px solid #ccc", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <form onSubmit={handleSubmit} className="text-start">
              <div className="mb-3">
              <div className="text-center">
              <h2 style={{ color: "darkorange", fontWeight: 700 }}>Welcome to Eager Eats!</h2>
              <p className="lead">Create your account to get started</p>
            </div>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                  required
                  style={{ width: "100%", marginBottom: "10px", border: "1px solid #ccc", padding: "8px", borderRadius: "5px" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
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
                <label htmlFor="password" className="form-label">Password</label>
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
              <div className="mb-3">
                <label htmlFor="geolocation" className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="geolocation"
                  value={credentials.geolocation}
                  onChange={onChange}
                  required
                  style={{ width: "100%", marginBottom: "10px", border: "1px solid #ccc", padding: "8px", borderRadius: "5px" }}
                />
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <Link to="/login" className="m-3 btn btn-danger">
                Already a user? Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
