import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
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

  const closeSignUp = () => {
    navigate("/");
  };

  return (
    <>
      <section className="login-section">
        <div className="login-card">
        <button
          type="button"
          className="login-close"
          onClick={closeSignUp}
        >
          ×
        </button>
        <div className="login-heading">
            <h3>Login</h3>
        </div>
        <form action="">
          <div className="login-card-details">
            {loginField.map((el, id) => (
              <div key={id} className="login-details">
                <label htmlFor={el.name}>{el.label}</label>
                <input
                  type={el.type}
                  placeholder={el.placeholder}
                  name={el.name}
                  autoComplete={el.autoComplete}
                  required={el.required}
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
    </>
  );
};
