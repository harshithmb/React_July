import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [redirectUser, setRedirectUser] = useState(false);

  const user = {
    email: "ranjan@gmail.com",
    pass: "she",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === user.email && pass === user.pass) {
      setRedirectUser(true);
      console.log("Matched");
    } else {
      alert("Not Matched");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="m-5">
      {redirectUser && <Redirect to="/" />}
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          value={email}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <input type="file" accept="image/*" />
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignIn;
