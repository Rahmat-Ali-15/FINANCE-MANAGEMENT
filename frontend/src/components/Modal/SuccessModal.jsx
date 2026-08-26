import { useDispatch, useSelector } from "react-redux";
import "./SuccessModal.css";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { clearSuccess } from "../../features/auth/authSlice";

export const SuccessModal = ({redirectPath}) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth);

  const closeModal = () => {
      dispatch(clearSuccess());
    };

  return (
    <>
      <section className="successModal-section">
        <div className="successModal-container">
          <div className="successModal-icon">
            <div>
              <FaCheck />
            </div>
          </div>
          <div className="success-message">
            <h3>{success.title}</h3>
            <span>{success.message}</span>
          </div>
          <p className="success-desc">{success.description}</p>
          <NavLink className="continue-again-btn" to={redirectPath} onClick={closeModal}>Continue</NavLink>
        </div>
      </section>
    </>
  );
};
