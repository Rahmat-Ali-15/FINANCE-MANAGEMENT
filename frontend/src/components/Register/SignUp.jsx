import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";
import {  useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signupUser } from "../../features/auth/authSlice";
import { ErrorModal } from "../Modal/ErroModal";
import { SuccessModal } from "../Modal/SuccessModal";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {success, isError} = useSelector((state) => state.auth)

  //# Form 
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
  })
  const handleSubmit = (e) => {
   e.preventDefault();

   dispatch(signupUser(formData));
  }

  const handleInput = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

  const closeSignUp = () => {
    navigate("/");
  };

  const signupField = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Enter first name",
      autoComplete: "name",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Enter last name",
      autoComplete: "name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      autoComplete: "email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Create password",
      autoComplete: "new-password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      autoComplete: "new-password",
      required: true,
    },
  ];

  return (
    <>
      <section
        className="signup-section"
        onClick={closeSignUp}
      >
        <div
          className="signup-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            className="signup-close"
            onClick={closeSignUp}
          >
            ×
          </button>
          <div className="signup-heading">
            <h3>NEW REGISTRATION</h3>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="signup-card-details">
              {signupField.map((el, id) => (
                <div
                  key={id}
                  className="signup-details"
                >
                  <label htmlFor={el.name}>{el.label}</label>
                  <input
                    type={el.type}
                    placeholder={el.placeholder}
                    name={el.name}
                    autoComplete={el.autoComplete}
                    required={el.required}
                    onChange={handleInput}
                    value={formData[el.name]}
                  />
                </div>
              ))}
              <div className="term-condition">
                <input
                  type="checkbox"
                  defaultChecked
                />
                <p>
                  I agree to the <a href="#">Term of Service </a>and{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </div>

              <div className="signup-btn">
                <button type="submit">Create Account</button>
              </div>
            </div>
          </form>
          <div className="navigate-login">
            <p>Already have an account?</p>
            <NavLink to="/login">Log In</NavLink>
          </div>
        </div>
      </section>
      {
        success && <SuccessModal redirectPath="/login" />
      }
      {
        isError && <ErrorModal redirectPath="/signup" /> 
      }
    </>
  );
};
