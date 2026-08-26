import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
// import { ErroModal } from "./ErroModal.jsx";
import { ErrorModal } from "../../components/Modal/ErroModal";
import { SuccessModal } from "../../components/Modal/SuccessModal";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, success } = useSelector((state) => state.auth);
  console.log("🚀 ~ success:", success);
  console.log("🚀 ~ user:", user);

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
      autoComplete: "new-password",
      required: true,
    },
  ];

  const closeLogin = () => {
    navigate("/");
  };

  return (
    <>
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
            action=""
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
                <button type="submit">Log In</button>
              </div>
              <div className="navigate-signup">
                <span>Don't have an account</span>
                <NavLink to="/signup">Register Now</NavLink>
              </div>
            </div>
          </form>
        </div>
      </section>
      {success && <SuccessModal />}
      {isError && <ErrorModal />}
    </>
  );
};
