import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import {  useSelector } from "react-redux";

export const SignUp = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const data = useSelector((state) => state.auth);
  console.log("🚀 ~ data:", data);

  // const handleSubmit = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // }

  const closeSignUp = () => {
    navigate("/");
  };

  const signupField = [
    {
      label: "First Name",
      name: "firstname",
      type: "text",
      placeholder: "Enter first name",
      autoComplete: "name",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastname",
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
      name: "confirmpassword",
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
          <form action="">
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
                    autoComplete={el.autoComplete}
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
          </form>
          <div className="navigate-login">
            <p>Already have an account?</p>
            <a href="#">Log In</a>
          </div>
        </div>
      </section>
    </>
  );
};
