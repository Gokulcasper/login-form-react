import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    // confirmpassword: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError]);

  const validate = (value) => {
    const error = {};
    const regexUsername = "^[A-Za-z0-9]{3,16}$";
    const regexEmail =
      "^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$";
    const regexPassword =
      "^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$";
    if (!value.username) {
      error.username = "Username is required!";
    } else if (!regexUsername.test(value.username)) {
      error.email =
        "Username should be 3-15 characters & not include special character!";
    }
    if (!value.email) {
      error.email = "Email is required!";
    } else if (!regexEmail.test(value.email)) {
      error.email = "It shouldnot be a valid email address!";
    }
    if (!value.password) {
      error.password = "Password is required!";
    } else if (!regexPassword.test(value.password)) {
      error.email =
        "Password should be above 8 characters & include atleast 1 uppercase , 1 number , 1 special character!";
    }
    // if (!value.password) {
    //   error.confirmpassword = "ConfirmPassword is required!";
    // }
    return error;
  };

  return (
    <div className="container">
      Object.keys(formError).length === 0 && isSubmit ? (
      <div className="ui message success">Signed in Successfully</div>
      <pre>{JSON.stringify(formValue, undefined, 2)}</pre>)
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
          <p>{formError.username}</p>
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
          <p>{formError.email}</p>
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
          <p>{formError.password}</p>
          {/* <div className="field">
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
          <p>{formError.confirmpassword}</p>
          */}

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
//               errorMessage={"It shouldnot be a valid email address"}
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
