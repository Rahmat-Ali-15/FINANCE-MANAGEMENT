import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export const SignUp = () => {
  const navigate = useNavigate();

  const closeSignUp = () => {
    navigate("/");
  };

  const signupField = [
    {
      label: "First Name",
      name: "firstname",
      type: "text",
      placeholder: "Enter first name",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastname",
      type: "text",
      placeholder: "Enter last name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Create password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm password",
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
          <div className="signup-card-details">
            {signupField.map((el, id) => (
              <div
                key={id}
                className="signup-details"
              >
                <label htmlFor="">{el.label}</label>
                <input
                  type={el.type}
                  placeholder={el.placeholder}
                  name={el.name}
                  required={el.required}
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
              <button>Create Account</button>
            </div>
          </div>
          <div className="navigate-login">
            <p>Already have an account?</p>
            <a href="#">Log In</a>
          </div>
        </div>
      </section>
    </>
  );
};
