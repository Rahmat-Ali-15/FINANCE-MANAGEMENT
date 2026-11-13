import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { ErrorModal } from "../../components/Modal/ErroModal";
import { SuccessModal } from "../../components/Modal/SuccessModal";
import { Loader } from "../../components/Loader/Loader";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, success, isLoading, isAuthenticated } = useSelector((state) => state.auth);
  console.log("🚀 ~ isAuthenticated:", isAuthenticated);

  //# Login user
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(loginData));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginField = [
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
      autoComplete: "current-password",
      required: true,
    },
  ];

  const closeLogin = () => {
    navigate("/");
  };

  return (
    <>
      {isLoading && (
        <div className="global-loader-overlay">
          <Loader />
        </div>
      )}
      <section
        className="login-section"
        onClick={closeLogin}
      >
        <div
          className="login-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="login-close"
            onClick={closeLogin}
          >
            ×
          </button>
          <div className="login-heading">
            <h3>Login</h3>
          </div>
          <form
            onSubmit={handleSubmit}
          >
            <div className="login-card-details">
              {loginField.map((el, id) => (
                <div
                  key={id}
                  className="login-details"
                >
                  <label htmlFor={el.name}>{el.label}</label>
                  <input
                    type={el.type}
                    placeholder={el.placeholder}
                    name={el.name}
                    autoComplete={el.autoComplete}
                    required={el.required}
                    onChange={handleInput}
                    value={loginData[el.name]}
                  />
                </div>
              ))}
              <div className="login-btn">
                <button type="submit" disabled={isLoading}>
                  Log In
                </button>
              </div>
              <div className="navigate-signup">
                <span>Don't have an account</span>
                <NavLink to="/signup">Register Now</NavLink>
              </div>
            </div>
          </form>
        </div>
      </section>
      {
        isLoading ? "Loading..." : <>
          {success && <SuccessModal redirectPath="/home" />}
          {isError && <ErrorModal redirectPath="/login" />}
        </>
      }
    </>
  );
};
