import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import HeaderLoggedOut from "./components/HeaderLoggedOut";

function App() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8080/register", {
        username,
        email,
        password,
      });
      console.log("User was successfully created");
    } catch (e) {
      console.log("There was an error");
    }
  };

  return (
    <div className="App">
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <a href="/" className="text-white">
              ComplexApp
            </a>
          </h4>
          <HeaderLoggedOut />
        </div>
      </header>

      <div className="container py-md-5">
        <div className="row align-items-center">
          <div className="col-lg-7 py-3 py-md-5">
            <h1 className="display-3">Remember Writing?</h1>
            <p className="lead text-muted">
              Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
              posts that are reminiscent of the late 90&rsquo;s email forwards?
              We believe getting back to actually writing is the key to enjoying
              the internet again.
            </p>
          </div>
          <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  id="username-register"
                  name="username"
                  className="form-control"
                  type="text"
                  placeholder="Pick a username"
                />
              </div>
              <div className="form-group">
                <label className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-register"
                  name="email"
                  className="form-control"
                  type="text"
                  placeholder="you@example.com"
                />
              </div>
              <div className="form-group">
                <label className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password-register"
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="py-3 mt-4 btn btn-lg btn-success btn-block"
              >
                Sign up for ComplexApp
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="border-top text-center small text-muted py-3">
        <p>
          <a href="/" className="mx-1">
            Home
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/about-us">
            About Us
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/terms">
            Terms
          </a>
        </p>
        <p className="m-0">
          Copyright &copy; 2020{" "}
          <a href="/" className="text-muted">
            ComplexApp
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
