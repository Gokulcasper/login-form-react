import React, { useState } from "react";
import "./App.css";

const App = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
  };

  const validate = (value) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.username) {
      error.username = "Username is required!";
    }
    if (!value.email) {
      error.username = "Email is required!";
    }
    if (!value.password) {
      error.username = "Password is required!";
    }
    if (!value.password) {
      error.username = "ConfirmPassword is required!";
    }
    return error;
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui underline"></div>
        <div className="ui form">
          <div className="field">
            <label> UserName: </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValue.username}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label> Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label> Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label> ConfirmPassword: </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formValue.confirmpassword}
              pattern={initialValue.password}
              onChange={handleChange}
            />
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;

// <div className="field">
//             <label> UserName: </label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValue.username}
//               pattern={"^[A-Za-z0-9]{3,16}$"}
//               errorMessage={
//                 "Username should be 3-15 characters & not include special character"
//               }
//               required={true}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="field">
//             <label> Email: </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formValue.email}
//               errorMessage={"It should be a valid email address"}
//               required={true}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="field">
//             <label> Password: </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValue.password}
//               pattern={
//                 "^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$"
//               }
//               errorMessage={
//                 "Password should be above 8 characters & include atleast 1 uppercase , 1 number , 1 special character"
//               }
//               required={true}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="field">
//             <label> ConfirmPassword: </label>
//             <input
//               type="password"
//               name="confirmpassword"
//               placeholder="Confirm Password"
//               value={formValue.confirmpassword}
//               pattern={initialValue.password}
//               errorMessage={"Password not match!"}
//               required={true}
//               onChange={handleChange}
//             />
//           </div>
