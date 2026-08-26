import "./ErrorModal.css";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearError } from "../../features/auth/authSlice";

export const ErrorModal = () => {
    const dispatch = useDispatch()
  const { errorMessage } = useSelector((state) => state.auth);

  const closeModal = () => {
    dispatch(clearError());
  };

  return (
    <>
      <section className="loginModal-section">
        <div className="loginModal-container">
          <div className="loginModal-icon">
            <div>
              <ImCross onClick={closeModal} />
            </div>
          </div>
          <div className="login-message">
            <h3>{errorMessage.title}</h3>
            <span>{errorMessage.message}</span>
          </div>
          <div className="login-reason">
            <span>REASON</span>
            <p>{errorMessage.reason}</p>
          </div>
          <NavLink
            to="/login"
            className="try-again-btn"
            onClick={closeModal}
          >
            Try Again
          </NavLink>
        </div>
      </section>
    </>
  );
};
